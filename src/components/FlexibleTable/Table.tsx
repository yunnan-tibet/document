/* eslint-disable no-param-reassign */
import React, { useMemo } from 'react';

import { Pagination, Table, Tooltip } from 'antd';
import { TableProps } from 'antd/lib/table';
import { FlexibleTableProps, FlexibleColumnProps } from './types';
import Pagi from '../Pagination';

const TABLE_CELL_PADDING_WIDTH = 2 * 16;
const DEFAULT_TABLE_CELL_SCROLL_WIDTH = 200;
const CHAR_LENGTH_TO_CH = 1.8;
export const remarkStyle = {
  display: '-webkit-box',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
};
type FlexibleTableProp = FlexibleTableProps<any>;

const FlexibleTable: React.FC<FlexibleTableProp> = (props) => {
  const {
    dataSource,
    columns,
    scroll,
    rowSelection,
    defaultEmptyChar = '-',
    onChange,
    pagination,
  } = props;

  const tableProps: Pick<
    TableProps<any>,
    'columns' | 'scroll'
  > = useMemo(() => {
    let scrollCh = 0;
    let scrollPx = 0;
    const newColumns = columns.map((col) => {
      // 默认字符
      if (defaultEmptyChar) {
        const _render = col.render;

        col.render = (val, record, idx) => {
          if (_render) {
            return _render(val, record, idx) || defaultEmptyChar;
          }
          return val || defaultEmptyChar;
        };
      }

      if (col.width) {
        scrollPx +=
          typeof col.width === 'number'
            ? col.width
            : DEFAULT_TABLE_CELL_SCROLL_WIDTH;
        if (col.tooltip) {
          if (!col.render) {
            col.render = (text: string, record: any, idx: number) => (
              <Tooltip title={text}>
                <div style={remarkStyle}>{text}</div>
              </Tooltip>
            );
          } else {
            const oldRender = col.render;
            col.render = (text: string, record: any, idx: number) => {
              const _v = oldRender(text, record, idx) as string;
              return (
                <Tooltip title={_v}>
                  <div style={remarkStyle}>{_v}</div>
                </Tooltip>
              );
            };
          }
        }
        return col;
      }
      let chWidth = computeCellWidthInCh(dataSource, col);

      chWidth += 1;
      const extraPxWidth = TABLE_CELL_PADDING_WIDTH;

      const newCol = {
        ...col,
        width: `calc(${chWidth}ch + ${extraPxWidth}px)`,
      };
      scrollCh += chWidth;
      scrollPx += extraPxWidth;
      return newCol;
    });

    return {
      columns: newColumns,
      scroll: { ...scroll, x: `calc(${scrollCh}ch + ${scrollPx}px)` },
    };
  }, [columns, dataSource, scroll, rowSelection]);

  return (
    <div
      className="flex-full"
      style={{ justifyContent: 'space-between', maxWidth: '100%' }}
    >
      <Table {...props} {...tableProps} pagination={false} />
      {/* <Pagination {...pagination} /> */}
      {pagination ? (
        <Pagi
          onPagiChange={(current, pageSize) => {
            onChange && onChange({ current, pageSize }, {}, {});
          }}
          showQuickJumper={pagination.showQuickJumper !== false}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default React.memo(FlexibleTable);

function result(obj: any, path: any) {
  if (typeof obj !== 'object' || obj === null) {
    return null;
  }

  const pathArray = Array.isArray(path) ? path : path.split('.');
  let currentObj = obj;

  for (const key of pathArray) {
    if (typeof currentObj[key] === 'function') {
      return currentObj[key]();
    }
    if (currentObj[key] === undefined) {
      return null;
    }

    currentObj = currentObj[key];
  }

  return currentObj;
}

function computeCellWidthInCh(
  dataSource: FlexibleTableProps<any>['dataSource'],
  columnProps: Pick<FlexibleColumnProps<any>, 'title' | 'dataIndex' | 'render'>,
): number {
  const { title, dataIndex, render } = columnProps;
  const initialWidth =
    typeof title === 'string' ? title.length * CHAR_LENGTH_TO_CH : 0;

  if (!dataIndex || !Array.isArray(dataSource)) {
    return initialWidth;
  }
  const maxWidth = dataSource?.reduce((currentMaxWidth, dataItem, idx) => {
    let currentCellValue = result(dataItem, dataIndex);
    if (render) {
      const renderResult = render(currentCellValue, dataItem, idx);
      if (typeof renderResult === 'string') {
        currentCellValue = renderResult;
      }
    }
    if (currentCellValue === undefined || currentCellValue === null) {
      return currentMaxWidth;
    }
    let length = 0;
    const restCellValue = currentCellValue
      .toString()
      .replace(/[^\u0000-\u00ff]/g, function (substring) {
        length += substring.length;
        return '';
      });
    let width = length * CHAR_LENGTH_TO_CH + restCellValue.length;
    width = Math.max(width, currentMaxWidth);
    return width;
  }, initialWidth);

  return maxWidth;
}
