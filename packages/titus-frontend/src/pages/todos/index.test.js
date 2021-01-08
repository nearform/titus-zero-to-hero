import React from 'react'

import { render, waitFor } from '../../test-utils'

import TodoList from './index'

describe('<TodoList />', () => {
  it('renders todos', async () => {
    // Mock fetch to to return 2 todos
    global.fetch = jest.fn(async () => ({
      json: jest.fn(async () => ({
        data: [
          {
            // Completed todo
            id: 123,
            description: 'do stuff',
            completedAt: new Date().toISOString()
          },
          {
            // Uncompleted todo
            id: 456,
            description: 'do more stuff'
          }
        ]
      }))
    }))

    const { getByLabelText } = render(<TodoList />)

    // Get the 2 todos and assert that they are rendered and checked appropriately
    const todo1 = await waitFor(() => getByLabelText('do stuff'))
    const todo2 = await waitFor(() => getByLabelText('do more stuff'))
    expect(todo1).toBeInTheDocument()
    expect(todo2).toBeInTheDocument()
    expect(todo1.checked).toEqual(true)
    expect(todo2.checked).toEqual(false)
  })
})
