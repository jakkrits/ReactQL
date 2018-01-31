import React from 'react';
import Helmet from 'react-helmet';
import { CardBody, CardSubtitle, CardDeck } from 'reactstrap';
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

  render() {
    return (
      <PageLayout>
        {renderMetaData()}
        <Row>
          <Col>
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
                  src="https://player.twitch.tv/?channel=lds7131"
                  frameBorder="0"
                  allowFullScreen="true"
                  scrolling="no"
                  height="350"
                  width="100%"
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
                  src="https://player.twitch.tv/?channel=iateyourpie"
                  frameBorder="0"
                  allowFullScreen="true"
                  scrolling="no"
                  height="350"
                  width="100%"
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
                  src="https://player.twitch.tv/?channel=474784"
                  frameBorder="0"
                  allowFullScreen="true"
                  scrolling="no"
                  height="350"
                  width="100%"
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
                  src="https://player.twitch.tv/?channel=p4wnyhof"
                  frameBorder="0"
                  allowFullScreen="true"
                  scrolling="no"
                  height="350"
                  width="100%"
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
                  src="https://player.twitch.tv/?channel=playbattlegrounds"
                  frameBorder="0"
                  allowFullScreen="true"
                  scrolling="no"
                  height="350"
                  width="100%"
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
          </Col>
        </Row>
      </PageLayout>
    );
  }
}

export default HomeView;
