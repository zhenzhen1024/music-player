import axios from 'axios'

import {commonParams} from './config'

export const singerList = []
function getSingerList(index) {
  const url = '/api/getSingerList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq.json',
    hostUin: 0,
    '-': 'getUCGI12436359767863014',
    needNewCode: 0,
    rnd: Math.random(),
    format: 'json',
    data: {'comm': {'ct': 24, 'cv': 0}, 'singerList': {'module': 'Music.SingerListServer', 'method': 'get_singer_list', 'param': {'area': 2, 'sex': -100, 'genre': -100, 'index': index, 'sin': 0, 'cur_page': 1}}}
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

for (let i = 1; i < 6; i++) {
  getSingerList(i).then((res) => {
    if (res.singerList) {
      singerList.push({
        title: String.fromCodePoint(i + 64),
        items: res.singerList.data.singerlist
      })
    }
  })
}
