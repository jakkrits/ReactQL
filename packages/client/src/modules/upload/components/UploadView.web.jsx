import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Dropzone from 'react-dropzone';
import filesize from 'filesize';
import axios from 'axios';
import { PageLayout, Row, Col, Table, Button, Alert } from '../../common/components/web';
import settings from '../../../../../../settings';

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
  }

  state = {
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
    }
  };

  hendleRemoveFile = async id => {
    const { removeFile } = this.props;
    const result = await removeFile(id);
    if (result && result.error) {
      this.setState({ error: result.error });
    } else {
      this.setState({ error: null });
    }
  };

  fetchRealtimeFeed = feed => console.log(feed);

  getRequestImage = url => {
    axios
      .get(`http://203.154.245.241:9080/powerai-vision/api/dlapis/0572bb30-328b-4ecb-8694-544ad3c0be57?imageUrl=${url}`)
      .then(response => {
        console.warn(response);
        let json = JSON.stringify(response.data.classified);
        let jsonParsed = JSON.parse(json);
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
        console.log(error);
      });
  };

  showResultOnImage = () => (
    <div>
      <p>Confidence: {this.state.returnedObject.confidence}</p>
      <p>Label: {this.state.returnedObject.label}</p>
      <p>X max: {this.state.returnedObject.xmax}</p>
      <p>Y max: {this.state.returnedObject.ymax}</p>
      <p>X min: {this.state.returnedObject.xmin}</p>
      <p>Y min: {this.state.returnedObject.ymin}</p>
      <p>Result: {this.state.returnedObject.result}</p>
    </div>
  );

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
    let lastUploadItem = files[files.length - 1];
    let returned = this.getRequestImage('https://archanai-lab.herokuapp.com/' + lastUploadItem.path);
    this.setState({
      returnedObject: returned
    });
    const { error } = this.state;
    const columns = [
      {
        title: 'ชื่อไฟล์',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
          <a href={record.path} download={text}>
            {text} ({filesize(record.size)})
          </a>
        )
      },
      {
        title: 'ลบ',
        key: 'actions',
        width: 50,
        render: (text, record) => (
          <Button color="danger" size="sm" className="delete-button" onClick={() => this.hendleRemoveFile(record.id)}>
            ลบ
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
              <img className="img-fluid" src={this.state.returnedObject.imageUrl} />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Dropzone onDrop={this.onDrop(uploadFiles)}>
                <p>อัพโหลดไฟล์ภาพหรือวิดีโอ (คลิกหรือลากไฟล์วางที่นี่)</p>
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
