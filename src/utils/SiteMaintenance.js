import React from "react";
import Header from "../components/TopHeader";
import maintenance from "../assets/images/maintenance.jpg";

const SiteMaintenance = () => {
  return (
    <>
      <Header />
      <div className="banner" style={{height: '600px', margin:'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
        <img src={maintenance} alt="website maintenance" style={{height: '250px'}}/>
        <h1>We&rsquo;ll be back soon!</h1>
        <div>
          <p>
            Sorry for the inconvenience. We&rsquo;re performing some maintenance
            at the moment. <br/> <span style={{position: 'absolute', marginTop: '20px'}}>we&rsquo;ll be back up shortly! &mdash; The Ridge Team</span>
          </p>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default SiteMaintenance;
