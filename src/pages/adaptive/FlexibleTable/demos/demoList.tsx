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
import { SForm, SSearch, AutoSizeList } from '@szsk/rac';
import { Button, Table } from 'antd';
import { IFormItem } from '@szsk/rac/lib/Form/type';
import AutoFillTable from '@/components/AutoFillTable';
import { ATTRIBUTE_COLUMNS } from '@/constants';

const Demo = () => {
  const [config, setConfig] = useState<any>({ height: 500, skipHeight: 98 });
  const { height, skipHeight } = config;
  console.log(skipHeight);

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
