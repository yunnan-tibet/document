import React, { useState } from 'react';
import { SForm, AutoFillTable } from '@szsk/rac';
import { Table } from 'antd';
import { IFormItem } from '@szsk/rac/lib/Form/type';
import { ATTRIBUTE_COLUMNS } from '@/constants';

const Demo = () => {
  const [config, setConfig] = useState<any>({ height: 500, skipHeight: 98 });
  const { height, skipHeight } = config;

  const dataList: IAttribute[] = [
    {
      key: '1',
      type: 'any[]',
      desc: '数据源',
    },
    {
      key: '2',
      type: 'any[]',
      desc: '数据源',
    },
    {
      key: '3',
      type: 'any[]',
      desc: '数据源',
    },
    {
      key: '4',
      type: 'any[]',
      desc: '数据源',
    },
    {
      key: '5',
      type: 'any[]',
      desc: '数据源',
    },
    {
      key: '6',
      type: 'any[]',
      desc: '数据源',
    },
    {
      key: '7',
      type: 'any[]',
      desc: '数据源',
    },
    {
      key: '8',
      type: 'any[]',
      desc: '数据源',
    },
  ];

  const formItems: IFormItem[] = [
    {
      id: 'height',
      label: '容器高度',
      type: 'inputNumber',
      initialValue: 500,
      props: {
        min: 200,
        style: { width: '100%' },
      },
    },
    {
      id: 'skipHeight',
      label: '除列表的额外高度',
      type: 'inputNumber',
      initialValue: 98,
      props: {
        style: { width: '100%' },
        allowClear: true,
      },
    },
  ];
  const onValuesChange = (v: any, data: any) => {
    setConfig(data);
  };
  return (
    <div style={{ height }} className="flex-full">
      <SForm onValuesChange={onValuesChange} formItems={formItems} />
      <AutoFillTable skipHeight={skipHeight}>
        <Table columns={ATTRIBUTE_COLUMNS} dataSource={dataList} />
      </AutoFillTable>
    </div>
  );
};

export default Demo;
