import React from "react";

const About = props => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="bg-light p-5">
            <h1 class="display-6">About</h1>
            <p>
              Thanks for API:
              <mark>
                <a href="https://www.themoviedb.org/">
                  https://www.themoviedb.org/
                </a>
              </mark>{" "}
            </p>
            <p>Zeynep Akyel Çınar</p>
            <blockquote class="blockquote">
              <p>"God Luck"</p>
            </blockquote>
            <img
              style={{ width: "600px", maxWidth: "100%" }}
              src="https://pazarlamasyon.com/wp-content/uploads/2018/05/Deadpool.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
