# SVM 

**Support Vector Machine**

- Used for both classification and regression tasks.
- Core idea: Find optimal hyperplane that maximizes margin between classes.

## Geometric Interpretation

- There are many hyperplanes that separate positive and negative points.
- We want to find the margin-maximizing hyperplane.
- Margin is the perpendicular distance between two hyperplanes $H^{+}$ and $H^{-}$.
- As margin increases, generalization ability increases.
- Points through which $H^{+}$ or $H^{-}$ pass are called support vectors.

## Alternate Geometric Interpretation

- Find the convex hull for positive and negative points.
- Find the shortest line connecting these hulls.
- The plane bisecting this line perpendicularly gives the margin maximizer.

## Derivation

- $H$: Margin Maximizing hyperplane
- $H$: $w^T x + b = 0$ 
- $H^{+}$: $w^T x + b = 1$ (positive class boundary)
- $H^{-}$: $w^T x + b = -1$ (negative class boundary)
- Margin: $d = \frac{2}{||w||}$ (derived from geometric distance formula)

**Problem Statement**

- For linearly separable data:
  - Find $w^{\star}$ and $b^{\star}$ such that $\frac{2}{||w||}$ is maximized
  - Subject to: $y_i(w^T x_i + b) \ge 1 \text{  } \forall i$ 
  - $w^{\star}, b^{\star} = \text{arg max}_{w,b} \frac{2}{||w||} = \text{arg min}_{w,b} \frac{||w||^2}{2}$

- For non-linearly separable data:
  - Introduce slack variables $\xi_i \ge 0$
  - $\xi_i = 0$ for correctly classified points
  - $\xi_i > 0$ measures violation of margin
  - Objective: $w^{\star}, b^{\star} = \text{arg min}_{w,b} \frac{||w||^2}{2} + C \sum_i^N \xi_i$
  - $C$: regularization parameter (higher $C$ → stricter margin)


## Loss minimization: Hinge Loss

- $L_{hinge}(y_i, f(x_i))=\max(0, 1-y_i f(x_i))$ where $f(x_i) = w^T x_i + b$
- When $y_i f(x_i) \ge 1$: Loss $= 0$ (correct classification with margin)
- When $y_i f(x_i) < 1$: Loss $> 0$ (violation of margin)
- Complete objective: $\mathcal{L} = \min_{w,b} \frac{1}{n}\sum_i^N \max(0, 1 - y_i(w^T x_i +b)) + \lambda ||w||^2$

### Optimization
- Gradient descent can be used to minimize hinge loss
- Challenging due to non-differentiability at $y_i(w^T x_i + b) = 1$
- Sub-gradients are used at non-differentiable points

**Gradient Computation:**

$\frac{\partial J}{\partial w} = \lambda w - \frac{1}{n}\sum_{i=1}^n y_i x_i \cdot I(y_i(w^T x_i + b) < 1)$

$\frac{\partial J}{\partial b} = -\frac{1}{n}\sum_{i=1}^n y_i \cdot I(y_i(w^T x_i + b) < 1)$

where $I()$ is the indicator function.

**Gradient Updates:**

1. For points outside margin ($y_i(w^T x_i + b) \geq 1$):
   - Only regularization affects update
   - $w = w - \eta \lambda w$
   - $b$ remains unchanged

2. For margin violations ($y_i(w^T x_i + b) < 1$):
   - Both loss and regularization affect update
   - $w = w - \eta(\lambda w - y_i x_i)$
   - $b = b + \eta y_i$

where $\eta$ is the learning rate.

## Dual form of SVM

**Primal**
$\min_{w,b,\xi} \frac{||w||^2}{2} + C \sum_i^N \xi_i$
subject to: $y_i(w^T x_i + b) \ge 1 - \xi_i$ and $\xi_i \ge 0$ $\forall i$

**Dual**
$\max_{\alpha} \sum_i^N \alpha_i - \frac{1}{2}\sum_i \sum_j \alpha_i \alpha_j y_i y_j x_i^T x_j$
subject to: $\sum_i^N \alpha_i y_i = 0$ and $0 \le \alpha_i \le C$ $\forall i$

## Kernel SVM

- For non-linearly separable data in input space, map to higher dimensional feature space
- Explicit mapping φ(x) is computationally expensive
- Kernel trick: K(x,y) = φ(x)ᵀφ(y)
- Replace dot products with kernel function in dual form

**Dual form with Kernel**
$\max_{\alpha} \sum_i^N \alpha_i - \frac{1}{2}\sum_i \sum_j \alpha_i \alpha_j y_i y_j K(x_i,x_j)$
subject to: $\sum_i^N \alpha_i y_i = 0$ and $0 \le \alpha_i \le C$

**Prediction**
$f(x) = \text{sign}(\sum_i \alpha_i y_i K(x_i,x) + b)$

### Mercer's Theorem

- Kernel $K(x,y)$ is valid if and only if:
  1. Symmetric: $K(x,y) = K(y,x)$
  2. Positive semi-definite: $\int\int K(x,y)g(x)g(y)dxdy \ge 0$ for all g
- Ensures existence of feature space mapping $\phi$
- Guarantees convergence of kernel optimization

### Common Kernels

**Linear Kernel**

- $K(x,y) = x^T y$
- Equivalent to no transformation
- Used when data is linearly separable

**Polynomial Kernel**

- $K(x,y) = (\gamma x^Ty + r)^d$
- Parameters: degree $d$, $\gamma > 0, r \ge 0$
- Maps to space of polynomials up to degree d
- Captures feature interactions

**RBF (Gaussian) Kernel**

- $K(x,y) = exp(-\gamma||x-y||^2)$
- Parameter: $\gamma > 0$ controls spread
- Maps to infinite dimensional space
- Most commonly used for non-linear data
- $\gamma$ large $\rightarrow$ high variance, low bias
- $\gamma$ small $\rightarrow$ low variance, high bias

## Inference

- $f(x) = \text{sign}(\sum_{i \in SV} \alpha_i y_i K(x_i,x) + b)$
- Computational cost depends on number of SVs


## :octicons-code-24: Code

{% set repo_path = 'rokmr/Machine-Learning/blob/main/src/colab/SVM.ipynb' %}
{% include 'snippets/notebook.html' %}

=== "Numpy"
    ```py linenums='1'

    ```
=== "PyTorch"
    ```py linenums='1'

    ```