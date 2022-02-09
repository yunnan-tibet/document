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
