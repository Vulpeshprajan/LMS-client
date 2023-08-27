import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillHome } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { GiEntryDoor } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { persistor } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../pages/signup-signin/userSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);

  const handleOnSignOut = () => {
    // remove from persist
    persistor.purge().then(() => {
      console.log("signed out");
    });

    // remove user from the state
    dispatch(setUser({}));
  };

  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Container>
        <Link className="nav-link text-light" to="/dashboard">
          {" "}
          LMS{" "}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link className="nav-link" to="/">
                  <AiFillHome /> Home
                </Link>

                <Link className="nav-link" to="/dashboard">
                  <MdSpaceDashboard /> Dashboard
                </Link>
                <Link className="nav-link" to="/" onClick={handleOnSignOut}>
                  <GiEntryDoor /> Sign out
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/signin">
                  <GiEntryDoor /> Sign in
                </Link>
                <Link className="nav-link" to="/signup">
                  <ImExit /> Sign up
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
