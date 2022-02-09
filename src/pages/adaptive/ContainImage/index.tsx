import React, { useRef } from 'react';
import { ContentWrapper, SForm } from '@szsk/rac';
import { Button, Table } from 'antd';
import { IFormItem } from '@szsk/rac/lib/Form/type';
import CodeBox from '@/components/CodeBox';
import Demo from './demos/demo';
import DemoList from './demos/demoList';
import DocSection from '@/components/DocSection';
import { ATTRIBUTE_COLUMNS } from '@/constants';

const ContainImageTest = () => {
  const searchConfig: IAttribute[] = [
    {
      key: 'imgSrc',
      type: 'string',
      desc: '图片地址',
    },
    {
      key: 'width',
      type: 'string',
      desc: '容器宽度',
      default: '100px',
    },
    {
      key: 'height',
      type: 'string',
      desc: '容器高度',
      default: '100px',
    },
    {
      key: 'outerClass',
      type: 'string',
      desc: '外部传的class',
    },
    {
      key: 'picCallback',
      type: '() => void',
      desc: '赋予点击事件的情况',
    },
  ];
  return (
    <ContentWrapper title="ContainImage">
      <DocSection>
        使图片以contain的形式存在于容器中，对比background-size:
        contain的形式更直接，损耗更小
      </DocSection>
      <DocSection title="代码展示">
        <DemoList />
      </DocSection>
      <DocSection title="API">
        <div>ContainImage</div>
        <Table columns={ATTRIBUTE_COLUMNS} dataSource={searchConfig} />
      </DocSection>
    </ContentWrapper>
  );
};

export default ContainImageTest;
