'use client';

import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Select, DatePicker, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import MainLayout from '@/components/Layout';
import type { ColumnsType } from 'antd/es/table';

const { Option } = Select;

interface TestRecord {
  id: string;
  batteryId: string;
  testType: string;
  status: string;
  startTime: string;
  endTime: string;
  result: string;
  operator: string;
}

const TestPage = () => {
  const [testRecords, setTestRecords] = useState<TestRecord[]>([
    {
      id: '1',
      batteryId: 'BAT001',
      testType: '性能测试',
      status: '进行中',
      startTime: '2024-02-20 10:00:00',
      endTime: '2024-02-20 12:00:00',
      result: '待完成',
      operator: '张三',
    },
    {
      id: '2',
      batteryId: 'BAT002',
      testType: '寿命测试',
      status: '已完成',
      startTime: '2024-02-19 09:00:00',
      endTime: '2024-02-20 09:00:00',
      result: '合格',
      operator: '李四',
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState<string | null>(null);

  const columns: ColumnsType<TestRecord> = [
    {
      title: '电池编号',
      dataIndex: 'batteryId',
      key: 'batteryId',
    },
    {
      title: '测试类型',
      dataIndex: 'testType',
      key: 'testType',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      key: 'endTime',
    },
    {
      title: '结果',
      dataIndex: 'result',
      key: 'result',
    },
    {
      title: '操作员',
      dataIndex: 'operator',
      key: 'operator',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            编辑
          </Button>
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          >
            删除
          </Button>
        </>
      ),
    },
  ];

  const handleAdd = () => {
    setEditingId(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEdit = (record: TestRecord) => {
    setEditingId(record.id);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleDelete = (id: string) => {
    setTestRecords(testRecords.filter(record => record.id !== id));
    message.success('删除成功');
  };

  const handleModalOk = () => {
    form.validateFields().then(values => {
      if (editingId) {
        setTestRecords(testRecords.map(record =>
          record.id === editingId ? { ...values, id: editingId } : record
        ));
        message.success('更新成功');
      } else {
        const newId = String(testRecords.length + 1);
        setTestRecords([...testRecords, { ...values, id: newId }]);
        message.success('添加成功');
      }
      setIsModalVisible(false);
    });
  };

  return (
    <MainLayout>
      <div style={{ padding: '24px' }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAdd}
          style={{ marginBottom: 16 }}
        >
          添加测试记录
        </Button>
        <Table columns={columns} dataSource={testRecords} rowKey="id" />
      </div>

      <Modal
        title={editingId ? '编辑测试记录' : '添加测试记录'}
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="batteryId"
            label="电池编号"
            rules={[{ required: true, message: '请输入电池编号' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="testType"
            label="测试类型"
            rules={[{ required: true, message: '请选择测试类型' }]}
          >
            <Select>
              <Option value="性能测试">性能测试</Option>
              <Option value="寿命测试">寿命测试</Option>
              <Option value="安全测试">安全测试</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="status"
            label="状态"
            rules={[{ required: true, message: '请选择状态' }]}
          >
            <Select>
              <Option value="待开始">待开始</Option>
              <Option value="进行中">进行中</Option>
              <Option value="已完成">已完成</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="startTime"
            label="开始时间"
            rules={[{ required: true, message: '请选择开始时间' }]}
          >
            <DatePicker showTime style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="endTime"
            label="结束时间"
            rules={[{ required: true, message: '请选择结束时间' }]}
          >
            <DatePicker showTime style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="result"
            label="结果"
            rules={[{ required: true, message: '请选择结果' }]}
          >
            <Select>
              <Option value="待完成">待完成</Option>
              <Option value="合格">合格</Option>
              <Option value="不合格">不合格</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="operator"
            label="操作员"
            rules={[{ required: true, message: '请输入操作员姓名' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </MainLayout>
  );
};

export default TestPage; 