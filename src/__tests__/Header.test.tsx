import React from "react"
import { render, screen, act } from "@testing-library/react"
import Header from "../Header"

jest.mock("../lib/Api.tsx", () => ({
  GetApi: () => ({
    error: null,
    loading: false,
    data: {
      name: {
        full: "Test"
      },
      timeline: {
        inProgress: {
          begin: "2021-01-01T00:00:00+00:00"
        }
      }
    }
  })
}))

test("Loads data from api and displays it on the page", async () => {
  render(<Header />)

  expect(screen.getByText("Test")).toBeInTheDocument()
})

test("Shows date in expected format", async () => {
  render(<Header />)

  expect(screen.getByText("1 January 2021")).toBeInTheDocument()
})
