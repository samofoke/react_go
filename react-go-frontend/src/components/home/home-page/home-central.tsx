import React from "react";
import RaffleTicket from "../../../assets/iamges/raffle-tickets.jpg";

const HomeCentral: React.FC = () => {
  return (
    <>
      <div className="text-center">
        <h2>Find a movie to watch.</h2>
        <hr />
        <img
          src={RaffleTicket}
          alt="movie ticket"
          className="img-fluid d-block"
          style={{ maxWidth: "200px", margin: "auto" }}
        />
      </div>
    </>
  );
};

export default HomeCentral;
