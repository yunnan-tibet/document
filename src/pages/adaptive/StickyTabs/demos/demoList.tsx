import React from 'react';
import CodeBox from '@/components/CodeBox';
import Demo from './demo';

const DemoList = () => {
  const config = [
    {
      key: '1',
      desc: '基本使用方式',
      template: `
      import React, { useRef, useState } from 'react';
import { SForm, SSearch, AutoSizeList, StickyTabs } from '@szsk/rac';
import { Button, Form } from 'antd';
import { IFormItem } from '@szsk/rac/lib/Form/type';
import { ITabItem } from '@szsk/rac/lib/StickyTabs';
import { GitlabOutlined } from '@ant-design/icons';

const Demo = () => {
  const [config, setConfig] = useState({
    behavior: 'instant',
    offsetTop: 0,
    useScrollContainer: false,
  });
  const { useScrollContainer: useWrapper, behavior, offsetTop } = config;
  const onValuesChange = (v: any, data: any) => {
    setConfig(data);
  };
  const tabL: ITabItem[] = [
    {
      key: '1',
      label: 'tab 1',
      children: (
        <div style={{ height: 200, backgroundColor: 'red' }}>内容少</div>
      ),
    },
    {
      key: '2',
      label: '我是tab 2，我标题很长，真的很长',
      children: (
        <div style={{ height: 400, backgroundColor: 'yellow' }}>
          我是tab 2，我标题很长，真的很长
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div>
          <GitlabOutlined />I am React Element, I can add icon.
        </div>
      ),
      children: (
        <div style={{ height: 100, backgroundColor: 'grey' }}>
          <GitlabOutlined />I am React Element, I can add icon.
        </div>
      ),
    },
    {
      key: '4',
      label: 'tab 4，我只是为了让显得宽',
      children: (
        <div style={{ height: 100, backgroundColor: 'blue' }}>
          tab 4，我只是为了让显得宽
        </div>
      ),
    },
    {
      key: '5',
      label: 'tab 5，我也是工具tab',
      children: (
        <div style={{ height: 100, backgroundColor: 'pink' }}>
          tab 5，我也是工具tab
        </div>
      ),
    },
    {
      key: '6',
      label: 'tab 6，复议tab5，我也是工具tab',
      children: (
        <div style={{ height: 100, backgroundColor: 'cyan' }}>
          tab 6，复议tab5，我也是工具tab
        </div>
      ),
    },
    {
      key: '8',
      label: 'tab 8，tab7去哪了？',
      children: (
        <div style={{ height: 100, backgroundColor: 'lightblue' }}>
          tab 8，好像被我删了
        </div>
      ),
    },
  ];

  const formItems: IFormItem[] = [
    {
      id: 'offsetTop',
      label: 'offsetTop',
      type: 'inputNumber',
      props: {
        style: { width: '100%' },
      },
    },
    {
      id: 'behavior',
      label: 'behavior',
      type: 'select',
      initialValue: 'instant',
      options: [
        { label: 'instant', value: 'instant' },
        { label: 'smooth', value: 'smooth' },
      ],
    },
    {
      id: 'useScrollContainer',
      label: 'overflow容器',
      type: 'select',
      initialValue: false,
      options: [
        { label: '不设置', value: false },
        { label: '设置', value: true },
      ],
    },
  ];

  return (
    <div
      style={useWrapper ? { height: 500, overflow: 'auto' } : undefined}
      id="wrapperId"
    >
      <SForm
        columns={3}
        onValuesChange={onValuesChange}
        formItems={formItems}
      />
      <StickyTabs
        tabL={tabL}
        offsetTop={offsetTop}
        headEle={
          <div>
            我也不知道我有多高，我是顶上的headEle。tip，offsetTop在顶部有fixed栏目时候很好用哦
          </div>
        }
        tabBarExtraContent={<div>这个位置好像放按钮？</div>}
        behavior={behavior}
        scrollContainer={
          useWrapper
            ? (document.getElementById('wrapperId') as Element)
            : undefined
        }
      />
    </div>
  );
};

export default Demo;

      `,
      component: <Demo />,
    },
  ];
  return (
    <>
      {config.map((item) => {
        const { key, template, component, desc } = item;
        return (
          <CodeBox key={key} template={template} desc={desc}>
            {component}
          </CodeBox>
        );
      })}
    </>
  );
};

export default DemoList;
