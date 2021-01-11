import React from "react";
import { Link } from "react-router-dom";

function Error(props) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div>
            <img
              style={{ width: "600px", maxWidth: "100%" }}
              src="https://www.hosting.com.tr/bilgi-bankasi/wp-content/uploads/2019/06/404-error.jpg"
            />
            <div className="text-center">
              <h3>
                <Link to="/" className="">
                  Back to the Home page
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
