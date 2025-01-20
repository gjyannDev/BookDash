import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header__container container">
      <div className="logo__container">
        <Link to={'/'}>
          <img
              src="/src/assets/logo.png"
              className="logo__img"
              alt="logo image"
            />
        </Link>
      </div>
      <div className="right__content">
        <Link to="login" className="login__link"> Login </Link>
      </div>
    </header>
  );
}
