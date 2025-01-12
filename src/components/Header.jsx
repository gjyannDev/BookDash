export default function Header() {
  return (
    <header className="header__container container">
      <div className="logo__container">
        <a href="#">
          <img
            src="/src/assets/logo.png"
            className="logo__img"
            alt="logo image"
          />
        </a>
      </div>
      <div className="right__content">
        <a
          href=""
          className="login__link"
        >
          Log in
        </a> 
      </div>
    </header>
  );
}
