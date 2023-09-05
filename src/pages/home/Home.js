import React, { useEffect, useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { CustomCarousel } from "../../components/carousel/Carousel";
import { useSelector } from "react-redux";
import { CustomCard } from "../../components/custom-card/CustomCard";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [display, setDisplay] = useState([]);

  const { books } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    setDisplay(books);
  }, [books]);

  const handleOnSearch = (e) => {
    const { value } = e.target;

    const filteredBook = books.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setDisplay(filteredBook);
  };

  return (
    <div>
      <Header />
      <section className="main">
        <CustomCarousel />

        <Container className="mt-5">
          <Row>
            <Col>
              <div className="d-flex justify-content-between">
                <div className="left">{books.length} Books Found</div>
                <div className="right">
                  <Form.Control
                    onChange={handleOnSearch}
                    placeholder="Search book by name"
                  />
                </div>
              </div>

              <hr />

              <div className="book-lists d-flex justify-content-between flex-wrap gap-4 mt-5">
                {display.map((item) => (
                  <Link to={`/book/${item._id} `}>
                    <CustomCard key={item._id} {...item} />
                  </Link>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
