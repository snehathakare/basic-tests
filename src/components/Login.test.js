import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Login from './Login'


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

jest.mock("axios", () => ({
    __esModule: true,

    default: {
        get: () => ({
            data: { id: 1, name: "John" },
        }),
    },
}));

test("loading should not be rendered after fetching", async () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);

    const testValue = "test";

    fireEvent.change(usernameInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.click(buttonEl);

    await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i));
});

test("user should be rendered after fetching", async () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);

    const testValue = "test";

    fireEvent.change(usernameInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.click(buttonEl);

    const userItem = await screen.findByText("John");

    expect(userItem).toBeInTheDocument();
});
