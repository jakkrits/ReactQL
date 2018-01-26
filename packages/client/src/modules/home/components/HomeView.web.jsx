import React from 'react';
import Helmet from 'react-helmet';
import { PageLayout } from '../../common/components/web';
import { Row, Col } from '../../common/components/web/ui-antd/components';

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
      <div>
        <Row>
          <Col span={24}>
            <h1>ควย</h1>
            <img src="../../../../../../app.png" className="img-fluid" alt="Responsive image" />
          </Col>
        </Row>
      </div>,
    </PageLayout>
  );
};

export default HomeView;
