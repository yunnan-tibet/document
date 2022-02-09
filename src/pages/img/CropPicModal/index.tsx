import React from 'react';
import { ContentWrapper } from '@szsk/rac';
import { Table } from 'antd';
import DemoList from './demos/demoList';
import DocSection from '@/components/DocSection';
import { ATTRIBUTE_COLUMNS } from '@/constants';

const CropPicModalTest = () => {
  const searchConfig: IAttribute[] = [
    {
      key: 'pic',
      type: 'string',
      desc: '图片地址',
    },
    {
      key: 'visible',
      type: 'boolean',
      desc: '控制Modal显示',
      default: 'false',
    },
    {
      key: 'onCloseModal',
      type: '() => void',
      desc: '关闭Modal回调',
    },
    {
      key: 'onCropData',
      type: '(data: any) => void',
      desc: 'ok回调',
    },
  ];
  return (
    <ContentWrapper title="CropPicModal">
      <DocSection>图片截图功能</DocSection>
      <DocSection title="代码展示">
        <DemoList />
      </DocSection>
      <DocSection title="API">
        <div>CropPicModal</div>
        <Table columns={ATTRIBUTE_COLUMNS} dataSource={searchConfig} />
      </DocSection>
    </ContentWrapper>
  );
};

export default CropPicModalTest;
