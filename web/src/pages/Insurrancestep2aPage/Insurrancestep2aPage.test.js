import { render } from '@redwoodjs/testing'

import Insurrancestep2aPage from './Insurrancestep2aPage'

describe('Insurrancestep2aPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Insurrancestep2aPage />)
    }).not.toThrow()
  })
})
