import React from 'react'
import PropTypes from 'prop-types'
import {
  Table,
  Modal
} from 'antd'
import classnames from 'classnames'
import {
  DropOption
} from 'components'
import {
  Link
} from 'react-router-dom'
import queryString from 'query-string'
import AnimTableBody from 'components/DataTable/AnimTableBody'
import styles from './List.less'

const confirm = Modal.confirm

const List = ({
  onDeleteItem,
  onEditItem,
  isMotion,
  location,
  ...tableProps
}) => {
  location.query = queryString.parse(location.search)

  const handleMenuClick = (record, e) => {
    if (e.key === '1') {
      onEditItem(record)
    }
  }

  const columns = [{
    title: '场次编号',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: '电影名称',
    dataIndex: 'filmName',
    key: 'filmName',
  }, {
    title: '剩余座位',
    dataIndex: 'seats',
    key: 'seats',
  }, {
    title: '票价',
    dataIndex: 'price',
    key: 'price',
  }, {
    title: '上映日期',
    dataIndex: 'playDate',
    key: 'playDate',
  }, {
    title: '操作',
    key: 'operation',
    width: 100,
    render: (text, record) => {
      return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{ key: '1', name: '购票' }]} />
    },
  }, ]

  const getBodyWrapperProps = {
    page: location.query.page,
    current: tableProps.pagination.current,
  }

  const getBodyWrapper = (body) => {
    return isMotion ? <AnimTableBody {...getBodyWrapperProps} body={body} /> : body
  }

  return (
    <div>
      <Table
        {...tableProps}
        className={classnames({ [styles.table]: true, [styles.motion]: isMotion })}
        bordered
        scroll={{ x: 1250 }}
        columns={columns}
        simple
        rowKey={record => record.id}
        getBodyWrapper={getBodyWrapper}
      />
    </div>
  )
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  isMotion: PropTypes.bool,
  location: PropTypes.object,
}

export default List