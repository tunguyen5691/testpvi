import { render } from '@redwoodjs/testing'

import TableButton from './TableButton'

describe('TableButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TableButton />)
    }).not.toThrow()
  })
})
