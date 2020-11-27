writeCode

Q. Create a scaffold express application from the scratch with necessary middleware and routes

- add package.json
- install express and create an express server listening on port 4000
- add middleware for capturing form/json data
- add middleware for handling static assets
- add third party middleware for logging and handling cookies
- add 2 sample routes with some random response of your choice

  1. GET -> `/` route
  2. GET -> `/users` route

- add middleware for handling errors

Q. Using the above structure, convert a multipage HTML/CSS project into a node application.

- render all pages on seperate routes, for example
  - main page on `/` route
  - projects page on `/projects` routes etc..
- keep all static assets in public directory, for example

  - images in images/media directory
  - css in stylesheets directory

  Directory Structure should be

  - package.json
  - server.js // main server file
  - public // static asset path for images/css
  - index.html
  - projects.html and so on ..
