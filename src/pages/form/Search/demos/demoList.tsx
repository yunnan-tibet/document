import React from 'react';
import CodeBox from '@/components/CodeBox';
import Demo from './demo';

const DemoList = () => {
  const config = [
    {
      key: '1',
      desc: '基本使用方式，支持3，4，5列，支持基本选项配置以及自定义form item内容，但是要注意响应式页面是否符合要求',
      template: `import React, { useRef, useState } from 'react';
import { SForm, SSearch } from '@szsk/rac';
import { Button } from 'antd';
import { IFormItem } from '@szsk/rac/lib/Form/type';

const Demo = () => {
  const formEle = useRef<any>(null);
  const [columns, setCol] = useState(3);

  const formItems: IFormItem[] = [
    {
      id: 'input',
      label: '输入框',
      type: 'input',
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

  const onSubmit = (params: any, toFirst, isReset) => {
    console.log(params);
  };

  return (
    <>
      <div className="f-mb-m">
        <Button className="f-mr-m" type="primary" onClick={() => setCol(3)}>
          3列
        </Button>
        <Button className="f-mr-m" type="primary" onClick={() => setCol(4)}>
          4列
        </Button>
        <Button className="f-mr-m" type="primary" onClick={() => setCol(5)}>
          5列
        </Button>
      </div>
      <SSearch
        ref={formEle}
        formItems={formItems}
        columns={columns}
        onSearch={onSubmit}
      />
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
