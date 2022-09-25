import { render, screen } from '@testing-library/react'
import { Greet } from './greet'
// .only .skip
describe('Greet', () => {
    test('renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
    })
})

