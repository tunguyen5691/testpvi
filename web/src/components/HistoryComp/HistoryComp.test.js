import { render } from '@redwoodjs/testing'

import HistoryComp from './HistoryComp'

describe('HistoryComp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HistoryComp />)
    }).not.toThrow()
  })
})
