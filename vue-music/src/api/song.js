import axios from 'axios'

import {commonParams} from './config'

export function getLyric (mid) {
  const url = '/api/getLyric'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq.json',
    hostUin: 0,
    '-': 'MusicJsonCallback_lrc',
    pcachetime: 1557631043558,
    songmid: mid,
    g_tk: 5381,
    needNewCode: 0,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
