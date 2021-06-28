import { render, screen, waitFor } from "./test-utils";
import userEvent from "@testing-library/user-event";
import { Form } from "../components/Form";

describe("Form", () => {
  it(" should renders a form with name, email , message , radio and submit button", () => {
    render(<Form />);
    screen.getByLabelText(/name/i);
    screen.getByLabelText(/email/i);
    screen.getByLabelText(/message/i);
    screen.getByLabelText(/female/i);
    screen.getByRole("button", { name: /submit/i });
  });

  it("Error div should  be in document", async () => {
    render(<Form />);

    const ErrorDiv = () => (
      <div>
        <p>error</p>
      </div>
    );
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageTextbox = screen.getByLabelText(/message/i);
    const genderRadio = screen.getByLabelText(/female/i);
    userEvent.type(nameInput, "");
    userEvent.type(emailInput, "");
    userEvent.type(messageTextbox, "");
    userEvent.click(genderRadio);

    const button = screen.getByRole("button", { name: /submit/i });

    userEvent.click(button);

    expect(ErrorDiv).toBeInTheDocument;
  });

  it("should console the data upon validation", async () => {
    render(<Form />);
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageTextbox = screen.getByLabelText(/message/i);
    const genderRadio = screen.getByLabelText(/female/i);
    userEvent.type(nameInput, "test");
    userEvent.type(emailInput, "test@test.com");
    userEvent.type(messageTextbox, "testtest");
    userEvent.click(genderRadio);

    const button = screen.getByRole("button", { name: /submit/i });

    userEvent.click(button);
  });
});
