import React from "react";

const Bannar = ({ bannar }) => {
  return (
    <section id="bannar">
      <div className="mycontainer">
        <div className="bannarWrapper text-center">
          <h2 className="text-white font-bold text-5xl">{bannar}</h2>
        </div>
      </div>
    </section>
  );
};

export default Bannar;
