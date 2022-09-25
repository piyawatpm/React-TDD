import { render, screen } from '@testing-library/react'
import { Greet } from './greet'
// .only .skip
// fit = test.only
// xit = skip
describe('Greet', () => {
    xit('renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
    })
    describe('Nested', () => {
        fit('renders  with a name', () => { 
            render(<Greet name='piyawat' />)
            const textElement = screen.getByText('Hello piyawat')
            expect(textElement).toBeInTheDocument()
        })
    })

})
describe('Nested', () => {
    it('renders  with a name', () => {
        render(<Greet name='piyawat' />)
        const textElement = screen.getByText('Hello piyawat')
        expect(textElement).toBeInTheDocument()
    })
})
