/**
 * title: 缓存查询条件
 * desc: |
 *  从列表页跳转至其他，再次回到列表页，保持原先的查询条件。（仅适用于单页应用）
 */

import React from "react";
import { Card, Table, Space } from "antd";
import moment from "moment";
import Mock from 'mockjs';

import Demo1 from "./Demo1";
import usePagination from "./usePagination";
import Dictionary from "../../Dictionary";

import styles from './style.less';

// 内存缓存
// 如果有登录/登出，再退出登录时需要清理内存缓存
const memoryCache = {
  __data: {},
  get(key) {
    return this.__data[key];
  },
  set(key, value) {
    this.__data[key] = value;
  },
  remote(key) {
    delete this.__data[key];
  },
  clear() {
    this.__data = {};
  }
}

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

function getApplyList(params) {
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

// 缓存键值
const cacheKey = 'search_form_values';

export default () => {
  let cacheValues = memoryCache.get(cacheKey);

  const { data, run, loading, changePagination, pagination } = usePagination(getApplyList, {
    defaultPageNum: cacheValues ? cacheValues.pages.pageNum : 1,
    defaultPageSize: cacheValues ? cacheValues.pages.pageSize : 10,
    defaultTotal: cacheValues ? cacheValues.pages.total : 0,
    defaultParams: cacheValues ? cacheValues.params : {},
    authRun: !!cacheValues,
    onSuccess: (res, params) => {
      // 更新缓存查询条件
      const { pageNum, pageSize, ...restParams } = params[0];
      cacheValues = {
        params: restParams,
        pages: {
          pageNum,
          pageSize,
          total: res.pageInfo.total
        }
      }
      memoryCache.set(cacheKey, cacheValues);
    }
  });

  return (
    <Card className={styles.wrapper}>
      <Demo1
        onSubmit={run}
        loading={loading}
        submitOnMount={!cacheValues}
        defaultValues={cacheValues ? cacheValues.params : null}
        name="search_form_1-2"
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