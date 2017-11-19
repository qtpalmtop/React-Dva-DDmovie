import {
  request,
  config
} from 'utils'

const {
  api
} = config
const {
  movie
} = api

export async function query(params) {
  return request({
    url: movie,
    method: 'get',
    data: params,
  })
}

export async function create(params) {
  return request({
    url: movie.replace('/:id', ''),
    method: 'post',
    data: params,
  })
}

export async function remove(params) {
  return request({
    url: movie,
    method: 'delete',
    data: params,
  })
}

export async function update(params) {
  return request({
    url: movie,
    method: 'patch',
    data: params,
  })
}