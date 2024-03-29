import React, { useRef, useState } from 'react';
import { SForm, SSearch, AutoSizeList } from '@szsk/rac';
import { Button } from 'antd';
import { IFormItem } from '@szsk/rac/lib/Form/type';

const Demo = () => {
  const itemWidth = 200;
  const list = [
    {
      name: 'content',
    },
    {
      name: 'content',
    },
    {
      name: 'content',
    },
    {
      name: 'content',
    },
    {
      name: 'content',
    },
    {
      name: 'content',
    },
    {
      name: 'content',
    },
    {
      name: 'content',
    },
    {
      name: 'content',
    },
    {
      name: 'content',
    },
    {
      name: 'content',
    },
  ];
  const CompCard = (props: any) => {
    const { data, idx } = props;
    const { name } = data;
    return (
      <div
        style={{
          textAlign: 'center',
          backgroundColor: 'grey',
          marginBottom: '10px',
        }}
      >
        {name}
      </div>
    );
  };

  return (
    <AutoSizeList
      list={list}
      space={10}
      CompCard={CompCard}
      itemWidth={itemWidth}
    />
  );
};

export default Demo;
