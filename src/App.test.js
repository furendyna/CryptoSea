// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoSea title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoSea/i);
    expect(titleElement).toBeInTheDocument();
});
