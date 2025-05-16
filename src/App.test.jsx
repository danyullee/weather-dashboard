import { expect, test } from 'vitest'
import App from './App'
import { render, screen } from '@testing-library/react'

test('renders search bar', () => {
  render(<App />)
  expect(screen.getByPlaceholderText(/enter city name/i)).toBeInTheDocument()
})