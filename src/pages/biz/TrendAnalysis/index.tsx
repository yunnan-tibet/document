import React, { useRef } from 'react';
import { ContentWrapper, SForm } from '@szsk/rac';
import { Button, Table } from 'antd';
import { IFormItem } from '@szsk/rac/lib/Form/type';
import CodeBox from '@/components/CodeBox';
import Demo from './demos/demo';
import DemoList from './demos/demoList';
import DocSection from '@/components/DocSection';
import { ATTRIBUTE_COLUMNS } from '@/constants';

const TrendAnalysisTest = () => {
  const formConfig: IAttribute[] = [
    {
      key: 'formItems',
      type: 'IFormItem[]',
      desc: 'item配置',
    },
    {
      key: 'columns',
      type: 'number',
      desc: '列数',
      default: '3',
    },
  ];

  return (
    <ContentWrapper title="TrendAnalysis">
      <DocSection>分组多测点趋势分析</DocSection>
      <DocSection title="代码展示">
        <DemoList />
      </DocSection>
      <DocSection title="API">
        <div>TrendAnalysis</div>
        <Table columns={ATTRIBUTE_COLUMNS} dataSource={formConfig} />
      </DocSection>
    </ContentWrapper>
  );
};

export default TrendAnalysisTest;
