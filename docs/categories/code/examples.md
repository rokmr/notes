---
title: Code Examples
tags:
  - code
  - python
  - javascript
---

# Code Examples

## Python Examples

### Basic Function

```python
def fibonacci(n):
    """Return the nth Fibonacci number."""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

### Class Example

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, my name is {self.name}"
```

## JavaScript Examples

### Async Function

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

### DOM Manipulation

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#myButton');
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});
``` 