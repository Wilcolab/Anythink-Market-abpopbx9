# Express Server Project

This is a simple Express server project that listens on port 8001. It is set up to use Nodemon for automatic code reloading during development.

## Project Structure

```
express-server
├── src
│   └── server.js        # Entry point of the application
├── .dockerignore         # Files and directories to ignore in Docker
├── Dockerfile            # Instructions to build the Docker image
├── package.json          # npm configuration file
├── nodemon.json          # Configuration for Nodemon
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Yarn package manager installed (optional, but recommended).

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Wilcolab/Anythink-Market-abpopbx9.git
   cd Anythink-Market-abpopbx9/express-server
   ```

2. Install dependencies:

   Using npm:

   ```
   npm install
   ```

   Or using Yarn:

   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use:

```
yarn start
```

The server will be running on `http://localhost:8001`.

### Docker

To build and run the Docker container, use the following commands:

1. Build the Docker image:

   ```
   docker build -t express-server .
   ```

2. Run the Docker container:

   ```
   docker run -p 8001:8001 express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.