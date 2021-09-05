import React from "react";
import ReactDOM from 'react-dom';
import Button from '../app/components/Button';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe("Check Button component functionality ", () => {

  afterEach(cleanup) // To cleanup every render

  it("renders without crashing", () => {
    const div = document.createElement("button")
    ReactDOM.render(<Button> </Button>, div) // renders the 1st argument inside of the 2nd argument
  })

  it("renders button correctly with click me please", () => {
    const { getByTestId } = render(<Button label="click me please" /> )
    expect(getByTestId("button")).toHaveTextContent("click me please")
  })

  it("renders button correctly with save", () => {
    const { getByTestId } = render(<Button label="save" /> )
    expect(getByTestId("button")).toHaveTextContent("save")
  })

})
