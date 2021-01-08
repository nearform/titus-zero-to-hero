'use strict'

const schemas = require('./schemas')

async function todos(server) {
  server.route({
    method: 'GET',
    url: '/',
    schema: {
      response: {
        200: schemas.successResponse
      }
    },

    handler: async (req, res) => {
      // Query the TODOs from the DB
      const results = await server.pg.query(`SELECT * FROM todo`)

      // Format the queried data to match the API schema
      const todos = results.rows.map(r => ({
        id: r.id,
        description: r.description,
        createdAt: r.created_at,
        completedAt: r.completed_at
      }))
      const count = results.rowCount

      // Add a server log message
      req.log.info({ count }, 'Fetched todos')

      // Return the TODOs
      return {
        data: todos,
        count
      }
    }
  })
}

module.exports = todos
