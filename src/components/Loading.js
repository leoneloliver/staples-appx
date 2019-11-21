import React from "react";
import Spinner from '../images/ajax-loader.gif';

const Loading = () => (
  <div className="wrapper-loading d-none" id="loading">
    <div class="text-center mt-5"><img src={Spinner} class="spinner"/></div>
  </div>
);

export default Loading;