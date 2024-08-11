import React from "react";
import RowComponent from "../row/row";
import { LoginLink } from "../../styled-components/table/table";
import { Outlet } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <div className="container">
        <RowComponent>
          <div>Go watch a movie</div>
          <LoginLink href="#!">
            <span>Login</span>
          </LoginLink>
        </RowComponent>

        <hr className="mb-3" />

        <div className="row">
          <div className="col-md-2">
            <nav>
              <div className="list-group">
                <a href="/" className="list-group-item list-group-item-action">
                  Home
                </a>
                <a
                  href="/movies"
                  className="list-group-item list-group-item-action"
                >
                  Movies
                </a>
                <a href="#!" className="list-group-item list-group-item-action">
                  Genres
                </a>
                <a href="#!" className="list-group-item list-group-item-action">
                  Add Movie
                </a>
                <a href="#!" className="list-group-item list-group-item-action">
                  Manage Catlogue
                </a>
                <a href="#!" className="list-group-item list-group-item-action">
                  GraphQL
                </a>
              </div>
            </nav>
          </div>
          <div className="col-md-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
