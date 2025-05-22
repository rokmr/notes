# Decision Tree

A supervised learning method used for:
1. Regression
2. Classification

## Terminology

1. Root Node: Starting point of the tree
2. Decision Node: Internal node where a split occurs
3. Leaf Node: Terminal node containing predictions
4. Sub Tree: Part of the tree below a node
5. Splitting: Process of dividing a node into two or more sub-nodes

## Core Concepts

1. Recursive Binary Splitting
2. Greedy approach at each step
3. Non-parametric method
4. Can handle non-linear relationships

## Tree Construction

### Feature Selection Measures

**For Classification:**

- Gini Index: $\sum_{k=1}^K p̂_k(1-p̂_k)$
      - Measures node purity
      - Range: [0,0.5] for binary
      - 0 = pure node, 0.5 = equal distribution

- Entropy: -$\sum_{k=1}^K p̂_k\log(p̂_k)$
      - Measures information gain
      - Range: [0,log(k)]
      - 0 = pure node

- Misclassification Error: 1 - max(p̂ᵢ)
      - Less used in practice
      - Not sensitive enough for tree growth

**For Regression:**

For region $R_j$,

1. RSS (Residual Sum of Squares) : $RSS = \sum_{j=1}^J \sum_{i \in R_j} (y_i -\hat{y}_i)^2$
2. MSE (Mean Squared Error) : $MSE = \frac{1}{N} \sum_{j=1}^J \sum_{i \in R_j} (y_i -\hat{y}_i)^2$
3. MAE (Mean Absolute Error) : $MAE = \frac{1}{N} \sum_{j=1}^J \sum_{i \in R_j} |y_i -\hat{y}_i|$


### Building Process

- Uses top-down, greedy approach (binary splitting)
- At each step, makes locally optimal split
- Prediction: Mean of response variable in each leaf

**Splitting Process**

1. For each feature:
   - For numerical: Find best splitting threshold
   - For categorical: 
     * Binary: Two groups
     * Multi-class: Consider all possible groupings
2. Calculate impurity measure for each split
3. Select split that maximizes information gain:
   $IG = I(parent) - \sum_{j=1}^m \frac{N_j}{N}I(j)$
   where I = impurity measure


**Algorithm Steps**

1. Consider all predictors and possible cut points
2. Calculate RSS for each potential split
3. Select split with minimum RSS
4. Repeat until stopping criteria met


**Stopping Criteria**

1. Minimum samples at internal node
2. Minimum samples at leaf node
3. Maximum depth of tree
4. Maximum number of leaf nodes


### Pruning

Cost complexity function:
$\sum_{m=1}^{|T|} \sum_{i:x_i \in R_m} (y_i - \hat{y}_{R_m})^2 + \alpha |T|$

where $|T|$ is tree size and $\alpha$ is complexity parameter

**Pruning Process**

1. Grow maximum size tree
2. Prune back using cost complexity



## Advantages & Disadvantages

**Advantages**

- Interpretable and visualizable
- Handles both numerical and categorical data
- Minimal preprocessing needed
- Captures non-linear relationships
- Handles missing values well

**Disadvantages**

- High variance (unstable)
- Prone to overfitting
- Biased towards dominant classes
- May create biased trees with imbalanced datasets