import { render } from '@redwoodjs/testing'

import OddersTabs from './OddersTabs'

describe('OddersTabs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OddersTabs />)
    }).not.toThrow()
  })
})
