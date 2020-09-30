/**
 * title: 提交记录
 * desc: |
 *  这里使用 `useAsync` 中的 [usePagination](https://doly-dev.github.io/rc-hooks/site/#/async/use-async?anchor=%E5%88%86%E9%A1%B5)
 */

import React from "react";
import { Card, Table, Space } from "antd";
import moment from "moment";
import Mock from 'mockjs';

import Demo1 from "./Demo1";
import usePagination from "./hooks/usePagination";
import Dictionary from "../../Dictionary";

import styles from './style.less';

// 审核状态字典，尽量在 src/constants 中维护。
const enumApproveResult = [
  {
    name: "待审核",
    value: 1,
    badge: {
      status: "processing"
    }

  },
  {
    name: "审核通过",
    value: 2,
    badge: {
      status: "success"
    }
  },
  {
    name: "审核拒绝",
    value: 3,
    badge: {
      status: "error"
    }
  },
];

const applyList = ({ page: { pageNum, pageSize }, data = {} }) => (
  Mock.mock({
    [`data|${pageSize}`]: [{
      "applyCode|+1": (pageNum - 1) * pageSize + 1,
      applicantName: '@cname',
      approverName: '@cname',
      createTime: moment().format("YYYY-MM-DD HH:mm:ss"),
      approveTime: moment().format("YYYY-MM-DD HH:mm:ss"),
      "approveResult|1-3": 1
    }],
    pageInfo: {
      total: 50,
      pages: 10
    },
  })
);

function getApplyList(params): Promise<any> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(applyList(params));
    }, 1000);
  })
}

const columns = [
  {
    dataIndex: "applyCode",
    title: "申请编号"
  },
  {
    dataIndex: "createTime",
    title: "提交时间"
  },
  {
    dataIndex: "applicantName",
    title: "经办员"
  },
  {
    dataIndex: "approveTime",
    title: "审核时间"
  },
  {
    dataIndex: "approverName",
    title: "审核员"
  },
  {
    dataIndex: "approveResult",
    title: "审核状态",
    render: text => <Dictionary data={enumApproveResult} value={text} type="badge" />
  },
  {
    title: "操作",
    render: (text, record) => (
      <Space size="middle">
        <a>查看</a>
        <a>审核</a>
      </Space>
    )
  }
];

export default () => {
  const { data, run, loading, changePagination, pagination } = usePagination(getApplyList, { autoRun: false });

  return (
    <Card className={styles.wrapper}>
      <Demo1
        onSubmit={run}
        submitOnMount
        loading={loading}
        name="search_form_1-1"
      />
      <Table
        dataSource={data}
        columns={columns}
        rowKey="applyCode"
        pagination={{ ...pagination, showSizeChanger: true }}
        onChange={changePagination}
        loading={loading}
        // bordered
        style={{ marginTop: 24 }}
      />
    </Card>
  )
}