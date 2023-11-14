import { FC, useState } from 'react';
import { Pagination, Select, Input, Button } from 'antd';
import { TablePaginationConfig } from 'antd/es/table/interface';
import styles from './index.less';

const { Option } = Select;
const DEFAULT_PAGESIZEOPTIONS = [10, 20, 50, 100];

interface CustomPagiProps extends TablePaginationConfig {
  onPagiChange: (current: number, pageSize: number) => void;
}

const Pagi: FC<CustomPagiProps> = (props) => {
  const {
    pageSizeOptions = DEFAULT_PAGESIZEOPTIONS,
    pageSize: defaultPageSize,
    total = 0,
    style,
  } = props;

  const [current, setCurrent] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(
    defaultPageSize || +pageSizeOptions[0],
  );
  const [jumpPage, setJumpPage] = useState<number | undefined>();

  const onPageSizeChange = (value: number) => {
    setPageSize(value);
    props.onPagiChange(current, value);
  };

  const onCurrentPageChange = () => {
    setCurrent(jumpPage!);
    setJumpPage(undefined);
    props.onPagiChange(jumpPage!, pageSize);
  };

  const onInputChange = (e: any) => {
    const { value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (value && !isNaN(value) && reg.test(value)) {
      setJumpPage(+value);
    } else {
      setJumpPage('');
    }
  };

  const handleChange = (current: number, page: number) => {
    setCurrent(current);
    props.onPagiChange(current, pageSize);
  };

  return (
    <div className={styles.pagiWrap} style={style}>
      <div>{`共有${props.total}条，每页显示`}</div>
      <Select
        style={{ width: 72 }}
        onChange={onPageSizeChange}
        optionLabelProp="label"
        value={pageSize}
      >
        {pageSizeOptions.map((size) => (
          <Option value={size} label={size} key={size}>{`${size}条/页`}</Option>
        ))}
      </Select>
      <Pagination
        total={props.total}
        current={current}
        showSizeChanger={false}
        pageSize={pageSize}
        onChange={handleChange}
      />
      <div style={{ marginLeft: 20, marginRight: 10 }}>
        <a>
          {current > Math.ceil(total / pageSize)
            ? Math.ceil(total / pageSize)
            : current}
        </a>
        {`/${Math.ceil(total / pageSize)}`}
      </div>
      {props.showQuickJumper && (
        <div className={styles.pagiJump}>
          <span className={styles.pagiJumpText}>到第</span>
          <Input
            value={jumpPage}
            style={{ width: 48 }}
            onChange={onInputChange}
            onPressEnter={onCurrentPageChange}
          />
          <span className={styles.pagiJumpText}>页</span>
          <Button
            disabled={!jumpPage || jumpPage > Math.ceil(total / pageSize)}
            onClick={onCurrentPageChange}
            type="primary"
          >
            确定
          </Button>
        </div>
      )}
    </div>
  );
};

export default Pagi;
