import { render, screen } from '@testing-library/react'
import { Greet } from '../components/greet/greet'
// .only .skip
describe('Greet', () => {
    test('renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
    })
    describe('Nested', () => {
        test('renders  with a name', () => {
            render(<Greet name='piyawat' />)
            const textElement = screen.getByText('Hello piyawat')
            expect(textElement).toBeInTheDocument()
        })
    })

})
describe('Nested', () => {
    test('renders  with a name', () => {
        render(<Greet name='piyawat' />)
        const textElement = screen.getByText('Hello piyawat')
        expect(textElement).toBeInTheDocument()
    })
})
