import React from 'react'
import PropTypes from 'prop-types'
import {
  connect
} from 'dva'
import {
  Row,
  Col,
  Card
} from 'antd'
import {
  color
} from 'utils'
import {
  Page
} from 'components'
import {
  NumberCard,
  Quote,
  Sales,
  Weather,
  RecentSales,
  Comments,
  Completed,
  Browser,
  Cpu,
  User
} from './components'
import styles from './index.less'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function Dashboard({
  dashboard,
  loading
}) {
  const {
    weather,
    sales,
    quote,
    numbers,
    recentSales,
    comments,
    completed,
    browser,
    cpu,
    user,
    movies,
  } = dashboard
  /*  const numberCards = numbers.map((item, key) => (<Col key={key} lg={6} md={12}>
      <NumberCard {...item} />
    </Col>))*/
  const numberCards = movies.map((item, key) => (<Col key={key} lg={6} md={12}>
    <NumberCard {...item} />
  </Col>))
  return (
    <Page loading={loading.models.dashboard && sales.length === 0}>
      <Row gutter={24}>
        {numberCards}
      </Row>
    </Page>
  )
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  loading: PropTypes.object,
}

export default connect(({
  dashboard,
  loading
}) => ({
  dashboard,
  loading
}))(Dashboard)