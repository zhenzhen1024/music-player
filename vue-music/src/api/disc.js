import axios from 'axios'

import {commonParams} from './config'

export function getDisc (dissid) {
  const url = '/api/getDisc'
  const data = Object.assign({}, commonParams, {
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    new_format: 1,
    disstid: dissid,
    g_tk: 5381,
    loginUin: 0,
    inCharset: 'utf8',
    hostUin: 0,
    format: 'json',
    platform: 'yqq.json',
    needNewCode: 0
  })
  return axios.get(url, {
    params: data
  },
  {
    withCredentials: false
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
