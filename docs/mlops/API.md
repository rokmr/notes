# API

## What is an API?

**API (Application Programming Interface)** is a communication bridge between two software systems that allows them to exchange data and functionalities.

## REST & RESTful APIs

**REST (REpresentational State Transfer)** is a web architecture style for designing networked applications.

### Characteristics
- Stateless communication
- Client-server model
- Uniform interface (HTTP)
- Cacheable
- Layered system

### RESTful vs REST
- REST is the architectural concept.
- RESTful APIs are web services that adhere to REST principles.

## CRUD Operations

| Operation | HTTP Method | Description                              | Example (AI Services)                        |
|-----------|-------------|------------------------------------------|----------------------------------------------|
| Create    | POST        | Add a new service                        | Add `video-gen` service                      |
| Read      | GET         | Fetch all services                       | Get list of services                         |
| Update    | PUT         | Modify a service                         | Update `en-nep-translate`  `en-hn-translate` |
| Delete    | DELETE      | Remove a service                         | Delete `text-gen`                            |



## HTTP Methods

| Method   | Usage                       |
|----------|-----------------------------|
| `GET`    | Retrieve data               |
| `POST`   | Submit new data             |
| `PUT`    | Replace entire resource     |
| `PATCH`  | Modify partial resource     |
| `DELETE` | Remove resource             |
| `HEAD`   | Like GET but no body        |
| `OPTIONS`| Communication options       |
| `CONNECT`| Establish tunnel            |
| `TRACE`  | Loop-back message test      |

## API Response Status Codes

| Category | Description               |
|----------|---------------------------|
| 1xx      | Informational              |
| 2xx      | Successful                 |
| 3xx      | Redirection                |
| 4xx      | Client error               |
| 5xx      | Server error               |

## HTTP Response Status Codes
- **200 OK**: Request processed successfully.
- **202 Accepted**: Request accepted but not yet processed.
- **204 No Content**: Request processed successfully with no content returned.
- **400 Bad Request**: The request could not be processed due to client error.
- **404 Not Found**: The requested resource could not be found.
- **500 Internal Server Error**: A generic error occurred on the server.
- **503 Service Unavailable**: The server cannot handle the request at the moment.
