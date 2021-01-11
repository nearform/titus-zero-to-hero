'use strict'

describe('todos route', () => {
  let server

  beforeAll(() => {
    server = require('fastify')()
    server.register(require('fastify-postgres'))
    server.register(require('.'))
    return server.ready()
  })

  beforeEach(() => {
    server.pg.query = jest.fn()
  })

  afterAll(() => server.close())

  it('returns all todos queried from database', async () => {
    // Mock the pg query
    const createdAt = new Date(2020, 1)
    const completedAt = new Date(2030, 1)
    server.pg.query.mockResolvedValue({
      rows: [
        {
          id: 123,
          description: 'do stuff',
          createdAt,
          completedAt
        }
      ],
      rowCount: 1
    })

    // Inject a request
    const response = await server.inject({
      method: 'GET',
      url: '/'
    })

    // Assert a 200 response that contains the todos
    expect(response.statusCode).toEqual(200)
    expect(JSON.parse(response.payload)).toEqual({
      data: [
        {
          id: 123,
          description: 'do stuff',
          createdAt: createdAt.toISOString(),
          completedAt: completedAt.toISOString()
        }
      ],
      count: 1
    })
  })
})
