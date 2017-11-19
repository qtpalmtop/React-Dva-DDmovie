import React from 'react'
import PropTypes from 'prop-types'
import {
  Icon,
  Card
} from 'antd'
import {
  Link
} from 'react-router-dom'
import CountUp from 'react-countup'
import styles from './numberCard.less'

function NumberCard({
  icon,
  tap,
  number,
  color,
  small_img,
  countUp,
  name,
  id,
}) {
  return (
    <Card className={styles.numberCard} bordered={false} bodyStyle={{ padding: 0 }}>
      <div className={styles.figure}>
        <img className={styles.figure.img} src={small_img}></img>
        <div className={styles.tap}>
          <p className={styles.title}>{name || 'No Title'}</p>
          <p>简介：{tap || 'No Tap'}</p>
        </div>
      </div>
  <div className={styles.content}>
        <Link to={`movie/${id}`}><button className={styles.number}>购票</button></Link>
      </div>
    </Card>
  )
}

/*NumberCard.propTypes = {
  name: PropTypes.string,
  tap: PropTypes.string,
  small_img: PropTypes.string,
  countUp: PropTypes.object,
}*/

NumberCard.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.number,
  countUp: PropTypes.object,
}

export default NumberCard