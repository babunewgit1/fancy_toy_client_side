import React from "react";
import loading from "../../../assets/loading.png";

const Loading = () => {
  return (
    <div className="w-full h-screen">
      <img className="w-full h-full object-cover" src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
