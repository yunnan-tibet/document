import React from 'react';
import { ContentWrapper } from '@szsk/rac';
import { Table } from 'antd';
import DemoList from './demos/demoList';
import DocSection from '@/components/DocSection';
import { ATTRIBUTE_COLUMNS } from '@/constants';

const TableHeaderConfigTest = () => {
  const searchConfig: IAttribute[] = [
    {
      key: 'columns',
      type: 'IHeaderColumnProps[]',
      desc: 'table表头',
    },
    {
      key: 'persistKey',
      type: 'string',
      desc: '本地持久化key',
    },
    {
      key: 'onFresh',
      type: '(columns: IHeaderColumnProps[]) => any',
      desc: '用于父级刷新',
    },
    {
      key: 'children',
      type: 'React.ReactElement',
      desc: '附着元素',
    },
  ];
  const columnConfig: IAttribute[] = [
    {
      key: 'key',
      type: 'string',
      desc: 'key',
    },
    {
      key: 'title',
      type: 'any',
      desc: '标题',
    },
    {
      key: 'isHide',
      type: 'boolean',
      desc: '隐藏',
    },
    {
      key: 'disable',
      type: 'boolean',
      desc: '禁止改变显隐',
    },
    {
      key: 'disableDrag',
      type: 'boolean',
      desc: '禁止拖动',
    },
  ];

  const methodConfig: IAttribute[] = [
    {
      key: 'getColumns',
      type: '() => IHeaderColumnProps[]',
      desc: '获取最终表头',
    },
  ];
  return (
    <ContentWrapper title="TableHeaderConfig">
      <DocSection>
        表头配置组件，使用sessionStorage会话型存储，可配置隐藏，禁止拖动，禁止改变显隐等
      </DocSection>
      <DocSection title="代码展示">
        <DemoList />
      </DocSection>
      <DocSection title="API">
        <div>TableHeaderConfig</div>
        <Table columns={ATTRIBUTE_COLUMNS} dataSource={searchConfig} />
        <div>IHeaderColumnProps</div>
        <Table columns={ATTRIBUTE_COLUMNS} dataSource={columnConfig} />
        <div>ITHCMethods</div>
        <Table columns={ATTRIBUTE_COLUMNS} dataSource={methodConfig} />
      </DocSection>
    </ContentWrapper>
  );
};

export default TableHeaderConfigTest;
