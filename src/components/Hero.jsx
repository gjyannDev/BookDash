function Hero() {
  return (
    <section className="hero__section container">
      <div className="sub__container">
        <div className="left__content">
          <h3 className="hero__description">
            Step into a world where every story matters. Whether you're chasing
            knowledge, inspiration, or pure escapism, we bring you the best of
            books and their insights, all in one place.
          </h3>
          <button
            type="button"
            className="action__button primary__btn"
          >
            <a href="">Get Started</a>
          </button>
        </div>
        <div className="right__content">
          <img
            src="/src/assets/hero_illustration.svg"
            className="illustration__img"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
