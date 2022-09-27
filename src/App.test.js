import { render, screen, fireEvent } from "@testing-library/react";
import App from './App';
//import axios from 'axios';
//jest.mock('axios');

beforeEach(() => {
    render(<App />);
})

describe('Home UI elements', () => {
    test('should render the title', () => {
        let title = screen.getByText(/women in computer science/i);
        expect(title).toBeInTheDocument();
    });
    test('should render the button', () => {
        let button = screen.getByText(/show/i);
        expect(button).toBeInTheDocument();
    })
});

describe('Card element', () => {
    test.only('should render Ada Lovelace', async() => {
        let button = screen.getByRole('button', { name: 'Show' })
        fireEvent.click(button)
        let adaLovelace = await screen.findByText("Ada Lovelace")
        expect(adaLovelace).toBeInTheDocument();
    });

});
