import { render, screen } from "@testing-library/react"
import Item from "../Item"

jest.mock("../lib/Api.tsx", () => ({
  GetApi: () => ({
    error: null,
    loading: false,
    data: [
      {
        id: 1,
        name: "Test name"
      }, {
        id: 2,
        name: "Another name"
      }
    ]
  })
}))

beforeEach(() => {
  render(<Item data={
    { participants: [{ id: 1, points: [5] }, { id: 2, points: [10] }] }
  } />)
})

test("Team names of both teams are rendered", () => {
  expect(screen.getByText("Test name")).toBeInTheDocument()
  expect(screen.getByText("Another name")).toBeInTheDocument()
})

test("Scores are shown for both teams", () => {
  expect(screen.getByText("5")).toBeInTheDocument()
  expect(screen.getByText("10")).toBeInTheDocument()
})

test("The winning team's score is highlighted", async () => {
  const element = screen.getByText("10")
  const parent = element.closest(".participant")
  
  expect(parent?.classList.contains("participant--winner")).toBeTruthy()
})
