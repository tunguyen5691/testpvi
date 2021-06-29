import { render } from '@redwoodjs/testing'

import HistoryPage from './HistoryPage'

describe('HistoryPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HistoryPage />)
    }).not.toThrow()
  })
})
