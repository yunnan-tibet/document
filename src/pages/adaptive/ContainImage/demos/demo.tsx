import React from 'react';
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
