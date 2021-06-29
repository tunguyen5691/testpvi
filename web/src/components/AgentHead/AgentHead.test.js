import { render } from '@redwoodjs/testing'

import AgentHead from './AgentHead'

describe('AgentHead', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AgentHead />)
    }).not.toThrow()
  })
})
