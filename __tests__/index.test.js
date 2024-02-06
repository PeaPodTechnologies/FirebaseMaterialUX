import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CheckboxArray from '../src/atoms/CheckboxArray'
 
describe('Home', () => {
  it('renders a heading', () => {
    render(<CheckboxArray />)
 
    const input = screen.getByRole('input')
 
    expect(input).toBeInTheDocument()
  })
})