import styled from 'styled-components'

// styles
const Form = styled.form`
  background-color: rgb(249, 250, 251);
  border-radius: 4px;
`

const FormkitBackground = styled.div`
  opacity: 0.2;
`

const FormkitHeader = styled.div`
  color: rgb(77, 77, 77);
  font-size: 27px;
  font-weight: 700;
`

const FormkitSubheader = styled.div`
  color: rgb(104, 104, 104);
  font-size: 18px;
`

const FormkitInput = styled.input`
  color: rgb(0, 0, 0);
  border-color: rgb(227, 227, 227);
  border-radius: 4px;
  font-weight: 400;
`

const Button = styled.button`
  color: rgb(255, 255, 255);
  background-color: rgb(219, 161, 17);
  border-radius: 4px;
  font-weight: 400;
`

const FormkitGuarantee = styled.div`
  color: rgb(77, 77, 77);
  font-size: 13px;
  font-weight: 400;
`

const Newsletter = () => (
  <>
    <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
    <Form
      action="https://app.convertkit.com/forms/1912002/subscriptions"
      className="seva-form formkit-form"
      method="post"
      data-sv-form="1912002"
      data-uid="add856650c"
      data-format="inline"
      data-version="5"
      data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Thank you for subscribing! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:true},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;hide&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}"
      min-width="400 500 600 700 800"
    >
      <FormkitBackground className="formkit-background" />
      <div data-style="minimal">
        <FormkitHeader
          className="formkit-header"
          data-element="header"
        >
          <h1>Want to keep up to date on our journey?</h1>
        </FormkitHeader>
        <FormkitSubheader
          className="formkit-subheader"
          data-element="subheader"
        >
          <p>Subscribe to Monday Dispatches to recieve weekly progress updates and be the first to know when we launch!</p>
        </FormkitSubheader>
        <ul
          className="formkit-alert formkit-alert-error"
          data-element="errors" data-group="alert"
        >
        </ul>
        <div
          data-element="fields"
          data-stacked="true"
          className="seva-fields formkit-fields"
        >
          <div className="formkit-field">
            <FormkitInput
              className="formkit-input"
              aria-label="First Name"
              name="fields[first_name]"
              placeholder="First Name"
              type="text"
            />
          </div>
          <div className="formkit-field">
            <FormkitInput
              className="formkit-input"
              name="email_address"
              aria-label="Email Address"
              placeholder="Email Address"
              required=""
              type="email"
            />

          </div>
          <Button
            data-element="submit"
            className="formkit-submit formkit-submit"
          >
            <div className="formkit-spinner"><div></div><div></div><div></div></div>
            <span className="">Subscribe for Weekly Updates</span>
          </Button>
        </div>
        <FormkitGuarantee
          className="formkit-guarantee"
          data-element="guarantee"
        >
          <p>We hate spam as much as you do, so we never send it. Unsubscribe at any time.</p>
        </FormkitGuarantee>
      </div>

    </Form>
  </>
)

export default Newsletter
