import request from 'supertest'
import app from '../app'

describe('Test the root path', () => {
  it('should response the GET method on "/" with status 200', async () => {
    const result = await request(app).get('/')
    expect(result.status).toBe(200)
  })
  it('should response the GET method on "/" with "Hello World"', async () => {
    const result = await request(app).get('/')
    expect(result.text).toBe('Hello World!')
  })
})
