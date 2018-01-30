import React from 'react';
import Helmet from 'react-helmet';
import Webcam from 'react-webcam';
import { CardBody, CardSubtitle, CardDeck } from 'reactstrap';
import { PageLayout } from '../../common/components/web';
import { Card, CardText, CardTitle, Button } from '../../common/components/web/ui-bootstrap';

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
        <CardDeck>
          <Card>
            <iframe
              src="https://player.twitch.tv/?volume=0.5&!muted&channel=jakkrits1"
              height="350px"
              width="100%"
              frameBorder="0"
              allowFullScreen
            />
            <CardBody>
              <CardTitle>กล้อง 1</CardTitle>
              <CardSubtitle>สถานที่ 1</CardSubtitle>
              <CardText>
                สถานะ: <small className="text-muted">Streaming</small>
              </CardText>
              <Button color="primary">บังคับกล้อง</Button>
            </CardBody>
          </Card>
          <Card>
            <iframe
              src="https://player.twitch.tv/?volume=0.5&!muted&channel=jakkrits1"
              height="350px"
              width="100%"
              frameBorder="0"
              allowFullScreen
            />
            <CardBody>
              <CardTitle>กล้อง 1</CardTitle>
              <CardSubtitle>สถานที่ 1</CardSubtitle>
              <CardText>
                สถานะ: <small className="text-muted">Streaming</small>
              </CardText>
              <Button color="primary">บังคับกล้อง</Button>
            </CardBody>
          </Card>
          <Card>
            <iframe
              src="https://player.twitch.tv/?volume=0.5&!muted&channel=jakkrits1"
              height="350px"
              width="100%"
              frameBorder="0"
              allowFullScreen
            />
            <CardBody>
              <CardTitle>กล้อง 1</CardTitle>
              <CardSubtitle>สถานที่ 1</CardSubtitle>
              <CardText>
                สถานะ: <small className="text-muted">Streaming</small>
              </CardText>
              <Button color="primary">บังคับกล้อง</Button>
            </CardBody>
          </Card>
        </CardDeck>
        <br />
        <CardDeck>
          <Card>
            <iframe
              src="https://player.twitch.tv/?volume=0.5&!muted&channel=jakkrits1"
              height="350px"
              width="100%"
              frameBorder="0"
              allowFullScreen
            />
            <CardBody>
              <CardTitle>กล้อง 1</CardTitle>
              <CardSubtitle>สถานที่ 1</CardSubtitle>
              <CardText>
                สถานะ: <small className="text-muted">Streaming</small>
              </CardText>
              <Button color="primary">บังคับกล้อง</Button>
            </CardBody>
          </Card>
          <Card>
            <iframe
              src="https://player.twitch.tv/?volume=0.5&!muted&channel=jakkrits1"
              height="350px"
              width="100%"
              frameBorder="0"
              allowFullScreen
            />
            <CardBody>
              <CardTitle>กล้อง 1</CardTitle>
              <CardSubtitle>สถานที่ 1</CardSubtitle>
              <CardText>
                สถานะ: <small className="text-muted">Streaming</small>
              </CardText>
              <Button color="primary">บังคับกล้อง</Button>
            </CardBody>
          </Card>
          <Card>
            <iframe
              src="https://player.twitch.tv/?volume=0.5&!muted&channel=jakkrits1"
              height="350px"
              width="100%"
              frameBorder="0"
              allowFullScreen
            />
            <CardBody>
              <CardTitle>กล้อง 1</CardTitle>
              <CardSubtitle>สถานที่ 1</CardSubtitle>
              <CardText>
                สถานะ: <small className="text-muted">Streaming</small>
              </CardText>
              <Button color="primary">บังคับกล้อง</Button>
            </CardBody>
          </Card>
        </CardDeck>
        <div className="container d-none">
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
        </div>,
      </PageLayout>
    );
  }
}

export default HomeView;
