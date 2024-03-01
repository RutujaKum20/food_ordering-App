import { render, screen } from "@testing-library/react";
import Restaurantcards from "../Restaurantcards";
import { MOCK_DATA } from "../mocks/RestCardsMock.json";
import "@testing-library/jest-dom";

it("Should render restaurant card component with props data", () => {
  render(<Restaurantcards resData={MOCK_DATA} />);

  const name = screen.getByText("Shree Dwarka Sweets");

  expect(name).toBeInTheDocument();
});

// it("Should render restaurant card component with promoted label", () => {
//   render(<Restaurantcards resData={MOCK_DATA} />);
// });  homework
