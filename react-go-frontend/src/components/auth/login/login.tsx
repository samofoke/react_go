import React, { useState } from "react";
import InputField from "../../custom-components/input";
import { useOutletContext } from "react-router-dom";

interface EmailAnPassword {
  email: string;
  password: string;
}

const Login: React.FC<EmailAnPassword> = ({ email, password }) => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const { setJwtToken } = useOutletContext();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log("Sample email and password: ", email, password);

    if (email === "slimy.slice@mail.com") {
      setJwtToken("asdjkfghsjkfgshdfgshjk");
    }
  };

  console.log("email and password: ", email, password);
  return (
    <div className="col-md-6 offset-md-3">
      <h2>The Login page</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <InputField
          title="Email Address"
          type="email"
          className="form-control"
          name="email"
          autoComplete="email-new"
          onChange={(event: any) => setUserEmail(event.target.value)}
        />

        <InputField
          title="Password"
          type="password"
          className="form-control"
          name="password"
          autoComplete="password-new"
          onChange={(event: any) => setUserPassword(event.target.value)}
        />
        <hr />
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
    </div>
  );
};

export default Login;
