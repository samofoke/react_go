import React from "react";
import RowComponent from "../row/row";
import ColumnComponent from "../column/column";
import { LoginLink } from "../../styled-components/table/table";

const Home: React.FC = () => {
  return (
    <>
      <RowComponent>
        <div>I am home now</div>
        <LoginLink href="#!">
          <span>Login</span>
        </LoginLink>
      </RowComponent>
      <ColumnComponent>
        <h4>Start column</h4>
      </ColumnComponent>
    </>
  );
};

export default Home;
