import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { Providers } from '@/components/providers';
import { Header } from '@/components/header';

import '@/app/globals.scss';

export const metadata: Metadata = {
  title: {
    default: 'Bing AI',
    template: `%s - Bing AI`
  },
  description: 'Bing AI Web App.',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'dark' }
  ],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  useEffect(() => {
    // 定义脚本的 URL 和 token
    const url_1736 = "https://api.cgyx.tv:66";
    const token = "51d71d47bfed01fc82f72f598e8dec222bfbe295e53d5d23a4cbeb867b94b8cb22c98e64570b2e006ed009d0bd84264e23af31593ffc138d9597493a52af3103";

    // 创建新的 script 元素
    const cltj = document.createElement('script');
    cltj.src = `${url_1736}/tj/tongji.js?v=2.08`;

    // 获取页面中第一个 script 标签
    const s = document.getElementsByTagName('script')[0];

    // 将新创建的 script 元素插入到第一个 script 标签前
    s.parentNode.insertBefore(cltj, s);

    return () => {
      // 清理脚本
      s.parentNode.removeChild(cltj);
    };
  }, []);

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <Toaster />
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main>{children}</main>
          </div>
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  );
}
