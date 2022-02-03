

# DirectoryInspector

https://user-images.githubusercontent.com/18103669/152572942-a87f4352-7e41-4467-9250-b0e504477d71.mp4

A React+Node application to navigate through the list of files.

This project was generated using [Nx](https://nx.dev). Generated document has been moved [here](README.nx.md)

## Prerequisite

- [Node.js](https://nodejs.org)
- [NPM](https://www.npmjs.com)
- [Docker](https://www.docker.com)


## Run it

### Easy steps - use docker
- Get the code with `git clone git@github.com:firehudson/directory-inspector.git`

- Build docker image using `docker build . -t directoryinspector:latest`

- Run docker container `docker run --rm -it  -p 3000:3000/tcp -v HOST_DIR:/CONTAINER_DIR directoryinspector:latest`

- Navigate to http://localhost:3000 to see the React application

- Navigate to http://localhost:3000/graphql to check the graphql documentation

### Not so difficult steps - Without docker

- get the code with `git clone git@github.com:firehudson/directory-inspector.git`

- Install dependencies using `npm install`

- To start client app: `npm start client`. You can access client application on http://localhost:4200/

- To start server app: `npm start server`. Server will be started on http://localhost:3000/graphql
