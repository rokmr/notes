# Dimensionality Reduction
High dimensional data could be a problem

- An obvious reason would be more computing power/time needed to build a model 
- The curse of dimensionality: When the number of dimensions (features) increases our model starts to become more complex and dependent on the data it was trained on and so it overfits thus reducing our model performance 
- For models that use distance metrics, when the number of dimensions is too high, then each datapoint seems very similar to each other. This is because, with very large features, the distance between two data points are almost equal since they are all very far from each other. 

Method to resolve : PCA, LDA, t-SNE(non-linear correlation), AutoEncoder

## Question

??? question "What is curse of dimensionality?"
    
    - As dimensions increase, data analysis becomes exponentially harder.
        - Data becomes sparse
        - Distances become meaningless
        - More data needed exponentially
        - Computational cost increases

    - Solution
        - Dimensionality reduction
        - Feature selection

??? question "Explain different methods for feature selection and dimensionality reduction."

    - Forward Feature Selection
        - Start: Empty feature set
        - Process: Iteratively add best performing feature
        - Selection: Based on performance metric
        - $F_{i+1} = F_i \cup \{\text{argmax}_{f \in F_i} Score(F_i \cup {f})\}$
       
    - Backward Feature Selection
        - Start: Full feature set
        - Process: Iteratively remove worst feature
        - Selection: Based on performance drop
        - $F_{i+1} = F_i \ \{\text{argmin}_{f \in F_i} Score(F_i \ {f})\}$

    - Information Gain
    - Lasso vs Ridge

