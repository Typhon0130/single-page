import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./license.css";
import "../index.css";

const License = () => {
  return (
    <div className="license-page">
      <div className="container">
        <div className="column frist-column">
          <div className="row">
            <h1 className="license-title">
              Es wird zeit für den Führerschein.
            </h1>
            <p className="license-paragraph">
              Nisl quisque nunc at cras tristique. Lectus scelerisque sed id
              nisi vitae venenatis.
            </p>
          </div>
          <div className="row">
            <button className="btn-signup">Jetzt Anmelden</button>
          </div>
          <div className="row">
            <button className="btn btn-play">
              <BsFillPlayFill />
            </button>
          </div>
          <div className="row">
            <Link className="link why-link">Warum Driveclass?</Link>
          </div>
        </div>
        <div className="column second-column">
          <div className="card-group">
            <div className="card card-element-1"></div>
            <div className="card card-element-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default License;
