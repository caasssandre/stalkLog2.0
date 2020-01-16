import request from 'superagent'
console.log('logs api')

export function getLogs() {
  console.log('api logs')
  return request.get('/api/profile/logs')
}