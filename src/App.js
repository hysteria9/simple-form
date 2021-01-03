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
    <body>
      <main>
        <Title
          className="title"
          title={submitted ? "Results" : "Create account"}
        ></Title>
        <Form
          className="main-div"
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          repeatedPassword={repeatedPassword}
          setRepeatedPassword={setRepeatedPassword}
          submitted={submitted}
          setSubmitted={setSubmitted}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleRepeatedPasswordChange={handleRepeatedPasswordChange}
          handleSubmit={handleSubmit}
        ></Form>
        <Footer></Footer>
      </main>
    </body>
  );
}

export default App;
