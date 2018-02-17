import React from 'react';
import Helmet from 'react-helmet';
import { CardBody, CardSubtitle, CardDeck } from 'reactstrap';
import YouTube from 'react-youtube';
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
      screenshot: null,
      videoIdD: 'AbTrGcHWOWA',
      pizero: '3qvwtrWb0lQ',
      piblackbox: 'Y59Fg_KmnrA',
      piscreen: 'qbw_kkZvISI'
    };
  }

  render() {
    const opts = {
      width: '100%',
      playerVars: {
        autoplay: 1
      }
    };
    return (
      <PageLayout>
        {renderMetaData()}
        <Row>
          <Col>
            <CardDeck>
              <Card>
                <YouTube videoId={this.state.pizero} opts={opts} />
                <CardBody>
                  <CardTitle>Camera 1</CardTitle>
                  <CardSubtitle>Gate A</CardSubtitle>
                  <CardText>
                    Status: <small className="text-muted">Streaming</small>
                  </CardText>
                  <Button color="primary">Camera Control</Button>
                </CardBody>
              </Card>
              <Card>
                <YouTube videoId={this.state.piblackbox} opts={opts} />
                <CardBody>
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
            <CardDeck>
              <Card>
                <YouTube videoId={this.state.piscreen} opts={opts} />
                <CardBody>
                  <CardTitle>Camera 1</CardTitle>
                  <CardSubtitle>Gate A</CardSubtitle>
                  <CardText>
                    Status: <small className="text-muted">Streaming</small>
                  </CardText>
                  <Button color="primary">Camera Control</Button>
                </CardBody>
              </Card>
              <Card>
                <YouTube videoId={this.state.videoIdD} opts={opts} />
                <CardBody>
                  <CardTitle>Camera 1</CardTitle>
                  <CardSubtitle>Gate A</CardSubtitle>
                  <CardText>
                    Status: <small className="text-muted">Streaming</small>
                  </CardText>
                  <Button color="primary">Camera Control</Button>
                </CardBody>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </PageLayout>
    );
  }
}

export default HomeView;
