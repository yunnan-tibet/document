import React from 'react';
import CodeBox from '@/components/CodeBox';
import Demo from './demo';

const DemoList = () => {
  const config = [
    {
      key: '1',
      desc: '基本使用方式，item固定宽度，随着屏幕宽度变化自适应居左排列，flex-wrap等方式存在一定的缺陷，可通过改变屏幕宽度查看效果',
      template: `
import React, { useRef, useState } from 'react';
import { SForm, SSearch, AutoSizeList } from '@szsk/rac';
import { Button } from 'antd';
import { IFormItem } from '@szsk/rac/lib/Form/type';

const Demo = () => {
  const itemWidth = 100;
  const list = [
    {
      name: '100px',
    },
    {
      name: '100px',
    },
    {
      name: '100px',
    },
    {
      name: '100px',
    },
    {
      name: '100px',
    },
    {
      name: '100px',
    },
    {
      name: '100px',
    },
    {
      name: '100px',
    },
    {
      name: '100px',
    },
    {
      name: '100px',
    },
    {
      name: '100px',
    },
  ];
  const render = (item: any) => {
    const { name } = item;
    return (
      <div style={{ width: itemWidth + 'px', textAlign: 'center' }}>{name}</div>
    );
  };

  return <AutoSizeList list={list} render={render} itemWidth={itemWidth} />;
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
