import React from 'react';
import { ContentWrapper } from '@szsk/rac';
import { Table } from 'antd';
import DemoList from './demos/demoList';
import DocSection from '@/components/DocSection';
import { ATTRIBUTE_COLUMNS } from '@/constants';

const CronTest = () => {
  const searchConfig: IAttribute[] = [
    {
      key: 'value',
      type: 'string',
      desc: 'Cron表达式，用来解析到UI',
    },
    {
      key: 'onChange',
      type: '(cronStr: string) => void',
      desc: '复制成功回调',
    },
    {
      key: 'style',
      type: 'React.CSSProperties',
      desc: '样式',
    },
  ];
  return (
    <ContentWrapper title="Cron">
      <DocSection>Cron</DocSection>
      <DocSection title="代码展示">
        <DemoList />
      </DocSection>
      <DocSection title="API">
        <div>Cron</div>
        <Table columns={ATTRIBUTE_COLUMNS} dataSource={searchConfig} />
      </DocSection>
    </ContentWrapper>
  );
};

export default CronTest;
