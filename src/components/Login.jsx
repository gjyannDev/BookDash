import Header from "./Header";
import {Link} from "react-router-dom"

export default function Login() {
  return (
    <section className="login__section">
      <Header />
      <div className="login__container">
        <div className="login__card">
          <div className="card__upper">
            <h2 className="header__text">Sign in</h2>
            <p className="signin__description">
              Hey enter your details to sign in to your account.
            </p>
          </div>
          <div className="card__forms">
            <form action="">
              <div className="email__input input__group">
                <label className="email__label label__text">Email </label>
                <input
                  type="email"
                  className="input"
                  placeholder="Enter your email"
                />
              </div>
              <div className="password__input input__group">
                <label className="password__label label__text">Password </label>
                <input
                  type="password"
                  className="input"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="signin__btn"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
        <div className="hint__signup">
         <p className="hint__text">
          Don't have an account? <span><Link to='signup'>Sign up</Link></span>
         </p>
        </div>
      </div>
    </section>
  );
}
