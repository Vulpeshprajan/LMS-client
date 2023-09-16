import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup-signin/Signup";
import Signin from "./pages/signup-signin/Signin";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import BurrowHistory from "./pages/Burrow-history/BurrowHistory.js";
import Books from "./pages/Books/Books";
import Profile from "./pages/Profile/Profile";
import Students from "./pages/Students/Students";
import { NewBookForm } from "./components/book-comp/NewBookForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBookAction } from "./pages/Books/bookAction";
import { EditBookForm } from "./components/book-comp/EditBookForm";
import BookLanding from "./pages/Books/BookLanding";
import { fetchReviewAction } from "./pages/review/reviewAction";
import Reviews from "./pages/review/Reviews";

function App() {
  const dispatch = useDispatch();

  // fetch books

  useEffect(() => {
    dispatch(fetchBookAction());
    dispatch(fetchReviewAction());
  }, [dispatch]);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />

        {/* private routes  */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/book/:_id" element={<BookLanding />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/burrow-history"
          element={
            <PrivateRoute>
              <BurrowHistory />
            </PrivateRoute>
          }
        />
        <Route
          path="/books"
          element={
            <PrivateRoute>
              <Books />
            </PrivateRoute>
          }
        />
        <Route
          path="/book/new"
          element={
            <PrivateRoute>
              <NewBookForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/book/edit/:_id"
          element={
            <PrivateRoute>
              <EditBookForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/reviews"
          element={
            <PrivateRoute>
              <Reviews />
            </PrivateRoute>
          }
        />
        <Route
          path="/students"
          element={
            <PrivateRoute>
              <Students />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route path="/" element={<h1> Sagara</h1>} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
