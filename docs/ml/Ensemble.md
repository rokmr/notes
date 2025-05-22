### Bagging (Bootstrap Aggregating)

**Bootsrapping :** Sample with replacement

- Creates multiple trees using bootstrap samples
- Uses all features
- No pruning (reduces bias)
- Reduces variance through averaging
- Problem: Creates correlated trees

### Random Forest

- Extension of bagging
- Randomly selects subset of features at each split
- Feature subset size:
    * Classification: $\sqrt{M}$
    * Regression: $M/3$
    * Can be reduced for correlated features

### Boosting
- Sequential tree growth
- Each tree learns from previous errors
- Controls tree depth
- Types:
    1. Gradient Boosting
        - Fits trees to residuals
        - Slow learning procedure
        - Uses gradient descent
    
    2. AdaBoost
        - Adjusts observation weights
        - Focus on misclassified instances
        - Adaptive learning rate
    
    3. XGBoost
        - Regularized gradient boosting
        - Better control over overfitting
        - Advanced features:
        * L1 (Lasso) & L2 (Ridge) regularization
        * Handling missing values
        * Tree pruning