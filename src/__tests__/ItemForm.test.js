import "@testing-library/jest-dom";
// import { render, screen, fireEvent } from "@testing-library/react";
// import ItemForm from "../components/ItemForm";
// import App from "../components/App";                  



import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../components/App";

test("adds a new item to the list when the form is submitted", async () => {
  render(<App />);

  const dessertCount = screen.queryAllByText(/Dessert/).length;

  fireEvent.change(screen.queryByLabelText(/Name/i), {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(screen.queryByLabelText(/Category/i), {
    target: { value: "Dessert" },
  });

  fireEvent.submit(screen.getByText(/Add to List/i));

  // ✅ Wait for DOM to update
  await waitFor(() =>
    expect(screen.queryByText(/Ice Cream/i)).toBeInTheDocument()
  );
expect(screen.queryAllByText(/Dessert/).length).toBe(dessertCount);
  
});