import React from "react";
import { useRouteError } from "react-router-dom";

interface RouteErrorProps {
  statusText?: string;
  message?: string;
}

export const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouteErrorProps;

  const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) {
      return error.message;
    } else if (
      typeof error === "object" &&
      error !== null &&
      "message" in error
    ) {
      return (error as RouteErrorProps).message || "unknown error";
    }
    return "unknown error";
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="mt-3">You Seem Lost...</h1>
          <p>Sorry, an unexpected error has occured.</p>
          <p>
            <em>
              {(error as RouteErrorProps).statusText || getErrorMessage(error)}
            </em>
          </p>
        </div>
      </div>
    </div>
  );
};
