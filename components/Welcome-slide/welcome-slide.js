import React from "react";

const WelcomeSlide = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval={10000}>
          <img src="img/bg-img/bg-1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>FASHION TRENDS</h5>
            <a
              href="#"
              className="btn karl-btn"
              data-animation="fadeInRightBig"
              data-delay="1s"
              data-duration="500ms"
            >
              Check Collection
            </a>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval={2000}>
          <img src="img/bg-img/bg-2.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>SUMMER COLLECTION</h5>
            <a
              href="#"
              className="btn karl-btn"
              data-animation="fadeInRightBig"
              data-delay="1s"
              data-duration="500ms"
            >
              Check Collection
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img src="img/bg-img/bg-3.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>WOMEN FASHION</h5>
            <a
              href="#"
              className="btn karl-btn"
              data-animation="fadeInRightBig"
              data-delay="1s"
              data-duration="500ms"
            >
              Check Collection
            </a>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default WelcomeSlide;
