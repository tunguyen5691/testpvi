import { render } from '@redwoodjs/testing'

import Insurrancestep2dPage from './Insurrancestep2dPage'

describe('Insurrancestep2dPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Insurrancestep2dPage />)
    }).not.toThrow()
  })
})
