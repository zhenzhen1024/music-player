import axios from 'axios'

import {commonParams} from './config'

export function getTopList () {
  const url = '/api/getTopList'
  const data = Object.assign({}, commonParams, {
    _: 1557670867731,
    g_tk: 5381,
    uin: 0,
    format: 'json',
    platform: 'h5',
    needNewCode: 1
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getMusicList (topId, period) {
  const url = '/api/getMusicList'
  const data = Object.assign({}, commonParams, {
    '-': 'getUCGI7123657752128183',
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    platform: 'yqq.json',
    needNewCode: 0,
    data: {
      'detail': {
        'module': 'musicToplist.ToplistInfoServer',
        'method': 'GetDetail',
        'param': {'topId': topId, 'offset': 0, 'num': 20, 'period': period}
      },
      'comm': {'ct': 24, 'cv': 0}
    }
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
