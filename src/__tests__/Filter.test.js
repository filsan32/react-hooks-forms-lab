// src/__tests__/ItemForm.test.js

// This import is likely incorrect and causing the error:
// import { App } from '../App';

// Change it to a default import:
import App from '../components/App';
import { render, screen } from '@testing-library/react';

// The rest of your test code should be fine
test("adds a new item to the list when the form is submitted", () => {
  render(<App />);
  // ... rest of your test
});