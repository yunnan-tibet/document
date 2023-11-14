import React, { useRef } from 'react';
import { ContentWrapper, SForm } from '@szsk/rac';
import { Button, Table } from 'antd';
import { IFormItem } from '@szsk/rac/lib/Form/type';
import CodeBox from '@/components/CodeBox';
import Demo from './demos/demo';
import DemoList from './demos/demoList';
import DocSection from '@/components/DocSection';
import { ATTRIBUTE_COLUMNS } from '@/constants';

const SearchTest = () => {
  const searchConfig: IAttribute[] = [
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
    {
      key: 'onSearch',
      type: '(params: any, toFirst: boolean, isReset: boolean) => any，params为搜索参数集合，toFirst为是否跳到第一页，isReset为是否为重置',
      desc: 'search方法，默认挂载即搜索一次',
    },
  ];
  return (
    <ContentWrapper title="SSearch">
      <DocSection>
        用于列表搜索，目前重置和查询按钮位置存在大缺陷，需要做一个收起展开的能力
      </DocSection>
      <DocSection title="代码展示">
        <DemoList />
      </DocSection>
      <DocSection title="API">
        <div>SSearch</div>
        <Table columns={ATTRIBUTE_COLUMNS} dataSource={searchConfig} />
      </DocSection>
    </ContentWrapper>
  );
};

export default SearchTest;
