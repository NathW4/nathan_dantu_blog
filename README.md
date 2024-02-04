# Nathan Dantu's Blog

Welcome to Nathan Dantu's blog project. This project is built with [Node.js](https://nodejs.org/) and uses [Knex.js](http://knexjs.org/) as the ORM to interact with a PostgreSQL database.

## Prerequisites

- Node.js installed on your machine
- PostgreSQL and PGAdmin installed (or any other PostgreSQL management interface)
- Space on your database for the project (named "blog" in this example)

## Installation

1. **Clone the project:**

    ```bash
    git clone https://github.com/NathW4/nathan_dantu_blog.git
    cd nathan_dantu_blog

   
2. **Install dependencies:**

    ```bash
    npm install

3.  **Create a database:**

    Open PGAdmin and create a database named "blog".

4.  **Create a .env.local file:**

    Create a file named .env.local at the root of the project.

    Add the necessary environment variables. Example:

    DB__CONNECTION = postgres://postgres:password@localhost:port/blog
    LOGGER__PATHS__DEBUG = ./logs/debug.log
    LOGGER__PATHS__INFO = ./logs/info.log
    LOGGER__PATHS__ERROR = ./logs/error.log
    SECURITY__JWT__SECRET = my%Secret%Key%For%JWT%Token%1234567890%

    Replace "password" and "port" with your PostgreSQL login information.

5.  **Run migrations:**

    ```bash
    npx knex migrate:latest
    npx knex seed:run

6.  **Start the application in development mode:**

    ```bash
    npm run dev

  The application should be accessible at http://localhost:3000 by default.

7.  **Notes:**

Make sure to configure your database correctly in the .env.local file before starting the application. You can further customize the .env.local file based on your needs.
