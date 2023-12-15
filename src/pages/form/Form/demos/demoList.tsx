import React from 'react';
import CodeBox from '@/components/CodeBox';
import Demo from './demo';

const DemoList = () => {
  const config = [
    {
      key: '1',
      desc: '基本使用方式，支持1-4列，支持基本选项配置以及自定义form item内容，但是要注意响应式页面是否符合要求',
      template: `import React, { useRef, useState } from 'react';
import { SForm } from '@szsk/rac';
import { Button, InputNumber } from 'antd';
import { IFormItem } from '@szsk/rac/lib/Form/type';

const Demo = () => {
  const formEle = useRef<any>(null);
  const [columns, setCol] = useState(3);

  const formItems: IFormItem[] = [
    {
      id: 'input',
      label: '输入框',
      type: 'input',
      rules: [{ required: true }],
      props: {
        placeholder: '我是item的props',
      },
    },
    {
      id: 'select',
      label: '下拉选择',
      type: 'select',
      options: [
        {
          label: 'select1',
          value: '1',
        },
        {
          label: 'select2',
          value: '2',
        },
      ],
    },
    {
      id: 'radio',
      label: '单选框',
      type: 'radio',
      options: [
        {
          label: 'select1',
          value: '1',
        },
        {
          label: 'select2',
          value: '2',
        },
      ],
    },
    {
      id: 'checkbox',
      label: '复选框',
      type: 'checkbox',
      options: [
        {
          label: 'select1',
          value: '1',
        },
        {
          label: 'select2',
          value: '2',
        },
      ],
    },
    {
      id: 'datePicker',
      label: '时间选择',
      type: 'datePicker',
    },
  ];

  const onSubmit = () => {
    formEle.current.validateFields().then((values: any) => {
      console.log(values);
    });
  };

  return (
    <>
      <div className="f-mb-m">
        列数：
        <InputNumber value={columns} onChange={(v) => setCol(v)} min={1} />
      </div>
      <SForm ref={formEle} formItems={formItems} columns={columns} />
      <Button type="primary" onClick={onSubmit}>
        提交
      </Button>
    </>
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
