import React, { useRef } from 'react';
import { ContentWrapper, SForm } from '@szsk/rac';
import { Button, Table } from 'antd';
import { IFormItem } from '@szsk/rac/lib/Form/type';
import CodeBox from '@/components/CodeBox';
import Demo from './demos/demo';
import DemoList from './demos/demoList';
import DocSection from '@/components/DocSection';
import { ATTRIBUTE_COLUMNS } from '@/constants';

const FormTest = () => {
  const formConfig: IAttribute[] = [
    {
      key: 'formItems',
      type: 'IFormItems[]',
      desc: 'item配置',
    },
    {
      key: 'columns',
      type: 'number',
      desc: '列数',
      default: '3',
    },
  ];
  const itemConfig: IAttribute[] = [
    {
      key: 'id',
      type: 'string',
      desc: '参数key',
    },
    {
      key: 'label',
      type: 'string',
      desc: '前面的名称',
    },
    {
      key: 'type',
      type: "'input' | 'select' | 'radio' | 'datePicker' | 'checkbox'",
      desc: 'item类型选择',
    },
    {
      key: 'render',
      type: 'React.ReactNode',
      desc: '自定义表单组件',
    },
    {
      key: 'initialValue',
      type: 'any',
      desc: '初始值',
    },
    {
      key: 'rules',
      type: 'Rule[]',
      desc: '表单校验规则数组',
    },
    {
      key: 'options',
      type: 'ISelectOption[]',
      desc: 'select|checkbox|radio类型的可选项',
    },
    {
      key: 'props',
      type: 'InputProps|SelectProps<any>|RadioGroupProps|DatePickerProps|CheckboxGroupProps',
      desc: '各种类型的基本可选属性',
    },
  ];

  const optionConfig = [
    {
      key: 'label',
      type: 'string',
      desc: '名称',
    },
    {
      key: 'value',
      type: 'string|number',
      desc: '值',
    },
  ];

  return (
    <ContentWrapper title="SForm 表单">
      <DocSection>这是一个表单组件，完全配置化，减少繁杂代码</DocSection>
      <DocSection title="代码展示">
        <DemoList />
      </DocSection>
      <DocSection title="API">
        <div>SForm</div>
        <Table columns={ATTRIBUTE_COLUMNS} dataSource={formConfig} />
        <div>IFormItem</div>
        <Table columns={ATTRIBUTE_COLUMNS} dataSource={itemConfig} />
        <div>ISelectOption</div>
        <Table columns={ATTRIBUTE_COLUMNS} dataSource={optionConfig} />
      </DocSection>
    </ContentWrapper>
  );
};

export default FormTest;
