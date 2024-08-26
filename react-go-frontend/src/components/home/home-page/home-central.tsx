import React from "react";
import RaffleTicket from "../../../assets/iamges/raffle-tickets.jpg";
import { Link } from "react-router-dom";

const HomeCentral: React.FC = () => {
  return (
    <>
      <div className="text-center">
        <h2>Find a movie to watch.</h2>
        <hr />
        <Link to="/movies">
          <img
            src={RaffleTicket}
            alt="movie ticket"
            className="img-fluid d-block"
            style={{ maxWidth: "200px", margin: "auto" }}
          />
        </Link>
      </div>
    </>
  );
};

export default HomeCentral;
