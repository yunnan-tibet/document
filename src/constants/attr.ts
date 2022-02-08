import { ColumnsType } from 'antd/lib/table';

// api 参数header
export const ATTRIBUTE_COLUMNS: ColumnsType<IAttribute> = [
  {
    title: '参数',
    key: 'key',
    dataIndex: 'key',
  },
  {
    title: '说明',
    key: 'desc',
    dataIndex: 'desc',
  },
  {
    title: '类型',
    key: 'type',
    dataIndex: 'type',
    className: 'f-attr-class',
  },
  {
    title: '默认值',
    key: 'default',
    dataIndex: 'default',
    render: (v: string) => {
      return v || '-';
    },
  },
  {
    title: '版本',
    key: 'version',
    dataIndex: 'version',
    render: (v: string) => {
      return v || '-';
    },
  },
];
