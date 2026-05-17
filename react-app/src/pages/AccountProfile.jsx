export default function AccountProfile() {
  return (
    <div className="layout-app__container">
      <div className="center center--960">
        <div className="module module--white">

          <header className="module__header">
            <h2 className="heading-style">Profile Settings</h2>
          </header>

          <div className="module__body">
            <div className="typography">
              <ul>
                <li>Avatar</li>
                <li>Name</li>
                <li>Email</li>
                <li>Password</li>
                <li>Password new</li>
                <li>Password new (repeat)</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
