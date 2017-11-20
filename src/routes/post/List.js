import React from 'react'
import {
  Table
} from 'antd'
import styles from './List.less'

const List = ({...tableProps
}) => {
  const columns = [{
    title: '订单编号',
    dataIndex: 'id',
    className: styles.image,
  }, {
    title: '影片名称',
    dataIndex: 'filmName',
  }, {
    title: '购票人',
    dataIndex: 'userName',
  }, {
    title: '座位',
    dataIndex: 'position',
  }, {
    title: '票价',
    dataIndex: 'price',
  }, {
    title: '放映时间',
    dataIndex: 'playDate',
  }, {
    title: '是否取票',
    dataIndex: 'isGet',
    render: (text) => {
      if (text)
        return '已取票'
      else
        return '未取票'
    },
  }, {
    title: '是否退票',
    dataIndex: 'isReback',
    render: (text) => {
      if (text)
        return '已退票'
      else
        return '未退票'
    },
  }, ]

  return (
    <div>
      <Table
        {...tableProps}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        simple
        className={styles.table}
        rowKey={record => record.id}
      />
    </div>
  )
}

export default List