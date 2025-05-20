# PCA 
It is `unspervised machine learning`

**Assumption:**

- PCA needs a linear correlation  between all variables  (It should not have  non-linear correlations )

- It is a linear combination of variables that results in a line or axis/axes that explain a maximal amount of variance from the original dataset. More formally, the eigenvectors of the covariance matrix (of the data) are the principal components and the eigenvalues represent the amount of variance carried in each principal component. 

- If the eigenvectors are, all the same, PCA would not be able to select which principal component since we select the top n eigenvectors and there would be no top n since they are all equal. 

- It is not necessary to remove variables that are highly correlated because PCA would project all the correlated variables onto the same principal 
component. 

- Choose number of principle component such that it captures 95-99% or the variance.

## Process
1. Standardize our data (since, PCA is sensitive to the variance within features.)
2. Calculate the covariance matrix 
3. Then using this matrix we calculate eigenvectors and eigenvalues and thus the principal components from the eigenvectors

## Drawback
1. Computationally expensive 
2. Information is always lost 
3. Explainability becomes much more difficult.

## Question

??? question "How to determine the optimal number of principal components (hyperplanes) in PCA?"

    - Variance explained = $\frac{\sum_{i=1}^k \lambda_i}{\sum_{i=1}^N \lambda_i}$ 
    - Scree Plot Components:
        - X-axis: Principal component number
        - Y-axis: variance explained
    - Choose number of componet if the variance explained reaches the threshold
        - $k = min\{n: \frac{\sum_{i=1}^n \lambda_i}{\sum_{i=1}^N \lambda_i} \geq \text{threshold}\}$

## :octicons-code-24: Code

{% set repo_path = 'rokmr/Machine-Learning/blob/main/src/colab/PCA.ipynb' %}
{% include 'snippets/notebook.html' %}

=== "Numpy"
    ```py linenums='1'

    ```
=== "PyTorch"
    ```py linenums='1'

    ```