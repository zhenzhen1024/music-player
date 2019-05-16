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
    '_': 1557108732871,
    platform: 'h5',
    needNewCode: 1,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getMusicList () {
  const url = '/api/getMusicList'
  const data = {
    'req_0': {
      'module': 'track_info.UniformRuleCtrlServer',
      'method': 'GetTrackInfo',
      'param': {
        'ids': [231979025, 231776302, 231945239, 203451421, 230433003, 203514624, 231960119, 231720648, 232104876, 231854380, 232104877, 229761277, 231890023, 219004455, 231909534, 231985278, 107897932, 231694311, 231255839, 231988911, 231956986, 232104875, 232052783, 231911712, 225712637, 7105587, 213374392, 203705594, 231911714, 229131315, 232049902, 4830161, 218763493, 7063431, 109181039, 231784597, 231911716, 231817009, 232102342, 232030511, 646550, 203221202, 231948532, 232104878, 201877085, 213447793, 231784596, 231915093, 231784595, 203650915],
        'types': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    'comm': {'g_tk': 5381, 'uin': 0, 'format': 'json', 'ct': 23, 'cv': 0}
  }
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: data,
    url
  }
  return axios(options).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongList () {
  const url = '/api/getSongList'
  const data = Object.assign({}, commonParams, {
    picmid: 1,
    g_tk: 29939533,
    loginUin: 1393511002,
    hostUin: 0,
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 19,
    '_': 1557108732871,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
