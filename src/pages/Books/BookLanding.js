import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";

const BookLanding = () => {
  const { _id } = useParams();

  const { books } = useSelector((state) => state.bookInfo);
  const { user } = useSelector((state) => state.userInfo);

  const { thumbnail, title, author, year, summary } =
    books.find((item) => item._id === _id) || {};
  return (
    <div>
      <Header />
      <section className="main">
        <Container className="mt-5">
          <Row>
            <Col md="5">
              <img src={thumbnail} alt="" width="100%" />
            </Col>
            <Col md="7">
              <h1>{title}</h1>
              <p>
                {author} - {year}
              </p>
              <p>5-star</p>
              <p>{summary}</p>

              {user?._id ? (
                <div className="d-grid">
                  <Button variant="dark"> Burrow Now </Button>
                </div>
              ) : (
                <Link to="/signin" className="nav-link">
                  <div className="d-grid">
                    <Button variant="dark"> Login to burrow </Button>
                  </div>
                </Link>
              )}
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <h3> Reviews</h3>
              <hr />

              <div className="review-list">
                <div className="review pt-4  px-4  gap-3">
                  <div className="left-name"> SP </div>
                  <div className="right-review">
                    <h3> Amazing book loved it </h3>
                    <div>5 star</div>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eveniet dolorum quas quibusdam dolore sunt expedita
                      obcaecati eligendi cupiditate repudiandae, quae, culpa
                      itaque excepturi error cumque molestiae recusandae nam
                      deserunt saepe?
                    </p>
                    <div>- Sagar Pyakurel </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default BookLanding;
