
# Gaussian Mixture Models (GMM)
- Soft clustering algorithm where data points can belong to multiple clusters with probability scores
- Models data as a mixture of K Gaussian distributions
- Each cluster is represented by a Gaussian distribution with its own parameters

## Key Components
1. **Parameters for each Gaussian**:
   - Mean (μ)
   - Covariance matrix (Σ)
   - Weight/mixing coefficient (π)

## Process

1. **Initialization**:
   - Randomly initialize parameters for K Gaussians
   - Set initial weights, means, and covariance matrices

2. **Expectation-Maximization (EM)**:
   
   a) **Expectation Step (E-step)**:
   - Calculate probability of each data point belonging to each cluster
   - Compute posterior probabilities (responsibilities)
   
   b) **Maximization Step (M-step)**:
   - Update Gaussian parameters using weighted averages
   - Recalculate means, covariances, and mixing coefficients
   
3. **Convergence**:
   - Repeat E-step and M-step until parameters converge
   - Monitor log-likelihood for convergence criteria

## Advantages
- Provides soft assignments (probabilities)
- Can model elliptical clusters
- More flexible than K-means
- Handles overlapping clusters well

## Limitations
- Computationally more expensive than K-means
- Sensitive to initialization
- May converge to local optima

## :octicons-code-24: Code

{% set repo_path = 'rokmr/Machine-Learning/blob/main/src/colab/GMM.ipynb' %}
{% include 'snippets/notebook.html' %}

=== "Numpy"
    ```py linenums='1'

    ```
=== "PyTorch"
    ```py linenums='1'

    ```