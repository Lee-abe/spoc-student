import request from '@/utils/request'

export async function queryProse(data): Promise<any> {
  return request({
    url: '/project/prose',
    method: 'post',
    data
  })
}
