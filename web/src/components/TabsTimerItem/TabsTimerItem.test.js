import { render } from '@redwoodjs/testing'

import TabsTimerItem from './TabsTimerItem'

describe('TabsTimerItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TabsTimerItem />)
    }).not.toThrow()
  })
})
