import React from "react";
import RowComponent from "../row/row";
import { LoginLink } from "../../styled-components/table/table";
import { Outlet, Link } from "react-router-dom";

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
                <Link to="/" className="list-group-item list-group-item-action">
                  Home
                </Link>
                <Link
                  to="/movies"
                  className="list-group-item list-group-item-action"
                >
                  Movies
                </Link>
                <Link
                  to="#!"
                  className="list-group-item list-group-item-action"
                >
                  Genres
                </Link>
                <Link
                  to="#!"
                  className="list-group-item list-group-item-action"
                >
                  Add Movie
                </Link>
                <Link
                  to="#!"
                  className="list-group-item list-group-item-action"
                >
                  Manage Catlogue
                </Link>
                <Link
                  to="#!"
                  className="list-group-item list-group-item-action"
                >
                  GraphQL
                </Link>
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
