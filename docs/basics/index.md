# Basics

## Convex and Concave function

### Convex Functions

A function $f(x)$ is convex if the line segment between any two points on the graph lies above or on the graph.

For all $x_1, x_2$ in the domain and $t \in [0,1]$:

\[f(tx_1 + (1-t)x_2) \leq tf(x_1) + (1-t)f(x_2)\]

The graph ``curves upward``



!!! note

    - Sum of convex functions is convex
    - $f(E[X]) \leq E[f(X)]$
    - f is convex ⟺ f''(x) ≥ 0
    - $g(f(x))$ is convex if:
        - $g$ is convex and non-decreasing, $f$ is convex
        - $g$ is convex and non-increasing, $f$ is concave
    - Examples: $x^2$, $e^x$, $|x|$

### Concave Functions

A function $f(x)$ is concave if the line segment between any two points on the graph lies below or on the graph.

For all $x_1, x_2$ in the domain and $t \in [0,1]$:

\[f(tx_1 + (1-t)x_2) \geq tf(x_1) + (1-t)f(x_2)\]

The graph ``curves downward``


!!! note

    - Sum of concave functions is concave
    - $f(E[X]) \geq E[f(X)]$
    - f is concave ⟺ f''(x) ≤ 0
    - Examples: $\log(x)$, $\sqrt{x}$, $-x^2$


## Parametric vs Non-parametric model

## Generative vs Non-generative model