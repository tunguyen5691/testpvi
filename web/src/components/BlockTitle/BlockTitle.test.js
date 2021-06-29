import { render } from '@redwoodjs/testing'

import BlockTitle from './BlockTitle'

describe('BlockTitle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlockTitle />)
    }).not.toThrow()
  })
})
