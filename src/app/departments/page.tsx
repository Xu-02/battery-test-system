'use client';

import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import MainLayout from '@/components/Layout';
import type { ColumnsType } from 'antd/es/table';

interface Department {
  id: string;
  name: string;
  description: string;
  manager: string;
  memberCount: number;
}

const DepartmentsPage = () => {
  const [departments, setDepartments] = useState<Department[]>([
    {
      id: '1',
      name: '研发部',
      description: '负责电池研发和测试',
      manager: '张三',
      memberCount: 15,
    },
    {
      id: '2',
      name: '测试部',
      description: '负责电池性能测试',
      manager: '李四',
      memberCount: 10,
    },
    {
      id: '3',
      name: '质量部',
      description: '负责质量控制',
      manager: '王五',
      memberCount: 8,
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState<string | null>(null);

  const columns: ColumnsType<Department> = [
    {
      title: '部门名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '负责人',
      dataIndex: 'manager',
      key: 'manager',
    },
    {
      title: '成员数量',
      dataIndex: 'memberCount',
      key: 'memberCount',
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

  const handleEdit = (record: Department) => {
    setEditingId(record.id);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleDelete = (id: string) => {
    setDepartments(departments.filter(dept => dept.id !== id));
    message.success('删除成功');
  };

  const handleModalOk = () => {
    form.validateFields().then(values => {
      if (editingId) {
        setDepartments(departments.map(dept =>
          dept.id === editingId ? { ...values, id: editingId } : dept
        ));
        message.success('更新成功');
      } else {
        const newId = String(departments.length + 1);
        setDepartments([...departments, { ...values, id: newId }]);
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
          添加部门
        </Button>
        <Table columns={columns} dataSource={departments} rowKey="id" />
      </div>

      <Modal
        title={editingId ? '编辑部门' : '添加部门'}
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="部门名称"
            rules={[{ required: true, message: '请输入部门名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="描述"
            rules={[{ required: true, message: '请输入部门描述' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="manager"
            label="负责人"
            rules={[{ required: true, message: '请输入负责人姓名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="memberCount"
            label="成员数量"
            rules={[{ required: true, message: '请输入成员数量' }]}
          >
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </MainLayout>
  );
};

export default DepartmentsPage; 