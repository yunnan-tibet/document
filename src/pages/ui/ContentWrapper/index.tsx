import React from 'react';
import { ContentWrapper } from '@szsk/rac';
import { Table } from 'antd';
import DocSection from '@/components/DocSection';
import { ATTRIBUTE_COLUMNS } from '@/constants';

const ContentWrapperTest = () => {
  const data: IAttribute[] = [
    {
      key: 'title',
      desc: '页面头部名称',
      type: 'string',
    },
    {
      key: 'children',
      desc: '页面内容',
      type: 'ReactNode',
    },
  ];
  return (
    <ContentWrapper title="ContentWrapper 页面容器">
      <DocSection>这是一个页面容器，就如目前展示的容器一样。</DocSection>
      <DocSection title="API">
        <Table
          dataSource={data}
          columns={ATTRIBUTE_COLUMNS}
          pagination={false}
        />
      </DocSection>
    </ContentWrapper>
  );
};

export default ContentWrapperTest;
