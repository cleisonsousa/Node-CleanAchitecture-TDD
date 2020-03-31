import request from 'supertest'
import app from '../confi/app'

describe('Body Parse Middleware', () => {
  test('should parse bodu as json', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Cleison' })
      .expect({ name: 'Cleison' })
  })
})