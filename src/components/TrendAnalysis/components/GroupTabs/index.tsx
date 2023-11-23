import { Tabs } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { PlusSquareOutlined } from '@ant-design/icons';
import { TabsProps } from 'rc-tabs';
import { ITrendAnaGroup } from '../../types';
import MyTab from './MyTab';
import styles from './index.less';
import GroupEditModal from '../GroupEditModal';
import { GROUP_LIST_MOCK } from '../../mock';

const { TabPane } = Tabs;

interface IProps extends TabsProps {
  onChange: any;
}

const GroupTabs = (props: IProps) => {
  const groupEditModal = useRef<any>(null);
  const { onChange, ...rest } = props;
  const [activeKey, setActiveKey] = useState<string>();
  const [groupL, setGroupL] = useState<ITrendAnaGroup[]>([]);

  useEffect(() => {
    getAnaGroupL();
  }, []);

  useEffect(() => {
    if (!activeKey && groupL && groupL.length) {
      onTabChange(groupL[0].id);
    }
  }, [activeKey, groupL]);

  const getAnaGroupL = () => {
    setGroupL(GROUP_LIST_MOCK);
    console.log('获取分组列表');
  };

  const onTabChange = (key?: string) => {
    setActiveKey(key);
    onChange && onChange(groupL.find((item) => item.id === key));
  };

  // 新增或更新分组接口todo
  const updateGroup = (data: ITrendAnaGroup, sucCb: any) => {
    sucCb && sucCb();
    console.log('更新分组');

    getAnaGroupL();
  };

  const onAddOrEditGroup = (record?: ITrendAnaGroup) => {
    groupEditModal.current?.show(record);
  };
  return (
    <div className={styles.groupTabs}>
      <Tabs
        {...rest}
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
                  getAnaGroupL={getAnaGroupL}
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
