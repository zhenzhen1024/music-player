import axios from 'axios'

import {commonParams} from './config'

// export function getRecommend() {
//   const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
//
//   // const data = Object.assign({}, commonParams, {
//   //   _: 1555914364023,
//   //   uin: 1393511002,
//   //   platform: 'h5',
//   //   needNewCode: 1
//   // })
//   return $.getJSON(url, function (data) {
//     console.log('success')
//   })
// }
// export function getRecommend() {
//   const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
//   const data = Object.assign({}, commonParams, {
//     uin: 0,
//     platform: 'h5',
//     needNewCode: 1
//   })
//   return jsonp(url, data, options)
// }
// ajax请求,不是jsonp请求了

export function getRecommend() {
  const url = '/api/getRecommend'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
