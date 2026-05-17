export default function Home() {
  return (
    <>
      <div className="layout__banner">
        <div className="layout__banner-grid">
          <div className="center center--1120">
            <div className="home-banner">
              <div className="home-banner__title">Coming soon!</div>
              <div className="home-banner__message">
                <p>
                  <strong>SiteShot</strong> takes screenshots of your website,<br />
                  compares them with previous versions,<br />
                  <strong>and notifies you of any changes.</strong>
                </p>
              </div>

              <div className="home-banner__mockup">
                <div className="home-banner__shadow"></div>
                <div className="banner-mockup">
                  <img src="/images/landing/ss-banner.svg" width="720" height="424" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="layout__container">
        <div id="beta-input" className="layout__section layout__section--grey layout__section--border">
          <div className="center center--1120">
            <div className="signup">
              <h1 className="signup__heading">We're looking for beta testers!</h1>
              <div className="signup__success">
                <div className="beta-success">
                  Email successfully registered, we will be in touch soon.
                </div>
              </div>
              <div className="signup__input">
                <div className="form-brick">
                  <div className="form-brick__label">Join the beta waiting list</div>
                  <div className="form-brick__element">
                    <form className="email-validation" onSubmit={(e) => e.preventDefault()}>
                      <div className="email-validation__input">
                        <input className="input-style" type="email" placeholder="email@address.io" />
                      </div>
                      <div className="email-validation__validation email-validation__validation--show">
                        <p>Invalid email address</p>
                      </div>
                      <div className="email-validation__button">
                        <button className="button button--40 button--purple">Submit</button>
                        <button className="button button--40 button--disabled" type="button">
                          <div className="button__icon">
                            <div className="aperture aperture--24 aperture--white">
                              <div className="aperture__ring"></div>
                              <div className="aperture__icon"></div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="layout__section layout__section--white layout__section--border">
          <div className="center center--960">
            <div className="feature-block feature-block--border">
              <div className="feature-block__heading">Deploy with confidence</div>
              <div className="feature-block__content">SiteShot can compare every page in your website for changes in seconds.</div>
            </div>

            <div className="content-block clearfix">
              <div className="content-block__content">
                <div className="content-section">
                  <div className="content-section__title">How does it work?</div>
                  <div className="content-section__content">
                    <p>SiteShot takes a screenshot of every page you request, compares the result against previous versions, and when changes are found, notifies you.</p>
                  </div>
                </div>
              </div>
              <div className="content-block__content">
                <div className="illustration illustration--how-it-works">
                  <img src="/images/landing/how-it-works.svg" height="240" width="440" alt="" />
                </div>
              </div>
            </div>

            <div className="content-block clearfix">
              <div className="content-block__content">
                <div className="content-section">
                  <div className="content-section__title">Does SiteShot need access to my code?</div>
                  <div className="content-section__content">
                    <p>Nope!</p>
                    <p>Setting up SiteShot takes minutes, simply add the URL's of pages you want to test into our UI, Configure a webhook that will trigger SiteShot to run when you deploy, and you're set.</p>
                  </div>
                </div>
              </div>
              <div className="content-block__content">
                <div className="illustration illustration--no-code">
                  <img src="/images/landing/no-code.png" height="240" width="240" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="layout__section layout__section--grey">
          <div className="center center--960">
            <div className="padding-wrapper">
              <div className="available">
                <div className="available__headline">Are you available for testing?</div>
                <div className="available__button">
                  <a className="button button--40 button--white-stroke" href="#beta-input">Join the beta waiting list!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
