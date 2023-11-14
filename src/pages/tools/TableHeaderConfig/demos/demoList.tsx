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
import { TableHeaderConfig } from '@szsk/rac';
import { Divider, Table } from 'antd';
import {
  IHeaderColumnProps,
  ITHCMethods,
} from '@szsk/rac/lib/TableHeaderConfig';

const Demo = () => {
  const configEle = useRef<ITHCMethods>(null);
  const [, setData] = useState<any>();
  const _columns: IHeaderColumnProps[] = [
    {
      title: '序号',
      key: 'idx',
      dataIndex: 'idx',
      width: 80,
      fixed: true,
      disable: true,
      disableDrag: true,
    },
    {
      title: '名称',
      key: 'name',
      width: 150,
      dataIndex: 'name',
      fixed: true,
      disable: true,
      disableDrag: true,
    },
    {
      title: '描述',
      key: 'desc',
      dataIndex: 'desc',
    },
    {
      title: '字段1',
      key: 'key1',
      dataIndex: 'key1',
    },
    {
      title: '字段2',
      key: 'key2',
      dataIndex: 'key2',
    },
    {
      title: '字段3',
      key: 'key3',
      dataIndex: 'key3',
    },
    {
      title: '字段4',
      key: 'key4',
      dataIndex: 'key4',
    },
    {
      title: '操作',
      key: 'action',
      dataIndex: 'action',
      fixed: 'right',
      disable: true,
      disableDrag: true,
      render: () => {
        return (
          <>
            <a>详情</a>
            <Divider type="vertical" />
            <a>编辑</a>
            <Divider type="vertical" />
            <a>删除</a>
          </>
        );
      },
    },
  ];

  const onFresh = (_data: any) => {
    setData(_data);
  };
  const columns = configEle.current?.getColumns();
  const dataSource = [
    {
      idx: '1',
      name: 'name1',
      desc: '长啊长啊长啊长啊长啊长啊长啊长啊长啊长啊长啊长啊',
      key1: 'key1key1key1key1',
      key2: 'key2key2key2key2',
      key3: 'key3key3key3key3',
      key4: 'key4key4key4key4',
    },
    {
      idx: '2',
      name: 'name2',
      desc: '长啊长啊长啊长啊长啊长啊长啊长啊长啊长啊长啊长啊',
      key1: 'key1key1key1key1',
      key2: 'key2key2key2key2',
      key3: 'key3key3key3key3',
      key4: 'key4key4key4key4',
    },
    {
      idx: '3',
      name: 'name3',
      desc: '长啊长啊长啊长啊长啊长啊长啊长啊长啊长啊长啊长啊',
      key1: 'key1key1key1key1',
      key2: 'key2key2key2key2',
      key3: 'key3key3key3key3',
      key4: 'key4key4key4key4',
    },
  ];

  return (
    <div>
      <div style={{ float: 'right' }}>
        <TableHeaderConfig
          ref={configEle}
          columns={_columns}
          persistKey="testList"
          onFresh={onFresh}
        />
      </div>
      <Table
        bordered
        scroll={{ x: 1400 }}
        columns={columns}
        dataSource={dataSource}
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
