import React from 'react';
import Helmet from 'react-helmet';
import { Card } from 'antd';
import { PageLayout } from '../../common/components/web';
import { Row, Col } from '../../common/components/web/ui-antd/components';

const { Meta } = Card;
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

const HomeView = () => {
  return (
    <PageLayout>
      {renderMetaData()}
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row guttter={16}>
          <Col span={16}>
            <Card
              hoverable
              cover={
                <img alt="example" src="https://i.pinimg.com/originals/a4/e8/f6/a4e8f6f6620923f8947cd8ed7e9c2950.jpg" />
              }
            >
              <Meta title="กล้อง 1" description="แยกราชประสงค์" />
            </Card>
          </Col>
          <Col span={16}>
            <Card
              hoverable
              cover={
                <img alt="example" src="https://i.pinimg.com/originals/57/33/69/5733695f52f4408694c8ce7be3b3134d.jpg" />
              }
            >
              <Meta title="กล้อง 2" description="ห้างทองหลีเกี่ยวฮวด" />
            </Card>
          </Col>
          <Col span={16}>
            <Card hoverable cover={<img alt="example" src="https://pbs.twimg.com/media/DKhUFmrVwAAVBn0.jpg" />}>
              <Meta title="กล้อง 3" description="ตู้เอทีเอ็มหน้าโรงบาล" />
            </Card>
          </Col>
        </Row>
        <br />
        <p> More Feed </p>
        <Row gutter={16}>
          <Col span={8}>
            <h1>FEED4</h1>
          </Col>
          <Col span={8}>
            <h1>FEED5</h1>
          </Col>
          <Col span={8}>
            <h1>FEED6</h1>
          </Col>
        </Row>
      </div>,
    </PageLayout>
  );
};

export default HomeView;
