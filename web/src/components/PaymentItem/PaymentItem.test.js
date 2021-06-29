import { render } from '@redwoodjs/testing'

import PaymentItem from './PaymentItem'

describe('PaymentItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PaymentItem />)
    }).not.toThrow()
  })
})
