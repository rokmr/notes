# Pydantic

It helps to get structured output from the LLM.

```python
from pydantic import BaseModel, EmailStr
from typing import Literal, List

class CustomerQuery(BaseModel):
    name: str
    email: EmailStr
    query: str
    category: Literal['refund_request', 'information_request', 'other']
    is_complaint: bool
    tags: List[str]
```

```python
valid_data = CustomerQuery.model_validate_json(json_output)
```

The above can have the following errors, which are handled by Pydantic:

1. **JSON ValidationError**: If the LLM's response contains extra text or unexpected formatting, or if the JSON itself is not properly formatted.
2. **Data ValidationError**: JSON is correct, but the data contained in the JSON does not match the model.

More info at [notebook](../notebooks/pydantic.ipynb)