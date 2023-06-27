import React from "react";

import Slider from "./Slider";
import ShowPost from "./Firebase-Post/ShowPost";

const Body = () => {
  return (
    <div>
      <Slider />
      {/* <ShowPost /> */}
      <ShowPost />
    </div>
  );
};

export default Body;
