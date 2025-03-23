'use client';

import React from 'react';
import { Card, Row, Col, Select, DatePicker } from 'antd';
import ReactECharts from 'react-echarts';
import MainLayout from '@/components/Layout';
import styles from './analysis.module.css';

const { RangePicker } = DatePicker;
const { Option } = Select;

const AnalysisPage = () => {
  // 性能测试数据
  const performanceOption = {
    title: {
      text: '电池性能测试趋势'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['电压', '电流', '温度']
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '电压',
        type: 'line',
        data: [3.7, 3.8, 3.6, 3.9, 3.7, 3.8]
      },
      {
        name: '电流',
        type: 'line',
        data: [2.1, 2.3, 2.0, 2.4, 2.2, 2.3]
      },
      {
        name: '温度',
        type: 'line',
        data: [25, 26, 24, 27, 25, 26]
      }
    ]
  };

  // 测试结果分布
  const resultOption = {
    title: {
      text: '测试结果分布'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: [
          { value: 735, name: '合格' },
          { value: 580, name: '不合格' },
          { value: 484, name: '待复测' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  // 部门测试统计
  const departmentOption = {
    title: {
      text: '各部门测试统计'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      data: ['研发部', '测试部', '质量部']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        type: 'bar',
        data: [320, 240, 180]
      }
    ]
  };

  return (
    <MainLayout>
      <div className={styles.analysis}>
        <div className={styles.filter}>
          <Select defaultValue="all" style={{ width: 120, marginRight: 16 }}>
            <Option value="all">全部类型</Option>
            <Option value="performance">性能测试</Option>
            <Option value="life">寿命测试</Option>
            <Option value="safety">安全测试</Option>
          </Select>
          <RangePicker />
        </div>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card>
              <ReactECharts option={performanceOption} style={{ height: '400px' }} />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <ReactECharts option={resultOption} style={{ height: '300px' }} />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <ReactECharts option={departmentOption} style={{ height: '300px' }} />
            </Card>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
};

export default AnalysisPage; 