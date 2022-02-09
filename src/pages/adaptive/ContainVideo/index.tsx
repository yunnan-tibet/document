import React from 'react';
import { ContentWrapper } from '@szsk/rac';
import { Table } from 'antd';
import DemoList from './demos/demoList';
import DocSection from '@/components/DocSection';
import { ATTRIBUTE_COLUMNS } from '@/constants';

const ContainVideoTest = () => {
  const searchConfig: IAttribute[] = [
    {
      key: 'videoSrc',
      type: 'string',
      desc: '视频地址',
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
      key: 'title',
      type: 'string',
      desc: '视频播放弹窗的title',
    },
    {
      key: 'outerClass',
      type: 'string',
      desc: '外部传的class',
    },
    {
      key: 'cropEnable',
      type: 'boolean',
      desc: '是否开启视频截图能力',
      default: 'false',
    },
    {
      key: 'videoCallback',
      type: '(dataUrl?: string) => void',
      desc: '截图回调函数',
    },
  ];
  return (
    <ContentWrapper title="ContainVideo">
      <DocSection>
        使视频以contain的形式存在于容器中，并拥有视频截图能力
      </DocSection>
      <DocSection title="代码展示">
        <DemoList />
      </DocSection>
      <DocSection title="API">
        <div>ContainVideo</div>
        <Table columns={ATTRIBUTE_COLUMNS} dataSource={searchConfig} />
      </DocSection>
    </ContentWrapper>
  );
};

export default ContainVideoTest;
