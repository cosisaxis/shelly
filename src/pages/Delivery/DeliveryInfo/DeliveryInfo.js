import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import "./DeliveryInfo.css"

const DeliveryInfo = () => {
  return (
    <div className="section delivery-information">
      <div className="container">
        <div className="grid-container">
          <div>
            <div className="delivery-icon">
              <BsFillStarFill color="#c3512f" />
              <h3 className="heading-tertiary">
                <span>7Krave</span>
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique.
            </p>
          </div>
          <div>
            <div className="delivery-icon">
              <BsFillStarFill color="#c3512f" />
              <h3 className="heading-tertiary">
                <span>Additional Information</span>
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
