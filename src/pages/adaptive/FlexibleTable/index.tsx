import React, { useRef } from 'react';
import { ContentWrapper, SForm } from '@szsk/rac';
import { Button, Table } from 'antd';
import { IFormItem } from '@szsk/rac/lib/Form/type';
import CodeBox from '@/components/CodeBox';
import Demo from './demos/demo';
import DemoList from './demos/demoList';
import DocSection from '@/components/DocSection';
import { ATTRIBUTE_COLUMNS } from '@/constants';

const FlexibleTableTest = () => {
  const searchConfig: IAttribute[] = [
    {
      key: 'children',
      type: 'Table',
      desc: 'Table组件',
    },
    {
      key: 'skipHeight',
      type: 'number',
      desc: '除去滚动区域的其它高度',
      default: '98',
    },
    {
      key: 'className',
      type: 'string',
      desc: 'class',
    },
    {
      key: 'style',
      type: 'React.CSSProperties',
      desc: '样式',
    },
  ];
  return (
    <ContentWrapper title="FlexibleTable">
      <DocSection>自适应使table列表占据页面剩余的空间</DocSection>
      <DocSection title="代码展示">
        <DemoList />
      </DocSection>
      <DocSection title="API">
        <div>FlexibleTable</div>
        <Table columns={ATTRIBUTE_COLUMNS} dataSource={searchConfig} />
      </DocSection>
    </ContentWrapper>
  );
};

export default FlexibleTableTest;
