import { render } from '@redwoodjs/testing'

import AgencyFormRegister from './AgencyFormRegister'

describe('AgencyFormRegister', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AgencyFormRegister />)
    }).not.toThrow()
  })
})
