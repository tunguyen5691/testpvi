import { render } from '@redwoodjs/testing'

import AgencyRegisterPage from './AgencyRegisterPage'

describe('AgencyRegisterPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AgencyRegisterPage />)
    }).not.toThrow()
  })
})
