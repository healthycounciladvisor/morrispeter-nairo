import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/place/49%C2%B000'16.6%22N+8%C2%B023'50.0%22E/@49.0047798,8.3970165,21z/data=!4m13!1m8!3m7!1s0x47970648a2e07809:0xb6fc55734cb7ee7f!2sKarlsruhe,+Germany!3b1!8m2!3d49.0068901!4d8.4036527!16zL20vMHFiMXo!3m3!8m2!3d49.004601!4d8.397232"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
