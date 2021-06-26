import { useState } from "react";
import {
  StyledButton,
  StyledError,
  StyledFieldset,
  StyledForm,
  StyledFormWrapper,
  StyledInput,
  StyledTextArea,
} from "../styles/Form";

const initialState = {
  name: "",
  email: "",
  message: "",
  gender: "",
};

export const Form = () => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
    console.log(data);

    for (let key in data) {
      if (data[key] === "") {
        setError(`${key} cannot be blank `);
        return;
      }
    }
    setError("");
    console.log("Succeeded!!!");
    setData(initialState);
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setData((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Testing Form</h2>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            name="name"
            value={data.name}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            value={data.email}
            onChange={handleInput}
          />
          <StyledFieldset>
            <legend>Gender</legend>
            <label>
              <input
                type="radio"
                value="male"
                name="gender"
                checked={data.gender === "male"}
                onChange={handleInput}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                name="gender"
                checked={data.gender === "female"}
                onChange={handleInput}
              />
              Female
            </label>
          </StyledFieldset>
          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="message"
            value={data.message}
            onChange={handleInput}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};
