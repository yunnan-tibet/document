import React, { useRef } from 'react';
import { ContentWrapper, SForm } from '@szsk/rac';
import { Button, Table } from 'antd';
import { IFormItem } from '@szsk/rac/lib/Form/type';
import CodeBox from '@/components/CodeBox';
import Demo from './demos/demo';
import DemoList from './demos/demoList';
import DocSection from '@/components/DocSection';
import { ATTRIBUTE_COLUMNS } from '@/constants';

const StickyTabsTest = () => {
  const searchConfig: IAttribute[] = [
    {
      key: 'tabL',
      type: 'ITabItem[]',
      desc: 'tab列表',
    },
    {
      key: 'offsetTop',
      type: 'number',
      desc: '容器距顶fixed的top距离',
      default: '0',
    },
    {
      key: 'headEle',
      type: 'React.ReactNode',
      desc: '顶部包裹固定的元素',
    },
    {
      key: 'tabBarExtraContent',
      type: 'any',
      desc: 'tabs条右侧内容',
    },
    {
      key: 'behavior',
      type: 'instant | smooth',
      desc: '滚动形式1.instant 表示滚动会直接跳转到目标位置 2.smooth 平滑滚动并产生过渡效果',
      default: 'instant',
    },
    {
      key: 'scrollContainer',
      type: 'Element',
      desc: 'scrollContainer设置滚动的容器，默认是window',
    },
  ];
  return (
    <ContentWrapper title="StickyTabs">
      <DocSection>
        适用于tab固定的形式，是tab瀑布式跳转切换的形式，并且滚动的时候也自动切换tab
      </DocSection>
      <DocSection title="代码展示">
        <DemoList />
      </DocSection>
      <DocSection title="API">
        <div>StickyTabs</div>
        <Table columns={ATTRIBUTE_COLUMNS} dataSource={searchConfig} />
      </DocSection>
    </ContentWrapper>
  );
};

export default StickyTabsTest;
