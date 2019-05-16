import axios from 'axios'

import {commonParams} from './config'

export function getSingerList () {
  const url = '/api/getSingerList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq.json',
    hostUin: 0,
    '-': 'getUCGI12436359767863014',
    needNewCode: 0,
    rnd: Math.random(),
    format: 'json',
    data: {
      'comm': {'ct': 24, 'cv': 0},
      'singerList': {
        'module': 'Music.SingerListServer',
        'method': 'get_singer_list',
        'param': {'area': -100, 'sex': -100, 'genre': -100, 'index': -100, 'sin': 0, 'cur_page': 1}
      }
    }
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSingerDetail (singerId) {
  const url = '/api/getSingerDetail'
  const data = Object.assign({}, commonParams, {
    '-': 'getUCGI14981949230946578',
    g_tk: 29939533,
    loginUin: 1393511002,
    hostUin: 0,
    format: 'json',
    platform: 'yqq.json',
    needNewCode: 0,
    data: {
      'comm': {'ct': 24, 'cv': 0},
      'singer': {
        'method': 'get_singer_detail_info',
        'param': {'sort': 5, 'singermid': singerId, 'sin': 0, 'num': 20},
        'module': 'music.web_singer_info_svr'
      }
    }
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSong (song) {
  const url = '/api/getSingerDetail'
  const data = Object.assign({}, commonParams, {
    '-': 'getplaysongvkey3498585314668745',
    g_tk: 29939533,
    loginUin: 1393511002,
    hostUin: 0,
    format: 'json',
    platform: 'yqq.json',
    needNewCode: 0,
    data: {
      'req_0': {
        'module': 'vkey.GetVkeyServer',
        'method': 'CgiGetVkey',
        'param': {
          'guid': '5328164928',
          'songmid': [song.mid],
          'songtype': [song.type],
          'uin': '1393511002',
          'loginflag': 1,
          'platform': '20'
        }
      },
      'comm': {'uin': 1393511002, 'format': 'json', 'ct': 24, 'cv': 0}
    }
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
