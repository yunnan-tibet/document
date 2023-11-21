import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal } from 'antd';
import { SForm } from '@szsk/rac';
import { IFormItem } from '@szsk/rac/lib/Form/type';
import { useForm } from 'antd/es/form/Form';
import { ITrendAnaGroup } from '../../types';

interface IProps {
  updateGroup: (data: ITrendAnaGroup, sucCb: any) => void;
}

const GroupEditModal = forwardRef<any, IProps>((props, ref) => {
  const [form] = useForm();
  const { updateGroup } = props;
  const [data, setData] = useState<ITrendAnaGroup>();
  const [visible, setVisible] = useState<boolean>(false);
  // id存在代表编辑
  const { id } = data || {};

  useImperativeHandle(ref, () => ({ show }));

  const show = (record?: ITrendAnaGroup) => {
    setData(record);
    form.setFieldsValue(record);
    setVisible(true);
  };

  const onCancel = () => {
    setVisible(false);
    form.resetFields();
    setData({});
  };

  const onAddSuc = () => {
    form.validateFields().then((values) => {
      updateGroup({ id, ...values }, () => {
        onCancel();
      });
    });
  };

  const formItems: IFormItem[] = [
    {
      label: '名称',
      id: 'name',
      type: 'input',
      rules: [{ required: true }],
    },
    {
      label: '类型',
      id: 'type',
      type: 'input',
      rules: [{ required: true }],
      initialValue: 'analysis',
      props: {
        disabled: true,
      },
    },
    {
      label: '描述',
      id: 'desc',
      type: 'textArea',
    },
  ];

  return (
    <Modal
      onCancel={onCancel}
      visible={visible}
      title={`${id ? '编辑' : '新增'}分组`}
      width={500}
      onOk={onAddSuc}
      maskClosable={false}
    >
      <SForm columns={1} form={form} formItems={formItems} />
    </Modal>
  );
});

export default GroupEditModal;
