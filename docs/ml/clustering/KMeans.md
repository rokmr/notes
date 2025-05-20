# K-means Clustering

## Process
- Initialize number of k
- Randomly choose k points in the data as centroids 
- While points do not change: (centroids do not change or max number of iter)
    - Assign each data point to its nearest centroid.
    - Recompute the centroids of each cluster 


## K

### Optimal K
To find the optimal number of clusters (k), we use the Elbow Method:
1. Calculate the Within-Cluster Sum of Squares (WSS) for different values of k
2. Plot WSS vs k
3. Look for the "elbow" point - where increasing k starts giving diminishing returns
4. Choose k at this elbow point

<div align='center'>
<img src='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*9ihLnBj-RV2h4e-VEimEbw.png' width=70%>
</div>

## Advantages

1. **Simple and Intuitive**: Easy to understand and implement; works well for basic clustering tasks; widely used in practice.

2. **Fast and Efficient**: Linear time complexity O(nkd) where n is samples, k is clusters, d is dimensions; scales well with large datasets.

3. **Memory Efficient**: Only stores centroids and cluster assignments; minimal memory requirements compared to other clustering methods.


## Drawbacks

1. **Sensitive to Initialization**: Results vary based on initial centroid positions, may get stuck in local optima; solution is to run multiple times with different initializations.

2. **Assumes Spherical Clusters**: Works best with spherical, similarly sized clusters; struggles with elongated or irregular shapes; not suitable for varying densities.

3. **Requires Pre-specification of k**: Number of clusters must be known beforehand; elbow method is subjective; different metrics may suggest different optimal k values.

4. **Sensitive to Outliers**: Outliers can significantly influence centroid positions; may create clusters just for outliers; solution is to pre-process data.

## :octicons-code-24: Code

{% set repo_path = 'rokmr/Machine-Learning/blob/main/src/colab/KMeans.ipynb' %}
{% include 'snippets/notebook.html' %}

=== "Numpy"
    ```py linenums='1'

    ```
=== "PyTorch"
    ```py linenums='1'

    ```