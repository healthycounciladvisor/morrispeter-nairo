import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7033622368117!2d103.9452518!3d1.3545669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d11e445a181%3A0x5a0d2809fdcd244d!2sTampines%20Central%201%2C%20Singapore!5e0!3m2!1sen!2sru!4v1704359964514!5m2!1sen!2sru"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
