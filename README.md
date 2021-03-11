# Node REST API

This project is a REST API server implementation built on top `Node.js` and `Express.js` with `Mongoose.js` for `MongoDB` integration.

## Running project

## Docker

You need to have [Docker](https://www.docker.com/community-edition) installed.

### Run server

```sh
docker-compose up -d
OR
./build.ps1
```
NOTE: Demo dataset will also be created through this process.

## Make Requests

Get your data:

```sh
http GET http://localhost:3000/api/courses

http GET http://localhost:3000/api/courses/<course-id>
```

Create a new course:

```sh
curl -v -H "Content-Type: application/json" -X POST -d "{ \"name\": \"<course-name>\" }" http://localhost:3000/api/courses
```

Update course name:

```sh
curl -v -H "Content-Type: application/json" -X PUT -d "{ \"name\": \"<new-course-name>\" }" http://localhost:3000/api/courses/<course-id>
```

Delete data:

```sh
http DELETE http://localhost:3000/api/courses/<course-id>
```

## Modules used

Some of non-standard modules used:

* [express](https://www.npmjs.com/package/express)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [body-parser](https://www.npmjs.com/package/body-parser)

## Tools used

* [Postman](https://www.getpostman.com/)

## Author

Created and maintained by Mahmudul Hasan Sreejon ([@mahmudul-hasan-sreejon](https://www.mahmudul-hasan-sreejon.com/)).
