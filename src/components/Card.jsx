export default function Card() {
  return (
    <section className="home__post-container">
      <div className="post__container">
        <div className="author__container">
          <img
            src="/src/assets/default_profile.png"
            className="profile__img"
            alt="profile image of the author"
          />
          <div className="author__info">
            <p className="author__name">Mark Ghian Francis</p>
            <p className="date__publish">2025 - 04 - 20</p>
          </div>
        </div>
        <div className="post__img-container">
          <img
            src="/src/assets/sample.png"
            className="post__img"
            alt="image of the post"
          />
        </div>
        <div className="post__information-container">
          <h3 className="post__title">
            Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones, Summary
          </h3>
          <p className="post__description">
            Atomic Habits by James Clear is a comprehensive, practical guide on how to change your habits and get 1% better every day.
          </p>
        </div>
      </div>
    </section>
  );
}
