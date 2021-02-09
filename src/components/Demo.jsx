import React from "react";

const Demo = props => {
  return (
    <>
      <div style={{ height: "610px", textAlign:"center", marginTop:"8%" }}>
        <h1
          className="display-4"
          style={{ fontSize: "40px", fontFamily: "cursive" }}
        >
          {props.name}
        </h1>
        <p className="lead">
          <br /> This is a simple hero unit, a simple jumbotron-style component
          for calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    </>
  );
};

export default Demo;
