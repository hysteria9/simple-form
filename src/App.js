import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleRepeatedPasswordChange = (event) => {
    setRepeatedPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      return setErrorMessage("Missing name");
    }
    if (!email) {
      return setErrorMessage("Missing email");
    }
    if (!password || !repeatedPassword) {
      return setErrorMessage("Missing password");
    }
    if (password !== repeatedPassword) {
      return setErrorMessage("Both passwords must be the identical");
    }

    setErrorMessage("");
    setSubmitted(true);
  };

  return (
    <div className="container">
      <main>
        <Title
          className="title"
          title={submitted ? "Results" : "Create account"}
        ></Title>
        <Form
          className="main-div"
          name={name}
          email={email}
          password={password}
          repeatedPassword={repeatedPassword}
          submitted={submitted}
          setSubmitted={setSubmitted}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          passwordVisibility={passwordVisibility}
          setPasswordVisibility={setPasswordVisibility}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleRepeatedPasswordChange={handleRepeatedPasswordChange}
          handleSubmit={handleSubmit}
        ></Form>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
