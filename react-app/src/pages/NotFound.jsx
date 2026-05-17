import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="layout-auth__container">

      <div className="center center--480">
        <div className="auth">

          <div className="auth__header">
            404 page not found
          </div>

          <Link className="button button--40 button--pink" to="/sign-in">Return to sign in</Link>

        </div>

      </div>
    </div>
  );
}
