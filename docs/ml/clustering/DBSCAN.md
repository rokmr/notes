# DBSCAN 
DBSCAN is a density-based clustering algorithm.

## Process:
Parameters: ε (epsilon), n (min points)

1. Start with an arbitrary point p from the dataset
2. Find all points within ε radius of point p (ε-neighbors)
3. If number of ε-neighbors ≥ n:
   - Create a new cluster
   - Add point p and its ε-neighbors to the cluster
   - For each neighbor point:
     * Find its ε-neighbors
     * If ≥ n neighbors, add them to the cluster
     * Continue expanding until no more points can be added
4. Mark processed points as visited
5. Repeat steps 1-4 with unvisited points until all points are processed


**Pros:** Arbitrary cluster shapes

**Cons:** Two parameters to tune and fixed ε can't handle varying densities

## :octicons-code-24: Code

{% set repo_path = 'rokmr/Machine-Learning/blob/main/src/colab/DBSCAN.ipynb' %}
{% include 'snippets/notebook.html' %}

=== "Numpy"
    ```py linenums='1'

    ```
=== "PyTorch"
    ```py linenums='1'

    ```