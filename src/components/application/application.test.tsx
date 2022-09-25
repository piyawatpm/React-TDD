import { render, screen } from "@testing-library/react"
import { Application } from "./application"
describe('Application', () => {
    test('renders correctly ', () => {
        render(<Application />)
        const testIdElement = screen.getByTestId('piyawat')
        expect(testIdElement).toBeInTheDocument()

        const pageHeading = screen.getByRole('heading', {
            name: "Job application form",
            level: 1
            // h1
        })
        expect(pageHeading).toBeInTheDocument();

        const sectionHeadeing = screen.getByRole('heading', {
            name: "Section 1",
            level: 2
            // h2
        })
        expect(pageHeading).toBeInTheDocument();

        const nameElement = screen.getByRole('textbox', {
            name: "Name"
        })
        expect(nameElement).toBeInTheDocument()

        const bioElement = screen.getByRole('textbox', {
            name: "Bio"
        })
        expect(bioElement).toBeInTheDocument();
        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument()

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const submitButtonElement = screen.getByRole("button");
        expect(submitButtonElement).toBeInTheDocument();
    })
})