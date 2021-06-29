import { render } from '@redwoodjs/testing'

import SubForm from './SubForm'

describe('SubForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubForm />)
    }).not.toThrow()
  })
})
