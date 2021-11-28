# Kiti

Tiki - a Tiki's ripoff ¯\\_(ツ)_/¯

# Stacks

- Frontend: React
- Backend: Spring Boot
- Lots of other plugins

# How to run?

Please start the services following this order:
1. Create a database name `kiti` in Postgres at port 5678. Start the Postgres server.
2. Start backend: import server `folder` into IntelliJ, run the project. Or run from the terminal using `gradle bootRun` (this project uses Gradle to build)
3. Start frontend: go to `client` folder, first install the dependencies with `npm install` or `yarn install`. Then run `yarn start` to start the web UI at port 3456.

Admin can login with info `admin:1`

--------------
@Hoang Nguyen
