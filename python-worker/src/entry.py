from js import Response
import numpy as np

async def on_fetch(request, env):
    # Demonstrate package usage
    arr = np.array([1, 2, 3, 4, 5])
    mean = np.mean(arr)
    return Response.new(f"Hello from Python Worker! Numpy Mean: {mean}")
