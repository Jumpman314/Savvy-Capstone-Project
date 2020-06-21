export default () => `
  <section id="comments">
  <h1>Comment Section</h1>
    <form action="/action_page.php" id="userform">
      Name: <input type="text" name="username">
    </form>
    <br>
    <textarea rows="4" cols="50" name="comment" form="userform">Comment here...</textarea>
      <input type="submit">
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
