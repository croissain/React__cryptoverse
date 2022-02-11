import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

import { Col, Row, Typography } from 'antd';
import * as usertz from 'user-timezone';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  const dateTimeFormat = 'MM/DD/YYYY';

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      usertz.datetime(coinHistory?.data?.history[i].timestamp, dateTimeFormat)
    );
    if (i < 10) console.log(coinTimestamp);
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fillcolor: gradient,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const ctx = document.getElementById('chart-context').getContext('2d');

  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(0,113,189,0.5)');
  gradient.addColorStop(1, 'rgba(0,113,189,0)');

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart{' '}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <div id="chart-context">
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default LineChart;
