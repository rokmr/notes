# Basics

## Convex and Concave function

**Convex Functions**

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

**Concave Functions**

A function $f(x)$ is concave if the line segment between any two points on the graph lies below or on the graph.

For all $x_1, x_2$ in the domain and $t \in [0,1]$:

\[f(tx_1 + (1-t)x_2) \geq tf(x_1) + (1-t)f(x_2)\]

The graph ``curves downward``


!!! note

    - Sum of concave functions is concave
    - $f(E[X]) \geq E[f(X)]$
    - f is concave ⟺ f''(x) ≤ 0
    - Examples: $\log(x)$, $\sqrt{x}$, $-x^2$


## Parametric and Non-parametric model

**Parametric**

- Makes strong assumptions about the data distribution
- Has a fixed number of parameters
- Linear Regression, Logistic Regression, Neural Networks, LDA


**Non-parametric Model**

- Makes fewer assumptions about data distribution
- Number of parameters grows with training data
- KNN, Decision Trees, Random Forests, SVM, Gaussian Processes

## Generative and Non-generative model

**Generative Model**

- $P(Y|X) = P(X|Y)P(Y)/P(X)$
- $Y^{\star} = argmax[P(X|Y)P(Y)]$
    - $X$ : feature 
    - $Y$ : class label
    - $P(X|Y)$ : Likelihood
- Naive Bayes, GMM, LDA, GANs, HMM

**Non-generative Model**

- Directly models $P(Y|X)$
- $Y^{\star} = argmax[P(Y|X)]$
- Logistic Regression, SVM, Decision Tree, Random Forest, Neural Network 