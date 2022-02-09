import React from 'react';
import CodeBox from '@/components/CodeBox';
import Demo from './demo';

const DemoList = () => {
  const config = [
    {
      key: '1',
      desc: '基本使用方式，传入图片地址与回调使用',
      template: `
import React, { useState } from 'react';
import { CropPicModal } from '@szsk/rac';
import { Button, message } from 'antd';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CropPicModal
        onCloseModal={() => setVisible(false)}
        onCropData={(d) => message.info('callback参数为base64截图' + d)}
        visible={visible}
        pic="https://nos.netease.com/cloud-website-bucket/20211217182445a81f5db0-d39c-4c7e-9b64-20add7e09171.jpeg"
      />
      <Button onClick={() => setVisible(true)}>开始截图</Button>
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
