import axios from 'axios'

import {commonParams} from './config'

export function getHotKey () {
  const url = '/api/getHotKey'
  const data = Object.assign({}, commonParams, {
    _: 1557731388844,
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

export function search (query, page, catZhida, perpage) {
  const url = '/api/search'
  const data = Object.assign({}, commonParams, {
    _: 1557735465495,
    uin: 0,
    format: 'json',
    platform: 'h5',
    needNewCode: 1,
    w: query,
    zhidaqu: 1,
    catZhida: catZhida ? 1 : 0,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage: perpage,
    n: 20,
    p: page,
    remoteplace: 'txt.mqq.all'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
