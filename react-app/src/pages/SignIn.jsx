import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className="layout-auth__container">

      <div className="center center--480">
        <div className="auth">

          <div className="auth__header">
            Sign in to your Account
          </div>

          <div className="auth__form">

            <div className="form-brick form-brick--margin">
              <div className="form-brick__label">
                Email
              </div>
              <div className="form-brick__input">
                <input className="input-style" type="text" placeholder="email@address.io" />
              </div>
              <div className="form-brick__validation">This is validation.</div>
            </div>
            <div className="form-brick form-brick--margin">
              <div className="form-brick__label">
                Password
              </div>
              <div className="form-brick__input js-password">
                <input className="input-style input-style--password js-password-input" type="password" placeholder="Password" />

                <div className="form-brick__password-button js-password-button">
                  SHOW
                </div>

              </div>
              <div className="form-brick__validation">This is validation.</div>
            </div>

            <div className="pattern-signin">
              <div className="pattern-signin__checkbox">
                <label className="checkbox">
                  <input className="checkbox__input" type="checkbox" />
                  <div className="checkbox__icon"></div>
                  <div className="checkbox__label">Remember me?</div>
                </label>
              </div>
              <div className="pattern-signin__button">
                <Link className="button button--40 button--pink" to="/dashboard">Sign in</Link>
              </div>
            </div>

          </div>

          <div className="auth__forgot">
            <div className="auth-forgot js-forgot-container">
              <div className="auth-forgot__button js-forgot-trigger">Forgot password?</div>
              <div className="auth-forgot__container">

                <div className="forgot-form">
                  <div className="forgot-form__header">
                    Forgot password?
                  </div>
                  <div className="forgot-form__close">
                    <button className="forgot-button js-forgot-trigger">
                      <div className="forgot-button__icon">
                        <span className="flat-icon icon--16 icon--cross"></span>
                      </div>
                    </button>
                  </div>
                  <div className="forgot-form__content">
                    <div className="form-brick form-brick--margin">
                      <div className="form-brick__label">
                        Email
                      </div>
                      <div className="form-brick__input">
                        <input className="input-style" type="text" placeholder="email@address.io" />
                      </div>
                      <div className="form-brick__validation">Invalid email address.</div>
                    </div>

                    <div className="form-brick">
                      <button className="button button--40 button--green">
                        Reset password
                      </button>
                      <button className="button button--40 button--disabled">
                        <div className="button__icon">
                          <div className="aperture aperture--24 aperture--white">
                            <div className="aperture__ring"></div>
                            <div className="aperture__icon"></div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="forgot-form__content">

                    <div className="forgot-sent">
                      <div className="forgot-sent__icon">
                        <span className="sent-image"></span>
                      </div>
                      <div className="forgot-sent__message">Great! Please check your email for reset instructions.</div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="context-switch">
          Don&apos;t have an account? <Link to="/sign-up">Sign up here.</Link>
        </div>

      </div>
    </div>
  );
}
