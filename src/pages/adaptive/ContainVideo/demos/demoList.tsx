import React from 'react';
import CodeBox from '@/components/CodeBox';
import Demo from './demo';
import Demo1 from './demo1';

const DemoList = () => {
  const config = [
    {
      key: '1',
      desc: '基本使用方式，容器固定宽高，传入VideoSrc，点击出现弹窗播放',
      template: `
import React from 'react';
import { ContainImage, ContainVideo } from '@szsk/rac';
import './index.less';

const Demo = () => {
  return (
    <ContainVideo
      videoSrc="https://nos.netease.com/cloud-website-bucket/eb70da12fe28b405c9f24fae8fd034c4.m4v"
      outerClass="f-mr-m"
      title="我是标题"
      width="100px"
      height="100px"
    />
  );
};

export default Demo;
      `,
      component: <Demo />,
    },
    {
      key: '2',
      desc: '视频截图方式，可以在视频里面进行截图，callback参数为base64图片',
      template: `
import React from 'react';
import { ContainImage, ContainVideo } from '@szsk/rac';
import './index.less';
import { message } from 'antd';

const Demo1 = () => {
  return (
    <ContainVideo
      videoSrc="https://nos.netease.com/cloud-website-bucket/eb70da12fe28b405c9f24fae8fd034c4.m4v"
      outerClass="f-mr-m"
      title="我是标题"
      width="100px"
      height="100px"
      cropEnable
      videoCallback={(a) => message.info('callback参数为base64截图 ' + a)}
    />
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
