import { render } from '@redwoodjs/testing'

import AgencyRegisterStep2Page from './AgencyRegisterStep2Page'

describe('AgencyRegisterStep2Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AgencyRegisterStep2Page />)
    }).not.toThrow()
  })
})
