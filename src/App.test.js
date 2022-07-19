import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './components/Login'

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/login form/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders username text', () => {
  render(<Login />);
  const inputText = screen.getByPlaceholderText('username')
  expect(inputText).toBeInTheDocument();
});

test('renders password text', () => {
  render(<Login />);
  const inputText = screen.getByPlaceholderText('password')
  expect(inputText).toBeInTheDocument();
});

test('renders button text', () => {
  render(<Login />);
  const inputNode = screen.getByRole('button')
  expect(inputNode).toBeInTheDocument();
});

test('input text should be empty', () => {
  render(<Login />);
  const inputText = screen.getByPlaceholderText('username')
  expect(inputText.value).toBe('');
});

test('password text should be empty', () => {
  render(<Login />);
  const passwordText = screen.getByPlaceholderText('password')
  expect(passwordText.value).toBe('');
});
