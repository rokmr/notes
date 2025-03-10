---
title: Getting Started with Notes
tags:
  - guide
  - tutorial
---

# Getting Started with Notes

Welcome to your new note-taking system! This guide will help you understand how to use all the features available.

## Writing Notes

### Basic Markdown

You can use all standard Markdown formatting:

- **Bold text** using `**double asterisks**`
- *Italic text* using `*single asterisks*`
- `Code` using backticks
- [Links](https://example.com) using `[text](url)`
- Lists (like this one!)

### Math Equations

You can write LaTeX equations:

Inline equation: $E = mc^2$

Display equation:

$$
\frac{d}{dx}\left( \int_{0}^{x} f(u)\,du\right)=f(x)
$$

### Code Blocks

```python
def hello_world():
    print("Hello, fellow note-taker!")
    return True
```

### Task Lists

- [x] Create a new note
- [ ] Add some content
- [ ] Include tags
- [ ] Link to other notes

## Organization

### Tags

Tags help organize your notes. Add them in the frontmatter like this:

```yaml
---
title: Note Title
tags:
  - tag1
  - tag2
---
```

### Directory Structure

Notes are organized in categories:

```
docs/
├── categories/
│   ├── math/
│   ├── code/
│   └── general/
└── assets/
    └── images/
```

## Tips

1. Use descriptive filenames
2. Add tags to every note
3. Include relevant links to other notes
4. Keep notes atomic and focused
5. Use headers for structure 