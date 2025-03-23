'use client';

import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import {
  BatteryOutlined,
  ExperimentOutlined,
  WarningOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import MainLayout from '@/components/Layout';
import styles from './dashboard.module.css';

const DashboardPage = () => {
  return (
    <MainLayout>
      <div className={styles.dashboard}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="总测试电池数"
                value={156}
                prefix={<BatteryOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="进行中测试"
                value={23}
                prefix={<ExperimentOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="故障电池数"
                value={5}
                prefix={<WarningOutlined />}
                valueStyle={{ color: '#cf1322' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="合格率"
                value={96.8}
                suffix="%"
                prefix={<CheckCircleOutlined />}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
};

export default DashboardPage; 