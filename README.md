# Notes

## Setup

```bash
conda create -n notes python
conda activate notes
pip install mkdocs
```

```bash
mkdocs new my-project
cd my-project
mkdocs serve
mkdocs build
mkdocs gh-deploy --force
```

```bash
export DYLD_FALLBACK_LIBRARY_PATH=/opt/homebrew/lib
```