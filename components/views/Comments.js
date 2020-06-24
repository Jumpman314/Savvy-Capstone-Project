export default () => `
  <section id="comments">
  <h1>Share Your Story</h1>
  <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="www.google.com/jumpman.fam314@gmail.com" method="post">
  <fieldset id="fs-frm-inputs">
    <label for="full-name">Full Name</label>
    <input type="text" name="name" id="full-name" placeholder="First and Last" required="">
    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="">
    <label for="message">Message</label>
    <textarea rows="5" name="message" id="message" placeholder="Comment Here." required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
  </fieldset>
  <input type="submit" value="Submit">
</form>
  </section>
`;

// <div>
// <label for="username">Username:</label>
// <input type="text" name="username" id="username" placeholder="Enter Your Username">
// </div>
// <div>
// <label for="password">Password:</label>
// <input type="password" name="password" id="password">
// </div>
// <div>
// <label for="email">Email:</label>
// <input type="email" name="email" id="email" placeholder="your@email.here">
// </div>
// <input type="submit" name="register" value="Register"></input>
