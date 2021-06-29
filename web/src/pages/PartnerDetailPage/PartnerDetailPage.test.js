import { render } from '@redwoodjs/testing'

import PartnerDetailPage from './PartnerDetailPage'

describe('PartnerDetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PartnerDetailPage />)
    }).not.toThrow()
  })
})
