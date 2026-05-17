import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="layout-auth__container">

      <div className="center center--480">
        <div className="auth">

          <div className="auth__header">
            We&apos;re looking for Beta testers.
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

            <div className="pattern-signup">
              <Link className="button button--40 button--pink" to="/dashboard">Join waiting list</Link>
            </div>

          </div>
        </div>

        <div className="context-switch">
          Already have an account? <Link to="/sign-in">Sign in here.</Link>
        </div>

      </div>
    </div>
  );
}
