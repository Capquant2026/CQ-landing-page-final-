# CQ Landing Page UI

This repository contains the source code for the CAP QUANT Landing Page. It is built with Next.js, React, and TypeScript, and its development environment is managed by Docker.

## 🚀 Getting Started

This project is fully containerized. To get the development environment up and running, you only need to have **Docker** and **Docker Compose** installed on your machine.

1.  **Clone the repository:**
    ```bash
    git clone [URL_OF_YOUR_REPOSITORY]
    cd cq-landing-page
    ```

2.  **Start the development server:**
    Run the following command in your terminal. Docker will build the necessary image and start the container.

    ```bash
    docker-compose up
    ```

3.  **Open the application:**
    Once the container is running, open your web browser and navigate to:
    **[http://localhost:3000](http://localhost:3000)**

The application supports hot-reloading, so any changes you make to the source code will be reflected in your browser instantly.

### Available Scripts

Inside the Docker container, the following scripts are available:

*   `npm run dev`: Starts the development server. (This is the default command in `docker-compose.yml`)
*   `npm run build`: Builds the application for production.
*   `npm test`: Runs the test suite using Jest.

To run a command inside the running container, you can use `docker-compose exec`:
```bash
# Example: Running the tests
docker-compose exec landing-page npm test