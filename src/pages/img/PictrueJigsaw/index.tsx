import React from 'react';
import { ContentWrapper } from '@szsk/rac';
import { Table } from 'antd';
import DemoList from './demos/demoList';
import DocSection from '@/components/DocSection';
import { ATTRIBUTE_COLUMNS } from '@/constants';

const PictrueJigsawTest = () => {
  const searchConfig: IAttribute[] = [
    {
      key: 'picList',
      type: 'string[]',
      desc: '图片地址列表',
    },
    {
      key: 'width',
      type: 'string',
      desc: '容器宽度，目前只接受px',
      default: 'false',
    },
    {
      key: 'height',
      type: 'string',
      desc: '容器高度，目前只接受px',
    },
    {
      key: 'className',
      type: 'string',
      desc: '外部class',
    },
  ];
  return (
    <ContentWrapper title="PictrueJigsaw">
      <DocSection>
        拼图功能，在测试过程中仍有一些问题1.图片在增加过程中有可能会被拉伸，2.图片增加到8层左右似乎超出了边界
      </DocSection>
      <DocSection title="代码展示">
        <DemoList />
      </DocSection>
      <DocSection title="API">
        <div>PictrueJigsaw</div>
        <Table columns={ATTRIBUTE_COLUMNS} dataSource={searchConfig} />
      </DocSection>
    </ContentWrapper>
  );
};

export default PictrueJigsawTest;
