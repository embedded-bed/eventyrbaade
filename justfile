set positional-arguments := true
set dotenv-load := true

DOCKER_IMAGE := "eventyrbaade"

[private]
@default:
    just --list

# Build docker image
build:
    docker build . -t {{ DOCKER_IMAGE }}

# Start docker compose deployment, running detached
run:
    docker compose up -d
    docker compose logs -f

# Stop the running containers
stop:
    docker compose down

# Deploy updates to the server with rsync (example: just deploy srv@10.0.5.28)
deploy destination port="22":
    rsync --rsh='ssh -p {{ port }}' --exclude-from=./rsync-exclude.txt -av ./* {{destination}}:~/server
