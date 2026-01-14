# Express Server Project

This is a simple Express server project that listens on port 8001. The server is set up to use Nodemon for automatic code reloading during development.

## Project Structure

```
express-server
├── src
│   └── index.js          # Entry point of the application
├── .gitignore            # Specifies files to be ignored by Git
├── Dockerfile            # Instructions to build a Docker image for the server
├── package.json          # Configuration file for npm
├── yarn.lock             # Locks the versions of the dependencies
└── README.md             # Documentation for the project
```

## Getting Started

### Prerequisites

- Node.js and Yarn should be installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-abpopbx9.git
   cd Anythink-Market-abpopbx9/express-server
   ```

2. Install the dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use the following command:

```
yarn start
```

The server will listen on port 8001.

### Docker

To build and run the server using Docker, use the following commands:

1. Build the Docker image:
   ```
   docker build -t express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 express-server
   ```

The server will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License.