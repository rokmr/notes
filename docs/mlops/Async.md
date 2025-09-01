# AsyncIO

We can run CPU bound operation while we are waiting for IO bound response.


# Concurrency vs Paralleism
- Concurrency is two lines of customers ordering from a single cashier (lines take turns ordering). This works really well in python.
- Parallelism is two lines of customers ordering from two cashiers (each line gets its own cashier). In python parallelism faces Global Interpreter Lock (GIL) on interpretor. Python code are single threaded even we start multiple thread.

`async`: Writing in front of function helps to run the mehod/function concurrently

`await`: Gives the control of order on how the things are being executed. Example. Getting data from database, getting confirmation from user

async func/method requires await whenever they are being called.

`gather`: helps to run the function in parallel

```python
import asyncio
res1, res2 = await asyncio.gather(func1(args2), func2(args2))
```