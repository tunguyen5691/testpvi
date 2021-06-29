import { render } from '@redwoodjs/testing'

import NotiCard from './NotiCard'

describe('NotiCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotiCard />)
    }).not.toThrow()
  })
})
