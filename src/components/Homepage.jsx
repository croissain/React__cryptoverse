import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

function Homepage() {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row span={12}>
        <Statistic title="Total Cryptocurrencies" value="5"></Statistic>
      </Row>
      <Row span={12}>
        <Statistic title="Total Exchanges" value="5"></Statistic>
      </Row>
      <Row span={12}>
        <Statistic title="Total Market Cap" value="5"></Statistic>
      </Row>
      <Row span={12}>
        <Statistic title="Total 24h Volum" value="5"></Statistic>
      </Row>
      <Row span={12}>
        <Statistic title="Total Cryptocurrencies" value="5"></Statistic>
      </Row>
      <Row span={12}>
        <Statistic title="Total Cryptocurrencies" value="5"></Statistic>
      </Row>
    </>
  );
}

export default Homepage;
