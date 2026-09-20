# Docker 备忘录

Docker 是一个开源的容器化平台，用于打包、分发和运行应用。下面整理了 Docker 与 Docker Compose 最常用的命令速查表。

## 镜像（Image）

从镜像仓库拉取镜像

```shell
docker pull [镜像名]:[标签]
```

查看本地所有镜像

```shell
docker images
```

构建镜像（使用当前目录下 Dockerfile）

```shell
docker build -t [镜像名]:[标签] .
```

给镜像打标签

```shell
docker tag [原镜像] [新镜像名]:[标签]
```

删除本地镜像

```shell
docker rmi [镜像名]:[标签]
```

将镜像导出为 tar 文件

```shell
docker save -o [文件名].tar [镜像名]
```

从 tar 文件导入镜像

```shell
docker load -i [文件名].tar
```

## 容器（Container）

运行一个新容器

```shell
docker run [镜像名]
```

以后台（detached）模式运行容器

```shell
docker run -d [镜像名]
```

映射端口（主机端口:容器端口）

```shell
docker run -p [主机端口]:[容器端口] [镜像名]
```

挂载数据卷（主机目录:容器目录）

```shell
docker run -v [主机目录]:[容器目录] [镜像名]
```

给容器命名

```shell
docker run --name [容器名] [镜像名]
```

容器退出后自动删除

```shell
docker run --rm [镜像名]
```

以交互模式进入容器终端

```shell
docker run -it [镜像名] /bin/bash
```

查看正在运行的容器

```shell
docker ps
```

查看所有容器（含已停止）

```shell
docker ps -a
```

启动 / 停止 / 重启容器

```shell
docker start [容器名|容器ID]
docker stop [容器名|容器ID]
docker restart [容器名|容器ID]
```

删除已停止的容器

```shell
docker rm [容器名|容器ID]
```

强制删除运行中的容器

```shell
docker rm -f [容器名|容器ID]
```

查看容器的日志输出

```shell
docker logs [容器名|容器ID]
```

持续跟踪日志

```shell
docker logs -f [容器名|容器ID]
```

在运行中的容器内执行命令

```shell
docker exec -it [容器名|容器ID] /bin/bash
```

查看容器的资源占用情况

```shell
docker stats
```

查看容器的详细信息

```shell
docker inspect [容器名|容器ID]
```

将容器导出为 tar 文件

```shell
docker export -o [文件名].tar [容器名|容器ID]
```

## 数据卷（Volume）

查看所有数据卷

```shell
docker volume ls
```

创建命名数据卷

```shell
docker volume create [卷名]
```

删除数据卷

```shell
docker volume rm [卷名]
```

## 清理

删除所有已停止的容器

```shell
docker container prune
```

删除所有未被使用的镜像

```shell
docker image prune -a
```

一键清理所有未使用的容器、网络、镜像和构建缓存

```shell
docker system prune -a
```

查看磁盘占用

```shell
docker system df
```

## Docker Compose

Compose 用于通过 `docker-compose.yml`（或 `compose.yaml`）文件定义和运行多容器应用。

启动所有服务（后台运行）

```shell
docker compose up -d
```

根据 compose 文件构建镜像并启动

```shell
docker compose up -d --build
```

启动指定服务

```shell
docker compose up -d [服务名]
```

查看正在运行的服务

```shell
docker compose ps
```

查看服务日志

```shell
docker compose logs
```

跟踪指定服务的日志

```shell
docker compose logs -f [服务名]
```

停止并删除容器、网络（保留数据卷）

```shell
docker compose down
```

停止并删除容器、网络、数据卷和镜像

```shell
docker compose down -v --rmi all
```

构建（或重新构建）服务镜像

```shell
docker compose build
```

在指定服务中执行一次性命令

```shell
docker compose run [服务名] [命令]
```

进入指定服务的容器

```shell
docker compose exec [服务名] /bin/bash
```

在不启动依赖的情况下启动单个服务

```shell
docker compose up -d --no-deps [服务名]
```

校验 compose 文件语法

```shell
docker compose config
```

## 典型 compose 示例

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

> 提示：较新版本的 Docker 使用 `docker compose`（不带短横线）作为官方插件命令；旧版本使用 `docker-compose`。两者命令参数基本一致。
