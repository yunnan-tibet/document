import React, { useRef, useState } from 'react';
import { SForm, SSearch, AutoSizeList } from '@szsk/rac';
import { Button, Table } from 'antd';
import { IFormItem } from '@szsk/rac/lib/Form/type';
import FlexibleTable, { FlexibleColumnProps } from '@/components/FlexibleTable';
import Cron from '@/components/Cron';

const Demo = () => {
  const [config, setConfig] = useState<any>({ height: 500, skipHeight: 98 });
  const { height, skipHeight } = config;
  console.log(skipHeight);

  const dataList: any[] = [
    {
      key: '1',
      type1: 'any[]',
      type2: 'any[]',
      type3: 'any[]',
      type4: 'any[]',
      desc: '数据源',
    },
    {
      key: '2',
      type1: 'any[]',
      type2: 'any[]',
      type3: 'any[]',
      type4: 'any[]',
      desc: '数据源数据源数据源数据源数据源数据源数据源数据源数据源',
    },
    {
      key: '3',
      type1: 'any[]',
      type2: 'any[]',
      type3: 'any[]',
      type4: 'any[]',
      desc: '数据源',
    },
    {
      key: '4',
      type1: 'any[]',
      type2: 'any[]',
      type3: 'any[]',
      type4: 'any[]',
      desc: '数据源',
    },
    {
      key: '5',
      type1: 'any[]',
      type2: 'any[]',
      type3: 'any[]',
      type4: 'any[]',
      desc: '数据源',
    },
    {
      key: '6',
      type1: '',
      type2: <div />,
      type3: 'any[]',
      type4: 'any[]',
      desc: '数据源',
    },
    {
      key: '7',
      type1: 'any[]',
      type2: 'any[]',
      type3: 'any[]',
      type4: 'any[]',
      desc: '数据源',
    },
    {
      key: '8',
      type1: 'any[]',
      type2: 'any[]',
      type3: 'any[]',
      type4: 'any[]',
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

  const columns: FlexibleColumnProps<any>[] = [
    {
      title: '名称',
      dataIndex: 'key',
    },
    {
      title: '描述',
      dataIndex: 'desc',
      ellipsis: true,
      width: 200,
    },
    {
      title: '类型1',
      dataIndex: 'type1',
    },
    {
      title: '类型2',
      dataIndex: 'type2',
    },
    {
      title: '类型3',
      dataIndex: 'type3',
    },
    {
      title: '类型4',
      dataIndex: 'type4',
    },
  ];

  const onValuesChange = (v: any, data: any) => {
    setConfig(data);
  };
  return (
    <div className="flex-full">
      <SForm onValuesChange={onValuesChange} formItems={formItems} />
      <FlexibleTable
        defaultEmptyChar="/"
        columns={columns}
        dataSource={dataList}
        pagination={{ total: 10 }}
      />
    </div>
  );
};

export default Demo;
