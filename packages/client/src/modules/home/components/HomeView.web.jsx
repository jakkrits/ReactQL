import React from 'react';
import Helmet from 'react-helmet';
import { CardBody, CardSubtitle, CardDeck } from 'reactstrap';
import YouTube from 'react-youtube';
import html2canvas from 'html2canvas';
import styled from 'styled-components';
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

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      screenshot: null,
      videoIdD: 'AbTrGcHWOWA',
      pizero: 'f69entCLgQY',
      piblackbox: 'Y59Fg_KmnrA',
      piscreen: 'HsYM2q-IUhY'
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
    const element = document.getElementById('myId');

    html2canvas(element).then(function(canvas) {
      // Export the canvas to its data URI representation
      const imageData = canvas.toDataURL('image/png');
      console.log(imageData);
    });
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
          <Title>{this.state.date.toLocaleTimeString()}</Title>
        </Row>
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
                <div id="cam1">
                  <YouTube videoId={this.state.piblackbox} opts={opts} />
                </div>
                <CardBody>
                  <CardTitle>Camera 2</CardTitle>
                  <CardSubtitle>Gate B</CardSubtitle>
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
                  <CardTitle>Camera 3</CardTitle>
                  <CardSubtitle>Gate C</CardSubtitle>
                  <CardText>
                    Status: <small className="text-muted">Streaming</small>
                  </CardText>
                  <Button color="primary">Camera Control</Button>
                </CardBody>
              </Card>
              <Card>
                <YouTube videoId={this.state.videoIdD} opts={opts} />
                <CardBody>
                  <CardTitle>Camera 4</CardTitle>
                  <CardSubtitle>Gate D</CardSubtitle>
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
