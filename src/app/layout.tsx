import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '电池性能测试系统',
  description: '基于AI的电池性能测试系统',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <ConfigProvider locale={zhCN}>
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
} 