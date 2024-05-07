import React from "react";
import {
  footerIcon,
  footerUnitContact,
  footerUnitItem,
  footergallery,
} from "../data/Item";
import Logo from "./assets/dadaboudi.png";

export default function Footer() {
  return (
    <>
      <div
        className="container-fluid footer py-6 my-6 mb-0 bg-light wow bounceInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                {/*<h1 className="text-primary">
                  Cater<span className="text-dark">Serv</span>
  </h1>*/}
                <img
                  src={Logo}
                  alt="dada boudi logo"
                  style={{ height: "100px", width: "100px" }}
                />
                <p className="lh-lg mb-4 font-bold">বিরিয়ানী মানেই দাদাবৌদি</p>
                <div className="footer-icon d-flex">
                  {footerIcon.map((val, index) => (
                    <a
                      key={index}
                      className="btn btn-primary btn-sm-square me-2 rounded-circle"
                      href={[
                        "www.facebook.com/officialdadaboudihotel/",
                        "www.youtube.com/@DadaBoudiHotelOfficial",
                        "www.instagram.com/dadaboudihotelofficial/",
                        "www.linkedin.com/in/dadaboudihotelofficial/?originalSubdomain=in",
                      ].map((e) => e)}
                    >
                      {val.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="mb-4">Special Facilities</h4>
                <div className="d-flex flex-column align-items-start">
                  {footerUnitItem.map((val, index) => (
                    <a className="text-body mb-3" href="" key={index}>
                      {val.icon} {val.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="mb-4">Contact Us</h4>
                <div className="d-flex flex-column align-items-start">
                  {footerUnitContact.map((val, index) => (
                    <p key={index}>
                      {val.icon} {val.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="mb-4">Social Gallery</h4>
                <div className="row g-2">
                  {footergallery.map((img, index) => (
                    <div className="col-4" key={index}>
                      <img
                        src={img.img}
                        className="img-fluid rounded-circle border border-primary p-2"
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
