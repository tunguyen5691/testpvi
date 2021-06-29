import { render } from '@redwoodjs/testing'

import AgencyIcon from './AgencyIcon'

describe('AgencyIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AgencyIcon />)
    }).not.toThrow()
  })
})
