<!-- layout__container -->
<div class="layout-auth__container">

  <div class="center center--480">
    <div class="auth">

      <div class="auth__header">
        Sign in to your Account
      </div>

      <div class="auth__form">

        <div class="form-brick form-brick--margin">
          <div class="form-brick__label">
            Email
          </div>
          <div class="form-brick__input">
            <input class="input-style" type="text" placeholder="email@address.io">
          </div>
          <div class="form-brick__validation">This is validation.</div>
        </div>
        <div class="form-brick form-brick--margin">
          <div class="form-brick__label">
            Password
          </div>
          <div class="form-brick__input js-password">
            <input class="input-style input-style--password js-password-input" type="password" placeholder="Password">

            <div class="form-brick__password-button js-password-button">
              SHOW
            </div>

          </div>
          <div class="form-brick__validation">This is validation.</div>
        </div>

        <div class="pattern-signin">
          <div class="pattern-signin__checkbox">
            <label class="checkbox">
              <input class="checkbox__input" type="checkbox">
              <div class="checkbox__icon"></div>
              <div class="checkbox__label">Remember me?</div>
            </label>
          </div>
          <div class="pattern-signin__button">
            <a class="button button--40 button--pink" href="index.php?pageID=app&page=dashboard">Sign in</a>
          </div>
        </div>

      </div>

      <div class="auth__forgot">
        <div class="auth-forgot js-forgot-container">
          <div class="auth-forgot__button js-forgot-trigger">Forgot password?</div>
          <div class="auth-forgot__container">

            <!-- forgot form -->
            <div class="forgot-form">
              <div class="forgot-form__header">
                Forgot password?
              </div>
              <div class="forgot-form__close">
                <button class="forgot-button js-forgot-trigger">
                  <div class="forgot-button__icon">
                    <span class="flat-icon icon--16 icon--cross"></span>
                  </div>
                </button>
              </div>
              <div class="forgot-form__content">
                <div class="form-brick form-brick--margin">
                  <div class="form-brick__label">
                    Email
                  </div>
                  <div class="form-brick__input">
                    <input class="input-style" type="text" placeholder="email@address.io">
                  </div>
                  <div class="form-brick__validation">Invalid email address.</div>
                </div>

                <div class="form-brick">
                  <button class="button button--40 button--green">
                    Reset password
                  </button>
                  <button class="button button--40 button--disabled">
                    <div class="button__icon">
                      <div class="aperture aperture--24 aperture--white">
                        <div class="aperture__ring"></div>
                        <div class="aperture__icon"></div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>


              <div class="forgot-form__content">

                <div class="forgot-sent">
                  <div class="forgot-sent__icon">
                    <span class="sent-image"></span>
                  </div>
                  <div class="forgot-sent__message">Great! Please check your email for reset instructions.</div>
                </div>

              </div>



            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="context-switch">
      Don't have an account? <a href="index.php?pageID=app&page=sign-up">Sign up here.</a>
    </div>

  </div>
</div>