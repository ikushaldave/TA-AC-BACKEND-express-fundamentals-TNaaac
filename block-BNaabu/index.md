writeCode

Create a basic server using express and handle 2 routes

- GET request on '/'
- GET request on '/about'

- create a error handler middleware which should be able to throw 404 (page not found) error when a request is made on any other route which does not match above 2 routes.

- create a middleware and call next with an error argument when request is made on `/admin` route to check whether it is handle by error handler middleware or not ?

For example:-

```js
// middleware which throws err
app.use((req, res, next) => {
  // if requested url is /admin throw error
  if (req.url === "admin") {
    return next("Unauthorized");
  }
  // other let it pass to next middleware by simply calling next()
  next();
});
```
