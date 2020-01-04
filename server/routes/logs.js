const router = require('express').Router()
const { getLogs } = require ('../db/logs')

router.get('/api/profile/logs', ()=>{
  console.log('logs routes')
  getLogs()
})