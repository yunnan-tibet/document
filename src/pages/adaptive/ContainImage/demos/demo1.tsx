import React from 'react';
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
