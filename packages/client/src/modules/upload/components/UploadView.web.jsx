import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Dropzone from 'react-dropzone';
import filesize from 'filesize';
import axios from 'axios';
import FormData from 'form-data';
import { PageLayout, Row, Col, Table, Button, Alert } from '../../common/components/web';
import settings from '../../../../../../settings';

// const BASE_URL = 'http://203.154.245.241:9080/powerai-vision/api/dlapis/';
const BASE_URL = 'https://203.154.59.71/powerai-vision/api/dlapis/';
// const API = '0572bb30-328b-4ecb-8694-544ad3c0be57'; // GUN ONLY
const API = 'c954d598-ee23-49be-bfa2-dc80402c7966'; // Gun + Helmet

const ENDPOINT = BASE_URL + API;
export default class UploadView extends React.PureComponent {
  static propTypes = {
    files: PropTypes.array,
    uploadFiles: PropTypes.func.isRequired,
    removeFile: PropTypes.func.isRequired,
    returnedObject: PropTypes.object,
    loading: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.getRequestImage = this.getRequestImage.bind(this);
    this.postRequestImage = this.postRequestImage.bind(this);
  }

  state = {
    imageUrl: '',
    error: null,
    returnedObject: {
      confidence: '',
      label: '',
      xmax: 0,
      ymax: 0,
      xmin: 0,
      ymin: 0,
      imageUrl: '',
      result: ''
    }
  };

  renderMetaData = () => (
    <Helmet
      title={`${settings.app.name} - Upload`}
      meta={[
        {
          name: 'description',
          content: `${settings.app.name} - Upload page`
        }
      ]}
    />
  );

  onDrop = uploadFiles => async files => {
    const result = await uploadFiles(files);
    if (result && result.error) {
      this.setState({ error: result.error });
    } else {
      this.setState({ error: null });
      if (this.props.files) {
        const { files } = this.props;
        const latestUploaded = files[files.length - 1];
        let pathUrl = latestUploaded.path;
        this.setState({ imageUrl: `${window.origin}/${pathUrl}` });
      }
      this.getRequestImage();
      this.postRequestImage();
    }
  };

  handleRemoveFile = async id => {
    const { removeFile } = this.props;
    const result = await removeFile(id);
    if (result && result.error) {
      this.setState({ error: result.error });
    } else {
      this.setState({ error: null });
    }
  };

  fetchRealtimeFeed = feed => console.log(feed);

  getRequestImage = () => {
    console.log(ENDPOINT);
    axios
      .get(ENDPOINT, {
        params: {
          imageUrl: this.state.imageUrl
        }
      })
      .then(response => {
        console.warn(response);
        let json = JSON.stringify(response.data.classified);
        console.log(json);
        let jsonParsed = JSON.parse(json);
        console.log(jsonParsed);
        let { imageUrl, result } = response.data;
        let { confidence, label, xmax, ymax, xmin, ymin } = jsonParsed[0];
        this.setState({
          returnedObject: {
            imageUrl,
            result,
            confidence,
            label,
            xmax,
            ymax,
            xmin,
            ymin
          }
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  postRequestImage = () => {
    console.log('Post method');
    console.log(this.state.imageUrl);
    let data = new FormData();
    const { files } = this.props.files;
    let latestUploaded = files[files.length - 1];
    data.append(latestUploaded);
    axios
      .post(ENDPOINT, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  showResultOnImage = () => {
    let { confidence, label, xmax, ymax, xmin, ymin, result } = this.state.returnedObject;
    var drawingCanvas = document.getElementById('canvas');
    var ctx = drawingCanvas.msGetInputContext('2d');
    ctx.rect(xmin, ymax, xmax - xmin, ymax - ymin);
    ctx.stroke();
    return (
      <div>
        <p>Confidence: {confidence}</p>
        <p>Label: {label}</p>
        <p>X max: {xmax}</p>
        <p>Y max: {ymax}</p>
        <p>X min: {xmin}</p>
        <p>Y min: {ymin}</p>
        <p>Result: {result}</p>
      </div>
    );
  };

  render() {
    if (this.props.loading) {
      return (
        <PageLayout>
          <Row className="text-center">
            <Col>
              <p>...</p>
            </Col>
          </Row>
        </PageLayout>
      );
    }
    const { files, uploadFiles } = this.props;
    // let lastUploadItem = files[files.length - 1];
    // let returned = this.getRequestImage('https://archanai-lab.herokuapp.com/' + lastUploadItem.path);
    // this.setState({
    //  returnedObject: returned
    // });
    const { error } = this.state;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
          <a href={record.path} download={text}>
            {text} ({filesize(record.size)})
          </a>
        )
      },
      {
        title: 'Delete',
        key: 'actions',
        width: 50,
        render: (text, record) => (
          <Button color="danger" size="sm" className="delete-button" onClick={() => this.hendleRemoveFile(record.id)}>
            Delete
          </Button>
        )
      }
    ];

    return (
      <PageLayout>
        {this.renderMetaData()}
        <div className="text-center">
          <Row className="mb-2">
            <Col xs={4}>{this.state.returnedObject.confidence > 0.5 && this.showResultOnImage()}</Col>
            <Col xs={8}>
              {' '}
              <img className="img-fluid" id="canvas" src={this.state.returnedObject.imageUrl} />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Dropzone onDrop={this.onDrop(uploadFiles)}>
                <p>Click to upload (or Drag & Drop)</p>
              </Dropzone>
            </Col>
            <Col xs={8}>
              {error && <Alert color="error">{error}</Alert>}
              {files && <Table dataSource={files} columns={columns} />}
            </Col>
          </Row>
        </div>
      </PageLayout>
    );
  }
}
