import React from "react";

const Bannar = ({ bannar }) => {
  return (
    <section id="bannar">
      <div className="mycontainer">
        <div className="bannarWrapper">
          <h2>{bannar}</h2>
        </div>
      </div>
    </section>
  );
};

export default Bannar;
