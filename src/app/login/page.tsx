'use client';

import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

const LoginPage = () => {
  const router = useRouter();

  const onFinish = (values: any) => {
    // 这里模拟登录验证
    if (values.username === 'admin' && values.password === 'admin123') {
      localStorage.setItem('token', 'dummy-token');
      message.success('登录成功！');
      router.push('/dashboard');
    } else {
      message.error('用户名或密码错误！');
    }
  };

  return (
    <div className={styles.container}>
      <Card title="电池性能测试系统" className={styles.loginCard}>
        <Form
          name="login"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名！' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="用户名" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码！' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="密码" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage; 