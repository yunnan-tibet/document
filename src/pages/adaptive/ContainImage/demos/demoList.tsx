import React from 'react';
import CodeBox from '@/components/CodeBox';
import Demo from './demo';
import Demo1 from './demo1';

const DemoList = () => {
  const config = [
    {
      key: '1',
      desc: '基本使用方式，容器固定宽高，传入imgSrc即可，并有点击放大的效果',
      template: `import React from 'react';
import { ContainImage } from '@szsk/rac';

const Demo = () => {
  return (
    <>
      <ContainImage
        imgSrc="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png"
        outerClass="f-mr-m"
        width="100px"
        height="100px"
      />
      <ContainImage
        imgSrc="https://img0.baidu.com/it/u=4168562259,460506502&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        width="200px"
        height="100px"
      />
    </>
  );
};

export default Demo;
      `,
      component: <Demo />,
    },
    {
      key: '2',
      desc: '点击回调使用方式',
      template: `import React from 'react';
import { ContainImage } from '@szsk/rac';
import { message } from 'antd';

const Demo1 = () => {
  return (
    <>
      <ContainImage
        imgSrc="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png"
        outerClass="f-mr-m"
        width="100px"
        height="100px"
        picCallback={() => message.info('clicked')}
      />
    </>
  );
};

export default Demo1;
      `,
      component: <Demo1 />,
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
