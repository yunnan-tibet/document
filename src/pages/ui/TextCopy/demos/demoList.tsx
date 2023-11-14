import React from 'react';
import CodeBox from '@/components/CodeBox';
import Demo from './demo';

const DemoList = () => {
  const config = [
    {
      key: '1',
      desc: '基本使用方式，传入待复制文案以及回调',
      template: `
import React from 'react';
import { TextCopy } from '@szsk/rac';
import { message } from 'antd';

const Demo = () => {
  return (
    <>
      <TextCopy
        onCopy={(text) => {
          message.info('我是成功回调，我复制了' + text);
        }}
        text="复制我复制我"
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
