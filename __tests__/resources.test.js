import { render, screen } from '@testing-library/react'
import Resources from '../pages/resources'
import '@testing-library/jest-dom'
 
describe('Resources', () => {
  it('renders a heading', () => {
    render(<Resources />)
 
    const heading = screen.getByRole('heading', {
      name: /Some helpful resources/i,
    })
 
    expect(heading).toBeInTheDocument()
  })
})