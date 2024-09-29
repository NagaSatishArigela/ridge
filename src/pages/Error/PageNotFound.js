import React, { useEffect } from "react";
import "../../App.css";

const PageNotFound = ({setPageState}) => {
    useEffect(() => {
        setPageState(true);
    }, [])
  return (
    <div className="page-not-found">
      <div className="wrapper">
        <div className="number">4</div>
        <div className="ghost">
          <div className="face"></div>
        </div>
        <div className="number">4</div>
      </div>
      <h1>Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
