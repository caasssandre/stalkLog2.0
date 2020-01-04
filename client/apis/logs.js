import request from 'superagent'

export function getLogs() {
  console.log('api logs')
  return request.get('/api/profile/logs')
}