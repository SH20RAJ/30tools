# How to Deploy Python Apps on Cloudflare Workers

Deploying Python applications on Cloudflare Workers allows you to run Python code at the edge with minimal latency. While still in beta, the ecosystem is evolving rapidly. This guide covers how to set up, build, and deploy a Python Worker, including how to handle dependencies.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: Required for `wrangler`.
- **Python 3**: For managing Python environments (Python 3.11+ recommended).
- **uv**: A fast Python package installer and resolver.
  ```bash
  pip install --upgrade uv
  ```
- **pywrangler**: The CLI tool for deploying Python workers with dependencies.
  ```bash
  pip install workers-py
  ```

## 1. Project Setup

Create a new directory for your worker and set up the necessary configuration files.

### `wrangler.toml`
This file configures your Cloudflare Worker. Create a `wrangler.toml` file with the following content:

```toml
name = "my-python-worker"
main = "src/entry.py"
compatibility_date = "2024-03-29"
compatibility_flags = ["python_workers"]
```

- `main`: Points to your Python entry file.
- `compatibility_flags`: Enables the Python Workers beta.

### `pyproject.toml` (For Dependencies)
Cloudflare Workers supports Python packages via `pyproject.toml`. Create this file to define your project and dependencies:

```toml
[project]
name = "my-python-worker"
version = "0.1.0"
description = "My Python Worker"
readme = "README.md"
requires-python = ">=3.11"
dependencies = [
    "numpy", # Example dependency
]
```
> **Note**: Avoid using `requirements.txt` as `pywrangler` prefers `pyproject.toml`.

## 2. Writing Your Worker

Create a `src` directory and an `entry.py` file.

### `src/entry.py`
The entry point should define an `on_fetch` handler (functional style) or a class extending `WorkerEntrypoint`. The functional style is currently more reliable for beta features.

```python
from js import Response
import numpy as np # Import your dependency

async def on_fetch(request, env):
    # Example logic using numpy
    arr = np.array([1, 2, 3, 4, 5])
    mean = np.mean(arr)
    
    return Response.new(f"Hello from Python Worker! Mean: {mean}")
```

## 3. Deployment

To deploy a Python Worker with dependencies, use `pywrangler`. It handles creating a virtual environment, installing packages via `uv`, and bundling them for the worker.

```bash
# Ensure you are in the project directory
pywrangler deploy -c wrangler.toml
```

If you encounter issues with `uv` versions, you can set up a local virtual environment first:

```bash
# specialized setup if global tools fail
python3 -m venv .venv
source .venv/bin/activate
pip install workers-py
export PATH=$PWD/.venv/bin:$PATH 
pywrangler deploy -c wrangler.toml
```

## Limitations & Best Practices

1.  **Beta Status**: Python Workers are in open beta. APIs and stability can change.
2.  **Package Support**: Not all Python packages work. Packages relying on C-extensions unsupported by Pyodide (e.g., some complex crypto or low-level networking libs) may fail. Pure Python packages and `numpy`/`pandas` generally work well.
3.  **Bundle Size**: There is a size limit for the compressed script + assets (usually 10MB on free/standard plans). Large libraries like `pandas` can fill this quickly.
4.  **Network requests**: Use `js.fetch` or use `pyodide.http` for networking. Standard `requests` might fail unless patched (though `workers-py` attempts patches).
5.  **Performance**: Python runs on Wasm (Pyodide). Cold starts can be slower than JS workers, especially with heavy dependencies.

## Troubleshooting

- **Error 1101 (Worker Threw Exception)**: Check your logs (`wrangler tail`). This often means an import failed or a runtime error occurred (e.g., using a blocked syscall).
- **Dependency Conflicts**: Ensure your `pyproject.toml` is clean. If deployment fails, clear existing virtual environments (`.venv-workers`) and retry.
