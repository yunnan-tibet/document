import React, { useState } from 'react';
import { CropPicModal, PictrueJigsaw } from '@szsk/rac';
import { Button, Input, message } from 'antd';

const Demo = () => {
  const [picList, setPicList] = useState([
    'https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png',
  ]);
  const [imgUrl, setImgUrl] = useState(
    'https://img0.baidu.com/it/u=4168562259,460506502&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  );
  const onInputChange = (e: any) => {
    setImgUrl(e.target.value);
  };
  return (
    <>
      <Input className="f-mb-m" value={imgUrl} onChange={onInputChange} />
      <Button
        className="f-mb-m f-mr-m"
        type="primary"
        onClick={() => setPicList([...picList, imgUrl])}
      >
        增加图片
      </Button>
      <Button
        type="primary"
        onClick={() => setPicList(picList.slice(0, picList.length - 1))}
      >
        移除图片
      </Button>
      <PictrueJigsaw picList={picList} width="200px" height="200px" />
    </>
  );
};

export default Demo;
