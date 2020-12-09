'use strict'

module.exports = {
  successResponse: {
    description: 'Successful response',
    type: 'object',
    properties: {
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'number' },
            description: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            completedAt: { type: 'string', format: 'date-time' }
          },
          requiredProperties: ['id', 'description', 'created']
        }
      },
      count: {
        type: 'number'
      }
    },
    requiredProperties: ['data', 'count']
  }
}
