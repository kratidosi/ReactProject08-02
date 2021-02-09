import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#">
          <img
            src="https://ca-times.brightspotcdn.com/dims4/default/43b9308/2147483647/strip/true/crop/10800x8100+0+0/resize/840x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffe%2Ff1%2Fe50f3c604fd8ba870da1edb18f6c%2Fbird1.jpg"
            alt="logo"
            style={{ width: "60px" }}
          />
        </a>

        <ul className="navbar-nav" style={{ fontSize: "20px" }}>
          <li className="nav-item">
            <a className="nav-link" href="/addemployee">
              AddEmployee
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/viewemployee">
              ViewEmployee
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              &nbsp;&nbsp;&nbsp; AboutUs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              &nbsp;&nbsp;&nbsp; ContactUs
            </a>
          </li>
        </ul>
        <form className="form-inline" style={{ marginLeft: "50%" }}>
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form>
      </nav>
    </>
  );
};

export default Navbar;