set positional-arguments := true
set dotenv-load := true

DOCKER_IMAGE := "eventyrbaade"

[private]
@default:
    just --list

build:
    docker build . -t {{ DOCKER_IMAGE }}

run:
    docker compose up -d
    docker compose logs -f

stop:
    docker compose down
