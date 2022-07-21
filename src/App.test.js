import { fireEvent, render, screen } from '@testing-library/react';
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

test('user input should change', () => {
  render(<Login />);
  const userText = screen.getByPlaceholderText('username')
  const testValue = "test"
  fireEvent.change(userText, { target: { value: testValue } })
  expect(userText.value).toBe(testValue);
});

test('password input should change', () => {
  render(<Login />);
  const passwordText = screen.getByPlaceholderText('password')
  const testValue = "test"
  fireEvent.change(passwordText, { target: { value: testValue } })
  expect(passwordText.value).toBe(testValue);
});

test('button should not be disabled when input exists', () => {
  render(<Login />);
  const loginButton = screen.getByRole('button')
  const userText = screen.getByPlaceholderText(/username/i)
  const passwordText = screen.getByPlaceholderText(/password/i)

  const testValue = "test";

  fireEvent.change(userText, { target: { value: testValue } })
  fireEvent.change(passwordText, { target: { value: testValue } })
  expect(loginButton).not.toBeDisabled();
});


