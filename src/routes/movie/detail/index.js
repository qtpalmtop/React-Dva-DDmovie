import React from 'react'
import PropTypes from 'prop-types'
import {
  connect
} from 'dva'
import styles from './index.less'

const MDetail = ({
  movieDetail
}) => {
  const {
    data
  } = movieDetail
  console.log(data)

  let {
    img_urls
  } = data
  console.log(img_urls)
    //img_urls = [...img_urls]
    //img_urls.map(item => <li><img src={item}></img></li>)
  console.log(typeof(img_urls))
    /*  id,
        name,
        tap,
        img_url,
        pub_date,
        director,
        actors,
        type,
        country,
        version,
        play_time,
        story,
        img_urls,*/
    /*  const content = []
      for (let key in data) {
        if ({}.hasOwnProperty.call(data, key)) {
          content.push(<div key={key} className={styles.item}>
            <div>{key}</div>
            <div>{String(data[key])}</div>
          </div>)
        }
      }*/
  return (
    <div className="content-inner">
      <div className={styles.content}>
        <div className={styles.poster}>
          <img src={data.img_url}></img>
        </div>
        <div className={styles.moviePanel}>
          <div className={styles.movieContent}>
              <h5>上映日期：{data.pub_date}</h5>
              <ul>
                  <li>导演：{data.director}</li>
                  <li>主演：{data.actors}</li>
                  <li>类型：{data.type}</li>
                  <li>国家：{data.country}</li>
                  <li>版本：{data.version}</li>
                  <li>片长：{data.play_time}分钟</li>
                  <li>影片剧情：{data.story}</li>
                  <li>影片剧照：</li>
                  <li><img src={img_urls}></img></li>
              </ul>
          </div>
        </div>
      </div>
    </div>)
}

MDetail.propTypes = {
  movieDetail: PropTypes.object,
}

export default connect(({
  movieDetail,
  loading
}) => ({
  movieDetail,
  loading: loading.models.movieDetail
}))(MDetail)