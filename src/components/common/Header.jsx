import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navList } from "../data/Item";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../redux/cartSlice";
import Logo from "./assets/dadaboudi.png";
import Login from "../Login";

export default function Header() {
  const dispatch = useDispatch();
  const { totalItems } = useSelector((state) => state.cart);
  console.log(totalItems);
  useEffect(() => {
    dispatch(getCartTotal());
  }, []);

  const [show, setShow] = useState(false);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="container-fluid nav-bar sticky-top">
        <div className="container">
          <nav className="navbar navbar-light navbar-expand-lg py-4">
            <Link to="/" className="navbar-brand">
              {/*<h1 className="text-primary fw-bold mb-0">
                Dada<span className="text-dark">Boudi</span>
  </h1>*/}
              <img
                src={Logo}
                alt="dada boudi logo"
                style={{ height: "100px", width: "100px" }}
              />
            </Link>
            <button
              onClick={() => setShow(!show)}
              className="navbar-toggler py-2 px-3"
              type="button"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div
              className={
                show ? "navbar-collapse show" : "collapse navbar-collapse"
              }
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto">
                {navList.map((nav, index) => (
                  <div key={index}>
                    <Link to={nav.path} className="nav-item nav-link">
                      {nav.text}
                    </Link>
                  </div>
                ))}
              </div>
              {/*<button
                className="btn-primary btn-md-square d-none d-lg-inline-flex"
                style={{ width: "100px", height: "60px" }}
                onClick={() => setShowModal(true)}
              >*/}
              {/*<i className="fas fa-search"></i>*/}
              {/*<h3>Log In</h3>
              </button>
              {showModal && <Login onClose={() => setShowModal(false)} />}
              <Link
                to="/cart"
                className="btn-cart btn btn-primary btn-md-square ms-4 rounded-circle d-none d-lg-inline-flex"
              >
                <i className="fas fa-shopping-cart"></i>
                <span className="btn-sm rounded-circle btn-danger d-none d-lg-inline-flex">
                  {totalItems}
                </span>
            </Link>*/}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
