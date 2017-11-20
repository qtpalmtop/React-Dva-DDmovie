import {
  request,
  config
} from 'utils'

const {
  api
} = config
const {
  tickets
} = api

export async function query(params) {
  return request({
    url: tickets,
    method: 'get',
    data: params,
  })
}

export async function remove(params) {
  return request({
    url: tickets,
    method: 'delete',
    data: params,
  })
}