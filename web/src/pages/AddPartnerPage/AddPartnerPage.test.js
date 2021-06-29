import { render } from '@redwoodjs/testing'

import AddPartnerPage from './AddPartnerPage'

describe('AddPartnerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddPartnerPage />)
    }).not.toThrow()
  })
})
