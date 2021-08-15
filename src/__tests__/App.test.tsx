import { render } from "@testing-library/react"
import App from "../App"

test("Renders app", () => {
  const wrapper = render(<App />)

  expect(wrapper).toBeTruthy()
})
