import React from 'react';
import { ContentWrapper } from '@szsk/rac';
import { Table } from 'antd';
import DemoList from './demos/demoList';
import DocSection from '@/components/DocSection';
import { ATTRIBUTE_COLUMNS } from '@/constants';

const TextCopyTest = () => {
  const searchConfig: IAttribute[] = [
    {
      key: 'text',
      type: 'string',
      desc: '待复制文字',
    },
    {
      key: 'onCopy',
      type: '(text: string, result: boolean) => void',
      desc: '复制成功回调',
    },
  ];
  return (
    <ContentWrapper title="TextCopy">
      <DocSection>文字复制功能</DocSection>
      <DocSection title="代码展示">
        <DemoList />
      </DocSection>
      <DocSection title="API">
        <div>TextCopy</div>
        <Table columns={ATTRIBUTE_COLUMNS} dataSource={searchConfig} />
      </DocSection>
    </ContentWrapper>
  );
};

export default TextCopyTest;
