import { Tabs } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { PlusSquareOutlined } from '@ant-design/icons';
import { ITrendAnaGroup } from '../../types';
import MyTab from './MyTab';
import styles from './index.less';
import GroupEditModal from '../GroupEditModal';

const { TabPane } = Tabs;

interface IProps {
  getPositions: Function; // 切换的时候统一获取测点配置和数据
}

const GroupTabs = (props: IProps) => {
  const groupEditModal = useRef<any>(null);
  const { getPositions = () => {} } = props;
  const [activeKey, setActiveKey] = useState<string>();
  const [groupL, setGroupL] = useState<ITrendAnaGroup[]>([]);

  useEffect(() => {
    getAnaGroupL();
  }, []);

  const getAnaGroupL = () => {
    setGroupL([
      {
        id: '1',
        name: '分组1',
        type: 'analysis',
        desc: '',
      },
      {
        id: '2',
        name: '分组2',
        type: 'analysis',
        desc: '',
      },
    ]);

    getPositions('1');
  };

  const onTabChange = (key: string) => {
    setActiveKey(key);
    getPositions(key);
  };

  // 新增或更新分组接口todo
  const updateGroup = (data: ITrendAnaGroup, sucCb: any) => {
    sucCb && sucCb();
    getAnaGroupL();
  };

  const onAddOrEditGroup = (record?: ITrendAnaGroup) => {
    groupEditModal.current?.show(record);
  };

  return (
    <div className={styles.groupTabs}>
      <Tabs
        tabBarExtraContent={{
          right: (
            <PlusSquareOutlined
              style={{ fontSize: '24px' }}
              onClick={() => onAddOrEditGroup()}
            />
          ),
        }}
        type="card"
        onChange={onTabChange}
        activeKey={activeKey}
        hideAdd
      >
        {groupL.map((item) => {
          const { id } = item;
          return (
            <TabPane
              tab={
                <MyTab
                  onEditGroup={onAddOrEditGroup}
                  updateGroup={updateGroup}
                  record={item}
                />
              }
              key={id}
            />
          );
        })}
      </Tabs>
      <GroupEditModal ref={groupEditModal} updateGroup={updateGroup} />
    </div>
  );
};

export default GroupTabs;
