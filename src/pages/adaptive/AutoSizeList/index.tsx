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
      key: 'CompCard',
      type: 'FC<data,index>',
      desc: '渲染组件',
    },
    {
      key: 'itemWidth',
      type: 'number',
      desc: 'item最小宽度',
    },
    {
      key: 'space',
      type: 'number',
      desc: '两个item的间距',
      default: '10',
    },
    {
      key: 'rowNum',
      type: 'number',
      desc: '展示的行数',
    },
  ];
  return (
    <ContentWrapper title="AutoSizeList">
      <DocSection>
        用于卡片item列表屏幕自适应展示，采用最常用的间距不变，item宽度自适应的方式，随着屏幕宽度变化自适应居左排列，可通过改变屏幕宽度查看效果。
      </DocSection>
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
