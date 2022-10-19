import express, { Router } from 'express'

const router: Router = express.Router()

router.get('/', (req, res) => {
  res.send('users');
  console.log(req.params)
})

router.post('/', (req, res) => {
  res.send('users post');
  console.log(req.body)
})

export default router