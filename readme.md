##Working with Docker

###Build in Docker
```sh
$ docker build -t gymi/api-server .
```

###Run in Docker
```sh
$ docker run -p 5001:80 -d gymi/api-server
```