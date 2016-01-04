
var fs = require('fs');
var koa = require('koa');
var path = require('path');
var parse = require('co-body');
var csrf = require('koa-csrf');
var session = require('koa-session');

var app = module.exports = koa();

var form = fs.readFileSync(path.join(__dirname, 'form.html'), 'utf8');

// adds .csrf among other properties to `this`.
csrf(app);

// we need to set the `.keys` for signed cookies and the cookie-session module
app.keys = ['secret1', 'secret2', 'secret3'];

// use koa-session somewhere at the top of the app
app.use(session(app));

// If the user logs in, they should see hello world.
// Otherwise, they should see a 401 error because they aren't logged in.
app.use(function* home(next) {
  if (this.request.path !== '/') return yield next;

  if (!this.session.authenticated) this.throw(401, 'user not authenticated');

  this.response.body = 'hello world';
})

/**
 * If successful, the logged in user should be redirected to `/`.
 */

/// login - if the method is GET, a form should be returned.
// If the method is POST, it should validate the request body and
// attempt to login the user.
app.use(function* login(next) {
  if (this.request.path !== '/login') return yield* next;
  if (this.request.method === 'GET') return this.response.body = form.replace('{{csrf}}', this.csrf);
  if (this.request.method !== 'POST') return yield* next; // nothing else

  // request should be POST
  var body = yield parse(this.request);

  // test for csrf
  try {
    this.assertCSRF(body);
  } catch (err) {
    this.status = 403;
    this.body = { message: 'This CSRF token is invalid!' };
    return;
  }

  if (body.username === 'username' && body.password === 'password') {
    this.session.authenticated = true;
    this.response.status = 303;
    this.response.redirect('/');
  } else {
    this.response.status = 400; // bad request
  }
})

/**
 * Let's 303 redirect to `/login` after every response.
 * If a user hits `/logout` when they're already logged out,
 * let's not consider that an error and rather a "success".
 */

// logout - it should logout the user.
app.use(function* logout(next) {
  if (this.request.path !== '/logout') return yield* next;

  this.session.authenticated = false; // logout
  this.response.status = 303;
  this.response.redirect('/login');
})

/**
 * Serve this page for browser testing if not used by another module.
 */

if (!module.parent) app.listen(process.env.PORT || 3000);
