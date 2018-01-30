import React from 'react';
import Helmet from 'react-helmet';
import Webcam from 'react-webcam';
import { CardImg, CardBody, CardSubtitle } from 'reactstrap';
import { PageLayout } from '../../common/components/web';
import { Row, Col, Card, CardText, CardTitle, Button } from '../../common/components/web/ui-bootstrap';

const renderMetaData = () => (
  <Helmet
    title="Home"
    meta={[
      {
        name: 'description',
        content: 'Home page'
      }
    ]}
  />
);

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenshot: null
    };
  }

  capture = () => {
    const screenshot = this.webcam.getScreenshot();
    this.setState({
      screenshot
    });
  };

  render() {
    return (
      <PageLayout>
        {renderMetaData()}
        <div className="container">
          <Row>
            <Col>
              <Card>
                <CardImg top width="100%" src={require('./homepage-archanai.jpg')} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    <p>Some quick example text to build on the card title and make up the bulk of the content.</p>
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br />
          <p> More Feed </p>
          <Row>
            <Col>
              <h1>FEED4</h1>
              <div>
                <iframe
                  src="https://player.twitch.tv/?volume=0.5&!muted&channel=jakkrits1"
                  height="100%"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </Col>
            <Col>
              <h1>FEED5</h1>
              <Webcam
                audio={true}
                height={350}
                ref={node => (this.webcam = node)}
                screenshotFormat="image/jpeg"
                width={350}
              />
              <button onClick={this.capture}>บันทึกภาพ</button>
              {this.state.screenshot ? (
                <img src={this.state.screenshot} />
              ) : (
                <img src="https://i.ytimg.com/vi/XQu8TTBmGhA/hqdefault.jpg" />
              )}
            </Col>
            <Col>
              <h1>FEED6</h1>
            </Col>
          </Row>
        </div>,
      </PageLayout>
    );
  }
}

export default HomeView;
