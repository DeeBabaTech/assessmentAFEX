import React from 'react';

const ErrorPage = (props) => {
  return (
    <div>
      <h1>Error {props.message}</h1>
      <p>Sorry, an error occurred. Please try again later.</p>
      <p>...Or check the API server</p>
    </div>
  );
};

export default ErrorPage;