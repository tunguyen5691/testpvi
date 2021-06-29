import { render } from '@redwoodjs/testing'

import FilterDate from './FilterDate'

describe('FilterDate', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FilterDate />)
    }).not.toThrow()
  })
})
