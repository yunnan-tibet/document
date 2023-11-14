import { TableProps, ColumnProps } from 'antd/lib/table';

export interface FlexibleColumnProps<T> extends ColumnProps<T> {
  ellipsis?: boolean;
}

export interface FlexibleTableProps<T> extends Omit<TableProps<T>, 'columns'> {
  columns: FlexibleColumnProps<T>[];
  defaultEmptyChar?: string;
}
