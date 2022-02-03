import {
  render,
  screen,
  fireEvent,
  getByTestId,
  queryAllByTestId,
} from "@testing-library/react";
import Register from "./Register";

test("1. Test if elements are rendered", () => {
  const { container } = render(<Register />);
  const ImieElement = screen.getByText(/Imie/i);
  const HasloElement = screen.getByText(/Hasło/i);
  const ZgodaElement = screen.getByText(/zgoda na newsletter/i);

  const CheckBox = getByTestId(container, "checkbox");
  const TwoInputs = queryAllByTestId(container, "inputs");
  const RegisterButton = getByTestId(container, "register");

  expect(ImieElement).toBeInTheDocument();
  expect(HasloElement).toBeInTheDocument();
  expect(ZgodaElement).toBeInTheDocument();
  expect(CheckBox).toBeInTheDocument();
  expect(CheckBox.checked).toEqual(false);
  expect(TwoInputs).toHaveLength(2);
  expect(RegisterButton).toBeInTheDocument();
});

test("2. Test if the CheckBox is initially empty and whether it works", () => {
  const { container } = render(<Register />);
  const CheckBox = getByTestId(container, "checkbox");
  expect(CheckBox.checked).toEqual(false);
  fireEvent.click(CheckBox);
  expect(CheckBox.checked).toEqual(true);
});

test("3. Test if the E-mail input appears", () => {
  const { container } = render(<Register />);
  const CheckBox = getByTestId(container, "checkbox");
  fireEvent.click(CheckBox);
  const ImieElement = screen.getByText(/E-mail/i);
  expect(ImieElement).toBeInTheDocument();
  const ThreeInputs = queryAllByTestId(container, "inputs");
  expect(ThreeInputs).toHaveLength(3);
});

test("4. Test if inputs are empty", () => {
  const { container } = render(<Register />);

  const CheckBox = getByTestId(container, "checkbox");
  fireEvent.click(CheckBox);

  const ThreeInputs = queryAllByTestId(container, "inputs");

  expect(ThreeInputs[0]).toHaveValue("");
  expect(ThreeInputs[1]).toHaveValue("");
  expect(ThreeInputs[2]).toHaveValue("");
});

test("5. Test basic not filled form", () => {
  const { container } = render(<Register />);
  const RegisterButton = getByTestId(container, "register");
  const TwoInputs = queryAllByTestId(container, "inputs");

  fireEvent.change(TwoInputs[1], { target: { value: "321" } });
  fireEvent.click(RegisterButton);
  const OutPut = getByTestId(container, "form");
  expect(OutPut.textContent).toEqual("błąd walidacji");
});

test("6. Test basic filled form", () => {
  const { container } = render(<Register />);
  const RegisterButton = getByTestId(container, "register");
  const TwoInputs = queryAllByTestId(container, "inputs");

  fireEvent.change(TwoInputs[0], { target: { value: "123" } });
  fireEvent.change(TwoInputs[1], { target: { value: "321" } });
  fireEvent.click(RegisterButton);
  const OutPut = getByTestId(container, "form");
  expect(OutPut.textContent).toEqual("pomyślna rejestracja");
});

test("7. Test not filled form with an E-mail", () => {
  const { container } = render(<Register />);
  const RegisterButton = getByTestId(container, "register");

  const CheckBox = getByTestId(container, "checkbox");
  fireEvent.click(CheckBox);

  const ThreeInputs = queryAllByTestId(container, "inputs");

  fireEvent.change(ThreeInputs[2], { target: { value: "321" } });
  fireEvent.click(RegisterButton);

  const OutPut = getByTestId(container, "form");
  expect(OutPut.textContent).toEqual("błąd walidacji");
});

test("8. Test filled form with a bad E-mail", () => {
  const { container } = render(<Register />);
  const RegisterButton = getByTestId(container, "register");

  const CheckBox = getByTestId(container, "checkbox");
  fireEvent.click(CheckBox);

  const ThreeInputs = queryAllByTestId(container, "inputs");

  fireEvent.change(ThreeInputs[0], { target: { value: "321" } });
  fireEvent.change(ThreeInputs[1], { target: { value: "333" } });
  fireEvent.change(ThreeInputs[2], { target: { value: "555" } });
  fireEvent.click(RegisterButton);

  const OutPut = getByTestId(container, "form");
  expect(OutPut.textContent).toEqual("błąd walidacji");
});

test("9. Test filled form with a good E-mail", () => {
  const { container } = render(<Register />);
  const RegisterButton = getByTestId(container, "register");

  const CheckBox = getByTestId(container, "checkbox");
  fireEvent.click(CheckBox);

  const ThreeInputs = queryAllByTestId(container, "inputs");

  fireEvent.change(ThreeInputs[0], { target: { value: "321" } });
  fireEvent.change(ThreeInputs[1], { target: { value: "333" } });
  fireEvent.change(ThreeInputs[2], { target: { value: "test@gmail.com" } });
  fireEvent.click(RegisterButton);

  const OutPut = getByTestId(container, "form");
  expect(OutPut.textContent).toEqual("pomyślna rejestracja");
});
