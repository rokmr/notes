
# FastAPI 
![FastAPI Logo](https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png)

- High-performance Python web framework
- Based on standard type hints
- Automatic interactive API docs
- Uses `uvicorn` as ASGI server
- Data validation with `pydantic`

### Sample In-Memory Data

```python
services = [
    {"id": 1, "name": "image-gen", "description": "Generates images from prompts"},
    {"id": 2, "name": "text-gen", "description": "Generates text from input"},
    {"id": 3, "name": "en-nep-translate", "description": "Translates English to Nepali"},
]
```

## Example

```python
from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}") # Inline Parameter
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
```

## GET

`GET /services`

Returns all AI services.

```python
@app.get("/services")
def get_services():
    return services
```
**Example Call:**

```
GET http://127.0.0.1:8000/services
```

```json
[
    {
        "id": 1,
        "name": "image-gen",
        "description": "Generates images from prompts"
    },
    {
        "id": 2,
        "name": "text-gen",
        "description": "Generates text from input"
    },
    {
        "id": 3,
        "name": "en-nep-translate",
        "description": "Translates English to Nepali"
    }
]
```

`GET /service_info/{id}?verbose=true`

Query by ID with optional query param:

```python
@app.get("/service_info/{service_id}") # service_id is non-optional but verbose is optional
def get_service_info(service_id: int, verbose: Union[bool, None] = False):
    for service in services:
        if service["id"] == service_id:
            if verbose:
                return {"id": service_id, "info": service}
            return {"name": service["name"]}
    return {"error": "Service not found"}
```

```
GET http://127.0.0.1:8001/service_info/1
```

```json
{"name": "image-gen"}
```

```
GET http://127.0.0.1:8001/service_info/1?verbose=True
```

```json
{
    "id": 1,
    "info": {
        "id": 1,
        "name": "image-gen",
        "description": "Generates images from prompts"
    }
}
```

We pass `inline `parameters

## POST

`POST /services`

Adds a new AI service.

```python
@app.post("/add_services")
async def add_service(request: Request): # resquest is data payload here which is passed seperately.
    data = await request.json()
    new_id = max(s["id"] for s in services) + 1
    new_service = {"id": new_id, "name": data["name"], "description": data["description"]}
    services.append(new_service)
    return {"message": "Service added", "service": new_service}
```
**Request URL:**

```
POST http://127.0.0.1:8000/add_services
```

**Body (JSON):**

```json
{
  "name": "video-gen",
  "description": "Generates short videos from text"
}
```

**Response:**

```json
{
    "message": "Service added",
    "service": {
        "id": 4,
        "name": "video-gen",
        "description": "Generates short videos from text"
    }
}
```

### PUT

`PUT /services/{service_name}`

Updates a service by name.

```python
@app.put("/services/{service_name}")
async def update_service(service_name: str, request: Request):
    data = await request.json()
    for service in services:
        if service["name"] == service_name:
            service["name"] = data.get("name", service["name"])
            service["description"] = data.get("description", service["description"])
            return {"message": "Service updated", "service": service}
    return {"error": "Service not found"}
```

### DELETE

`DELETE /services/{service_name}`

Deletes a service by name.

```python
@app.delete("/services/{service_name}")
def delete_service(service_name: str):
    global services
    services = [s for s in services if s["name"] != service_name]
    return {"message": f"Service '{service_name}' deleted"}
```

---

## Load Testing

### Using Postman

1. Create a **collection** of APIs
2. Set **iteration count** (e.g., N = 100)
3. Note **Total Execution Time (T)**
4. Compute **Latency**:
   \[ \text{Latency} = \frac{T}{N} \]

---

## Summary Table

| Endpoint                      | Method | Description                             |
|------------------------------|--------|-----------------------------------------|
| `/services`                  | GET    | Fetch all AI services                   |
| `/services`                  | POST   | Add a new AI service                    |
| `/services/{service_name}`   | PUT    | Update a specific service               |
| `/services/{service_name}`   | DELETE | Delete a specific service               |
| `/service_info/{id}`         | GET    | Get info with optional verbose param    |


## :octicons-code-24: Code 


```py linenums='1'
from fastapi import FastAPI, Request
from pydantic import BaseModel
from typing import Optional, List, Union
import uvicorn

app = FastAPI()

services = [
    {"id": 1, "name": "image-gen", "description": "Generates images from prompts"},
    {"id": 2, "name": "text-gen", "description": "Generates text from input"},
    {"id": 3, "name": "en-nep-translate", "description": "Translates English to Nepali"},
]

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI"}


@app.get("/services")
def get_services():
    return services

@app.get("/service_info/{service_id}")
def get_service_info(service_id: int, verbose: Union[bool, None] = False):
    for service in services:
        if service["id"] == service_id:
            if verbose:
                return {"id": service_id, "info": service}
            return {"name": service["name"]}
    return {"error": "Service not found"}

@app.post("/add_service")
async def add_service(request: Request):
    data = await request.json()
    new_id = max(s["id"] for s in services) + 1
    new_service = {"id": new_id, "name": data["name"], "description": data["description"]}
    services.append(new_service)
    return {"message": "Service added", "service": new_service}
```
