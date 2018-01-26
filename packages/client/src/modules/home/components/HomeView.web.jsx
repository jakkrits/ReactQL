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
          <Col span={24}> จอ 1 </Col>
        </Row>
      </div>,
    </PageLayout>
  );
};

export default HomeView;
