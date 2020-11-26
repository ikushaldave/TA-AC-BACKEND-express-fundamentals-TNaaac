writeCode

Q. Create a package.json file manually with

- name
- description
- version

Q. Create a package.json with using npm init script with above content

- add express package with exact version of 4.16.4
- upgrade it to the latest version

Q. Create a basic express server with 2 routes

- add package.json
- install express
- setup an express server
- add a listener on port 3000
- handle these routes
  1. GET -> `/` with HTML response saying 'Welcome to express' in H2.
  2. GET -> `/about` with plain text content saying 'My name is qwerty'

Q. Modify above application, add appropriate middleware

- to capture form data from request
- to capture json data from request
- add POST request on `/form` route to capture form data from postman and send entire form data through response in json format
- add POST request on `/json` route to capture JSON data from postman and send entire data in response in plain text format.
- json and form data should include fields
  - name
  - age
  - email

### Note:-

Remember to add middlewares before handling any routes.

Q. Modify above application to include

- logger middleware
- cookieParser middleware
- add a middleware to send cookie to the client.

Q. Modify above application to include

- a router to capture params from the request on a route `/users/:username` using GET request.
- capture the username and respond with username in HTML response.

Q. Modify above to include error handler middleware

- a 404 handler for routes which are not handled
- a 500 handler for client/server error

### Note:-

Remember to add error handler middlewares after handling all the routes in the application
