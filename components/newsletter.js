const Newsletter = () => (
  <>
    <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
    <form
      action="https://app.convertkit.com/forms/1912002/subscriptions"
      // style="background-color: rgb(249, 250, 251); border-radius: 4px;"
      className="seva-form formkit-form"
      method="post"
      data-sv-form="1912002"
      data-uid="add856650c"
      data-format="inline"
      data-version="5"
      data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Thank you for subscribing! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;hide&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800"
    >
      <div
        // style="opacity: 0.2;"
        className="formkit-background"></div>
      <div data-style="minimal">
        <div
          className="formkit-header"
          // style="color: rgb(77, 77, 77); font-size: 27px; font-weight: 700;"
          data-element="header"
        >
          <h1>Want to keep up to date on our journey?</h1>
        </div>
        <div
          className="formkit-subheader"
          // style="color: rgb(104, 104, 104); font-size: 18px;"
          data-element="subheader"
        >
          <p>Subscribe to Monday Dispatches to recieve weekly progress updates and be the first to know when we launch!</p>
        </div>
        <ul
          className="formkit-alert formkit-alert-error"
          data-element="errors" data-group="alert"
        >
        </ul>
        <div
          data-element="fields"
          data-stacked="true"
          className="seva-fields formkit-fields">
          <div className="formkit-field">
            <input
              className="formkit-input"
              aria-label="First Name"
              // style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;"
              name="fields[first_name]"
              placeholder="First Name"
              type="text"
            />
          </div>
          <div className="formkit-field">
            <input className="formkit-input" name="email_address"
              // style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;"
              aria-label="Email Address" placeholder="Email Address" required="" type="email" />

          </div>
          <button
            data-element="submit"
            className="formkit-submit formkit-submit"
          // style="color: rgb(255, 255, 255); background-color: rgb(219, 161, 17); border-radius: 4px; font-weight: 400;"
          >
            <div className="formkit-spinner"><div></div><div></div><div></div></div>
            <span className="">Subscribe for Weekly Updates</span></button>
        </div>
        <div
          className="formkit-guarantee"
          // style="color: rgb(77, 77, 77); font-size: 13px; font-weight: 400;"
          data-element="guarantee"
        >
          <p>We hate spam as much as you do, so we never send it. Unsubscribe at any time.</p>
        </div>
        <div className="formkit-powered-by-convertkit-container">
          <a
            href="https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"
            data-element="powered-by"
            className="formkit-powered-by-convertkit"
            data-variant="dark"
            target="_blank"
            rel="noopener noreferrer">
            Built with ConvertKit
            </a>
        </div>
      </div>

    </form>
  </>
)

export default Newsletter
