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
      // Query the todos from the DB
      const results = await server.pg.query(
        `SELECT id, description, created_at AS "createdAt", completed_at AS "completedAt" FROM todo`
      )

      // Add a server log message
      req.log.info({ count: results.rowCount }, 'Fetched todos')

      // Return the todos
      return {
        data: results.rows,
        count: results.rowCount
      }
    }
  })
}

module.exports = todos
