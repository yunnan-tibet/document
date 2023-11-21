import React, { useEffect, useRef, useState } from 'react';
import { CheckOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import { Input, Modal } from 'antd';
import { ITrendAnaGroup } from '../../../types';
import styles from './index.less';

interface IProps {
  record: ITrendAnaGroup;
  updateGroup: (data: ITrendAnaGroup, sucCb: any) => void; // 更新分组方法
  onEditGroup: Function; // 打开更新分组弹窗
}

const MyTab = (props: IProps) => {
  const inputRef = useRef<any>(null);
  const { record, updateGroup, onEditGroup } = props;
  const { name: updatedName, id } = record || {};
  const [inEditName, setInEditName] = useState<boolean>(false);
  const [name, setName] = useState<string>();

  useEffect(() => {
    setName(updatedName);
  }, [updatedName]);

  useEffect(() => {
    if (inEditName) {
      inputRef.current?.focus();
    }
  }, [inEditName, inputRef]);

  const onEditAll = () => {
    onEditGroup(record);
  };

  // 删除分组接口todo
  const onDel = () => {
    Modal.confirm({
      title: '确定删除分组？',
      onOk: () => {
        // 删除分组接口todo
      },
    });
  };

  const onStartEditName = () => {
    setInEditName(true);
  };

  const onNameChanged = (e: any) => {
    setName(e.target.value);
  };

  const onPressEnter = () => {
    updateGroup &&
      updateGroup({ name, id }, () => {
        setInEditName(false);
      });
  };

  return (
    <div onDoubleClick={onStartEditName} className={styles.tabItem}>
      <div className={styles.name}>
        {!inEditName ? (
          name
        ) : (
          <Input
            ref={inputRef}
            style={{ width: 'auto' }}
            value={name}
            onChange={onNameChanged}
            onPressEnter={onPressEnter}
            onBlur={onPressEnter}
          />
        )}
      </div>
      <div
        className={styles.operateWrapper}
        style={inEditName ? { display: 'none' } : undefined}
      >
        <div className={styles.operate}>
          <EditOutlined className={styles.editBtn} onClick={onEditAll} />
          <CloseOutlined className={styles.closeBtn} onClick={onDel} />
        </div>
      </div>
    </div>
  );
};

export default MyTab;
