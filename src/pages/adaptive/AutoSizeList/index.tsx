import React, { useRef } from 'react';
import { ContentWrapper, SForm } from '@szsk/rac';
import { Button, Table } from 'antd';
import { IFormItem } from '@szsk/rac/lib/Form/type';
import CodeBox from '@/components/CodeBox';
import Demo from './demos/demo';
import DemoList from './demos/demoList';
import DocSection from '@/components/DocSection';
import { ATTRIBUTE_COLUMNS } from '@/constants';

const AutoSizeListTest = () => {
  const searchConfig: IAttribute[] = [
    {
      key: 'list',
      type: 'any[]',
      desc: '数据源',
    },
    {
      key: 'render',
      type: '(item: any, index?: number) => JSX.Element',
      desc: 'item渲染方式',
    },
    {
      key: 'itemWidth',
      type: 'number',
      desc: 'item宽度',
    },
    {
      key: 'minSpace',
      type: 'number',
      desc: '两个item中间最小padding',
    },
  ];
  return (
    <ContentWrapper title="AutoSizeList">
      <DocSection>用于一块一块的item列表自适应展示</DocSection>
      <DocSection title="代码展示">
        <DemoList />
      </DocSection>
      <DocSection title="API">
        <div>AutoSizeList</div>
        <Table columns={ATTRIBUTE_COLUMNS} dataSource={searchConfig} />
      </DocSection>
    </ContentWrapper>
  );
};

export default AutoSizeListTest;
