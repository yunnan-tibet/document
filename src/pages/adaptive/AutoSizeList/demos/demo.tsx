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
      <div style={{ width: `${itemWidth}px`, textAlign: 'center' }}>{name}</div>
    );
  };

  return <AutoSizeList list={list} render={render} itemWidth={itemWidth} />;
};

export default Demo;
