import { render } from '@redwoodjs/testing'

import AdminTabs from './AdminTabs'

describe('AdminTabs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminTabs />)
    }).not.toThrow()
  })
})
