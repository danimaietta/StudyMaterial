import React from "react";
import Greeting from '../app/components/Greeting';
import { render, cleanup, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const snapshot = `<div>
                    <button>Say hello world</button>
                    <h1>Hello World!</h1>
                  </div>`

describe("Check Greeting component functionality ", () => {

    it("renders a message", () => {
        const { container, getByText } = render(<Greeting />)
        expect(getByText('Hello World!'), 'The component should have: Hello World!').toBeInTheDocument()
        expect(container.firstChild, 'The component should match the snapshot').toMatchSnapshot(snapshot)
    })

    it("clicking button Say hello world", () => {
        const { getByText } = render(<Greeting />)
        fireEvent.click(getByText('Say hello world'))
        expect(getByText('Hello World! x2'), 'when the component is clicked it should change the message to: Hello World! x2 ').toBeInTheDocument()
    })

})