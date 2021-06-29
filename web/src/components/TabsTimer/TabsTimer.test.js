import { render } from '@redwoodjs/testing'

import TabsTimer from './TabsTimer'

describe('TabsTimer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TabsTimer />)
    }).not.toThrow()
  })
})
