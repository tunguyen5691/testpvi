import { render } from '@redwoodjs/testing'

import AgencyProfilePage from './AgencyProfilePage'

describe('AgencyProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AgencyProfilePage />)
    }).not.toThrow()
  })
})
