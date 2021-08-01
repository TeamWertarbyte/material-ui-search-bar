import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar, { ISearchBarProps } from "./SearchBar";

const SearchBarTester = (props: Partial<ISearchBarProps>) => (
  <SearchBar
    value=""
    onChange={jest.fn()}
    onCancelSearch={jest.fn()}
    {...props}
  />
);

afterEach = () => {
  jest.clearAllMocks();
}

// Place holder test
test("should render with default placeholder", () => {
    const { getByPlaceholderText } = render(
        <SearchBar value="" onChange={jest.fn()} onCancelSearch={jest.fn()} />
    );
    expect(getByPlaceholderText(/Search/i)).toBeTruthy();
});

/**
 * OnChange test
 */
test("should set value on change event and call the onChange function for the user", () => {
    const onChange = jest.fn();
    const { getByRole } = render(
    <SearchBar value="" onChange={onChange} onCancelSearch={jest.fn()} />
    );
    const input = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });

    expect(onChange).toHaveBeenCalledWith("test");
    expect(input.value).toBe("test");
});

/**
 * Focus the input and check that the onFocus function is called
 */ 
test("should focus for user and call the onFocus function", () => {
    const onFocus = jest.fn();
    const { getByRole } = render(<SearchBarTester onFocus={onFocus} />);
    const input = getByRole("textbox") as HTMLInputElement;

    input.focus();
    expect(onFocus).toHaveBeenCalled();
});

test("should focus for user when no user defined function is supplied", () => {
    const { getByRole } = render(<SearchBarTester />);
    const input = getByRole("textbox") as HTMLInputElement;
    const onFocus = jest.fn();
    input.onfocus = onFocus;
    input.focus();
    expect(onFocus).toHaveBeenCalled();
});

/**
 * Blur the input and check that the onBlur function is called
 */ 
test("should blur for user and call the onBlur function", () => {
    const onBlur = jest.fn();
    const { getByRole } = render(<SearchBarTester onBlur={onBlur} />);
    const input = getByRole("textbox") as HTMLInputElement;

    input.focus();
    input.blur();
    expect(onBlur).toHaveBeenCalled();
});

test("should blur for user when no user defined function is supplied", () => {
    const { getByRole } = render(<SearchBarTester />);
    const input = getByRole("textbox") as HTMLInputElement;
    const onBlur = jest.fn();
    input.onblur = onBlur;
    input.focus();
    input.blur();
    expect(onBlur).toHaveBeenCalled();
});

/**
 * onCancelSearch test
 */ 
 test("should clear the value for user and call the onCancelSearch function", () => {
    const onCancelSearch = jest.fn();
    const { getByRole } = render(<SearchBarTester onCancelSearch={onCancelSearch} />);
    const input = getByRole("textbox") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(getByRole("clearButton"))

    expect(onCancelSearch).toHaveBeenCalled();
    expect(input.value).toBe("");
});
  
test("should clear for user when no user defined function is supplied", () => {
    const { getByRole } = render(<SearchBarTester />);
    const input = getByRole("textbox") as HTMLInputElement;
    const clearButton = getByRole("clearButton") as HTMLButtonElement;
    const onCancelSearch = jest.fn();

    fireEvent.change(input, { target: { value: "test" } });
    clearButton.onclick = onCancelSearch;
    fireEvent.click(clearButton) 
    expect(onCancelSearch).toHaveBeenCalled();
    expect(input.value).toBe("");
});

/**
 * onRequestSearch test
 */
test("should call the onRequestSearch function passed by user", () => {
    const onRequestSearch = jest.fn();
    const { getByRole } = render(<SearchBarTester onRequestSearch={onRequestSearch} />);
    fireEvent.click(getByRole("searchButton"))
    expect(onRequestSearch).toHaveBeenCalled();
}); 

test("should not error when no onRequestSearch function is supplied", () => {
    const { getByRole } = render(<SearchBarTester />);
    fireEvent.click(getByRole("searchButton"))
});

/**
 * onRequestSearch with Enter key onDown event
 */
test("should call the onRequestSearch function passed by user on Enter key pressed", () => {
    const onRequestSearch = jest.fn();
    const { getByRole } = render(<SearchBarTester onRequestSearch={onRequestSearch} />);
    fireEvent.keyUp(getByRole('textbox'), { key: "Enter" });
    fireEvent.keyUp(getByRole('textbox'), { charCode: 13 }); 
    expect(onRequestSearch).toHaveBeenCalled();
}); 

/**
 * onCancelSearch with Escape key onDown event
 */
test("should call the onCancelSearch function passed by user on Escape key pressed", () => {
    const onCancelSearch = jest.fn();
    const { getByRole } = render(<SearchBarTester cancelOnEscape={true} onCancelSearch={onCancelSearch} />);
    fireEvent.keyUp(getByRole('textbox'), { key: "Escape" });
    fireEvent.keyUp(getByRole('textbox'), { charCode: 27 }); 
    expect(onCancelSearch).toHaveBeenCalled();
}); 

/**
 * onKeyUp function test
 */
test("should call user defined keyUp Function", () => {
    const onKeyUp = jest.fn();
    const { getByRole } = render(<SearchBarTester onKeyUp={onKeyUp} />);
    fireEvent.keyUp(getByRole('textbox'), { key: "Enter" });
    expect(onKeyUp).toHaveBeenCalled();
}); 