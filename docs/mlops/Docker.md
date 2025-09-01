# Docker
- Docker contains many image, many containers
- Platform independent

```bash
docker login -u <username>

docker login -u rokmr
```

Running iteractive linux

```bash
docker run -it ubuntu
```

## Images

- Executable files to build the docker container
- Image is like class and container is like object
- Its a static snapshot
- Basis of docker containers and represents full applications

For the firsttime initlization
```bash
docker build -t <imagename> <location>

# Example
docker build -t fastapi macros/
```

Docker runnning
```bash
docker run <imagename>
```
detach mode
```bash
docker run -d  <imagename>
```

container name & detach mode
```bash
docker run --name <Container_name> -d  <imagename>
```

```bash
docker images -a
```
Some requre
```bash
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag

# example
docker run --name mysql -e MYSQL_ROOT_PASSWORD=sqlpassword -d mysql
```



## Container

- package application with dependencies
- Its a running instance
- Created using images for running applications
List all running container
```bash
docker ps
docker ps -a
```
```bash
docker stop <container_name>
```

```bash
docker rm <container_name>
```

**Properties**

- Protable
- Light Weight



## Docker Engine

## Docker Hub


## Docker Basic Command

```bash
docker 
```

## Network Bridging
container has different compared to system
host system port request is connected to docker container post and this called port binding
```bash
docker run  -p <systemport>:<dockerport> <imagename>

docker run  -p 80:5000 fastapi
```

```bash
docker run --name mysql -e MYSQL_ROOT_PASSWORD=sqlpassword -p8800:3306 -d mysql
```

diffrernt doc should have different host machine port

## Changing tag for pushing it to dockerhub

```bash
docker tag <imagename> <username/imagename:version>

# Example
docker tag fastapi rokmr/fastapi:latest
```
Push
```bash
docker push <username>/<imagename>
docker push rokmr/fastapi
```
Remove
```bash
docker rmi <imagename>
docker rmi -f <imagename>
```

Pull
```bash
docker pull <username>/<imagename>
docker pull rokmr/fastapi
```

## Trouble Shoot Command

```bash
# For logs
docker logs CONT_ID

# Allows additional command on already comand
docker exec -it CONT_ID /bin/bash 
docker exec -it CONT_ID /bin/sh
```

## VM and Docker

Hardware -> Host OS Kernel -> Appliction Layer

**VM**
- Virtualizes Host OS Kernel & Appliction Layer
- VM are compatible with all operating OS

**Docker**

- Virtualizes Appliction Layer -> Light weight -> Faster
- Initially built for the Linux, For macOS/Windows Docker Desktop adds a hyperwizer layer of linux distribution

## Docker Network

Interaction between two port

```bash
docker network ls

docker network create <network-name>

docker network rm <network-name>
```
Driver

- bridge 
- host
- null

## Docker Compose

Docker Compose is tool for defining and running multi container applicaiton.

create `.yaml` file composing all the command

```yaml
services:
    docker1:
        image:
        port:
        environment:

    docker2:
```

```bash
docker compose -f filename.yaml up -d
# oR
docker-container up

docker-container up --app=5
# only create
docker-container create up


docker compose -f filename.yaml down
```

## Image


```
FROM base image
WORKDIR
COPY host to image
RUN runs intrusction (can have multiple run command)
CMD entry point of the Appliction (can have single CMD command)

```


## Docker Volumes

Volumes are persistent data stores for container.

```bash
docker volume ls
docker volume create <vol_name>
docker volume rm <vol_name>
docker run -it -v <data_location_host>:<data_location_container>  <image_name>

# Named Volume
docker run -v <vol_name>:<container_dir>

# Anonymous Volume
docker run -v <mount_path>

# Bind mount
docker run -v <host-dir>:<cont_dir>

docker volume prune (deletes the anonymous volume)
```