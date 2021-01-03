import React from "react";
import Field from "./Field";
import Result from "./Result";

const Form = (props) => {
  let {
    className,
    name,
    email,
    password,
    repeatedPassword,
    submitted,
    setSubmitted,
    errorMessage,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleRepeatedPasswordChange,
    handleSubmit,
  } = props;

  const handleErrorName = () => {
    if (errorMessage === "Missing name") {
      return true;
    }
    return false;
  };
  const handleErrorEmail = () => {
    if (errorMessage === "Missing email") {
      return true;
    }
    return false;
  };
  const handleErrorPassword = () => {
    if (
      errorMessage === "Missing password" ||
      errorMessage === "Both passwords must be the identical"
    ) {
      return true;
    }
    return false;
  };
  const handleEdit = () => {
    return setSubmitted(false);
  };

  return (
    <>
      {!submitted ? (
        <form
          className={className}
          action=""
          method="post"
          onSubmit={handleSubmit}
        >
          <Field
            className="full-field"
            inputClassName={handleErrorName() ? "field-with-error" : "field"}
            id="name"
            type="text"
            label="Name"
            value={name}
            handler={handleNameChange}
            placeholder="Jean Dupont"
          ></Field>
          <Field
            className="full-field"
            inputClassName={handleErrorEmail() ? "field-with-error" : "field"}
            id="email"
            type="text"
            label="Email"
            value={email}
            handler={handleEmailChange}
            placeholder="jean.dupont@lereacteur.io"
          ></Field>
          <Field
            className="full-field"
            inputClassName={
              handleErrorPassword() ? "field-with-error" : "field"
            }
            id="password"
            type="password"
            label="Password"
            value={password}
            handler={handlePasswordChange}
            placeholder="********"
          ></Field>
          <Field
            className="full-field"
            inputClassName={
              handleErrorPassword() ? "field-with-error" : "field"
            }
            id="repeated-password"
            type="password"
            label="Confirm your password"
            value={repeatedPassword}
            handler={handleRepeatedPasswordChange}
            placeholder="********"
          ></Field>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button className="submit-btn" type="submit">
            Register
          </button>
        </form>
      ) : (
        <div className={className}>
          <Result
            className="result"
            name={name}
            email={email}
            password={password}
            handleEdit={handleEdit}
          ></Result>
        </div>
      )}
    </>
  );
};

export default Form;
