import request from 'supertest'
import app from '../confi/app'

describe('SignUp Routes', () => {
  test('should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Cleison',
        email: 'cleison.pereira@gmail.com',
        password: '123456',
        passwordConfirmation: '123456'
      })
      .expect(200)
  })
})
