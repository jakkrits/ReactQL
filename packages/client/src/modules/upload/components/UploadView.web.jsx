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
    removeFile: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.fetchImage = this.fetchImage.bind(this);
  }

  state = {
    error: null,
    returnedObject: null
  };
  url = 'http://203.154.245.241:9080/powerai-vision/temp/ee4749bb-0e0f-45a4-8d58-e9c0eab9f726.jpg';
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
      this.fetchImage(this.url);
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

  fetchImage = imageUrl => {
    axios
      .get(
        `http://203.154.245.241:9080/powerai-vision/api/dlapis/0572bb30-328b-4ecb-8694-544ad3c0be57?imageUrl=${imageUrl}`
      )
      .then(response => {
        let json = JSON.stringify(response.data.classified);
        let jsonParsed = JSON.parse(json);
        let { confidence, label, xmax, ymax, xmin, ymin } = jsonParsed[0];
        console.log(confidence);
        console.log(label);
        console.log(xmax);
        console.log(ymax);
        console.log(xmin);
        console.log(ymin);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { files, uploadFiles } = this.props;
    const { error } = this.state;
    console.log(files);
    console.log('******');
    console.log(uploadFiles);
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
