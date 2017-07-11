# Running locally using Docker

## Startup server + db

`docker-compose up --build`

## Seed db

Remember to include the db url (including username/password) as `DATABASE`
environment variable when running seed command so you can connect to it outside
the app.

First, log into the running Docker container with an interactive terminal using
`sh`:

`docker exec -it robmclartywebsite_api_1 sh`

Second, run the sequelize migrate command:

`node_modules/.bin/sequelize db:migrate`

Third, run the sequelize seed command (you should be in the `/opt/app` dir by
default). the env var `DATABASE` should already be defined in the container
with the correct credentials:

`node_modules/.bin/sequelize db:seed:all`

https://docs.docker.com/engine/userguide/networking/default_network/dockerlinks/#communication-across-links
