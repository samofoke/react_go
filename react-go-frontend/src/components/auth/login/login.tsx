import React, { useState } from "react";
import InputField from "../../custom-components/input";

interface EmailAnPassword {
  email: string;
  password: string;
}

const Login: React.FC<EmailAnPassword> = ({ email, password }) => {
  const [userEmail, setUserEmail] = useState<string>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
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
        />
      </form>
    </div>
  );
};

export default Login;
