# Docker Cheat Sheet

Docker is an open-source containerization platform for packaging, distributing, and running applications. Below is a quick reference of the most common Docker and Docker Compose commands.

## Image

Pull an image from a registry

```shell
docker pull [image]:[tag]
```

List all local images

```shell
docker images
```

Build an image (using the Dockerfile in the current directory)

```shell
docker build -t [image]:[tag] .
```

Tag an image

```shell
docker tag [source-image] [new-image]:[tag]
```

Remove a local image

```shell
docker rmi [image]:[tag]
```

Export an image to a tar file

```shell
docker save -o [file].tar [image]
```

Import an image from a tar file

```shell
docker load -i [file].tar
```

## Container

Run a new container

```shell
docker run [image]
```

Run a container in detached (background) mode

```shell
docker run -d [image]
```

Map ports (host-port:container-port)

```shell
docker run -p [host-port]:[container-port] [image]
```

Mount a volume (host-dir:container-dir)

```shell
docker run -v [host-dir]:[container-dir] [image]
```

Name a container

```shell
docker run --name [container-name] [image]
```

Auto-remove the container after it exits

```shell
docker run --rm [image]
```

Open an interactive terminal inside a container

```shell
docker run -it [image] /bin/bash
```

List running containers

```shell
docker ps
```

List all containers (including stopped)

```shell
docker ps -a
```

Start / stop / restart a container

```shell
docker start [name|id]
docker stop [name|id]
docker restart [name|id]
```

Remove a stopped container

```shell
docker rm [name|id]
```

Force-remove a running container

```shell
docker rm -f [name|id]
```

Show a container's logs

```shell
docker logs [name|id]
```

Follow logs continuously

```shell
docker logs -f [name|id]
```

Execute a command in a running container

```shell
docker exec -it [name|id] /bin/bash
```

Show live resource usage of containers

```shell
docker stats
```

Show detailed information about a container

```shell
docker inspect [name|id]
```

Export a container to a tar file

```shell
docker export -o [file].tar [name|id]
```

## Volume

List all volumes

```shell
docker volume ls
```

Create a named volume

```shell
docker volume create [volume-name]
```

Remove a volume

```shell
docker volume rm [volume-name]
```

## Cleanup

Remove all stopped containers

```shell
docker container prune
```

Remove all unused images

```shell
docker image prune -a
```

Remove all unused containers, networks, images and build cache

```shell
docker system prune -a
```

Show disk usage

```shell
docker system df
```

## Docker Compose

Compose uses a `docker-compose.yml` (or `compose.yaml`) file to define and run multi-container applications.

Start all services (in background)

```shell
docker compose up -d
```

Build images from the compose file and start

```shell
docker compose up -d --build
```

Start a specific service

```shell
docker compose up -d [service]
```

List running services

```shell
docker compose ps
```

Show service logs

```shell
docker compose logs
```

Follow logs of a specific service

```shell
docker compose logs -f [service]
```

Stop and remove containers and networks (keeps volumes)

```shell
docker compose down
```

Stop and remove containers, networks, volumes and images

```shell
docker compose down -v --rmi all
```

Build (or rebuild) service images

```shell
docker compose build
```

Run a one-off command in a service

```shell
docker compose run [service] [command]
```

Open a shell inside a service's container

```shell
docker compose exec [service] /bin/bash
```

Start a single service without its dependencies

```shell
docker compose up -d --no-deps [service]
```

Validate the compose file syntax

```shell
docker compose config
```

## Sample compose file

```yaml
services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
    depends_on:
      - db
  db:
    image: postgres:16
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: appdb
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:
```

> Tip: Newer Docker versions use `docker compose` (no hyphen) as the official plugin command; older versions use `docker-compose`. The command-line arguments are essentially the same.
