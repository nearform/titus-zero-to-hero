'use strict'

const S = require('fluent-schema')

// Schema of a single todo
const todoSchema = S.object()
  .prop('id', S.number())
  .required()
  .prop('description', S.string())
  .required()
  .prop('createdAt', S.string().format(S.FORMATS.DATE_TIME))
  .required()
  .prop('completedAt', S.string().format(S.FORMATS.DATE_TIME))

async function todos(server) {
  server.route({
    method: 'GET',
    url: '/',
    schema: {
      response: {
        200: S.object()
          .prop('data', S.array().items(todoSchema))
          .required()
          .prop('count', S.number())
          .required()
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
