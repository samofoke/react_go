import React, { useState } from "react";


interface EmailAnPassword {
  email: string;
  password: string;
}

const Login: React.FC<EmailAnPassword> = ({email, password}) => {
  const [userEmail, setUserEmail] = useState<string>("")

  console.log("email and password: ", email, password)
  return <h2>The Login page</h2>;
};

export default Login;
