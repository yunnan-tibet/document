import React, { useRef, useState } from 'react';
import { SForm, SSearch, AutoSizeList } from '@szsk/rac';
import { Button } from 'antd';
import { IFormItem } from '@szsk/rac/lib/Form/type';

const Demo1 = () => {
  const itemWidth = 200;
  const rowNum = 2;
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
      rowNum={rowNum}
    />
  );
};

export default Demo1;
