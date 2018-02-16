import React from 'react';
import Helmet from 'react-helmet';
import { CardBody, CardSubtitle, CardDeck } from 'reactstrap';
import Hls from 'hls.js';
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
    this._onTouchInsidePlayer = this._onTouchInsidePlayer.bind(this);
  }
  componentDidMount() {
    if (Hls.isSupported() && this.player) {
      const streamURL = `http://128.199.157.0:8080/live/blackbox.m3u8`;
      const video = this.player;

      video.addEventListener('contextmenu', e => {
        e.preventDefault();
        return false;
      });

      const hls = new Hls();
      hls.loadSource(streamURL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
      });
    }
  }

  _onTouchInsidePlayer() {
    if (this.player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  render() {
    return (
      <PageLayout>
        {renderMetaData()}
        <Row>
          <Col>
            <CardDeck>
              <Card>
                <CardBody>
                  <video
                    controls={false}
                    onClick={this._onTouchInsidePlayer}
                    ref={player => (this.player = player)}
                    autoPlay={true}
                    height="100%"
                    width="100%"
                  />
                  <CardTitle>Camera 1</CardTitle>
                  <CardSubtitle>Gate A</CardSubtitle>
                  <CardText>
                    Status: <small className="text-muted">Streaming</small>
                  </CardText>
                  <Button color="primary">Camera Control</Button>
                </CardBody>
              </Card>
            </CardDeck>
            <br />
          </Col>
        </Row>
      </PageLayout>
    );
  }
}

export default HomeView;
