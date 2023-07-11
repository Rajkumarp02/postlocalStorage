import {  render,cleanup,fireEvent } from '@testing-library/react'
import App from './App';


afterEach(cleanup);


describe(App, () => {
it('should equal to 0' , () => {
    const {getByTestId} = render(<App />);
    expect(getByTestId ('counter')).toHaveTextContent(0)
});

it('placeholder' , () => {
    const {getByPlaceholderText} = render(<App />);
    expect(getByPlaceholderText('Type Something...')).toBeInTheDocument()
});

it('user input should change' , () => {
    const {getByPlaceholderText} = render(<App />);
    const user = getByPlaceholderText('Type Something...');

    const testValue = 'test';
    fireEvent.change(user, { target: { value: testValue}});
    expect(user.value).toBe(testValue);
});

it('view all' , () => {
    const {getByText} = render(<App />);
    expect(getByText('View All')).toBeInTheDocument()
});

it('post' , () => {
    const {getByTestId} = render(<App />);
    fireEvent.click(getByTestId('post'))
    expect(getByTestId ('post')).toBeInTheDocument()
});

it('enabled' , () => {
    const {getByTestId} = render(<App />);
    fireEvent.click(getByTestId('post'))
    expect(getByTestId('post')).not.toHaveAttribute('disabled')
});


});






