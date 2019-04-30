import axios from 'axios'

import {commonParams} from './config'

export function getSingerList() {
  const url = '/api/getSingerList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq.json',
    hostUin: 0,
    '-': 'getUCGI12436359767863014',
    needNewCode: 0,
    rnd: Math.random(),
    format: 'json',
    data: {'comm': {'ct': 24, 'cv': 0}, 'singerList': {'module': 'Music.SingerListServer', 'method': 'get_singer_list', 'param': {'area': -100, 'sex': -100, 'genre': -100, 'index': -100, 'sin': 0, 'cur_page': 1}}}
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
