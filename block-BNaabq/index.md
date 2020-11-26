writeCode

1. Create a basic express server

- Add cookie-parser middleware and set a cookie when requested on `/about` route by creating a custom middleware.
- add cookie with key as `username` and value as your username.

For example:-

```js
res.cookie("username", "suraj");
```

2. Fetch all cookies from request in next middleware.

3. Add morgan as middleware to get logs for each request.
