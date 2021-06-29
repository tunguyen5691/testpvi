import { render } from '@redwoodjs/testing'

import Insurrancestep2bPage from './Insurrancestep2bPage'

describe('Insurrancestep2bPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Insurrancestep2bPage />)
    }).not.toThrow()
  })
})
