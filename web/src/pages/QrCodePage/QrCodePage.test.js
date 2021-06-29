import { render } from '@redwoodjs/testing'

import QrCodePage from './QrCodePage'

describe('QrCodePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QrCodePage />)
    }).not.toThrow()
  })
})
