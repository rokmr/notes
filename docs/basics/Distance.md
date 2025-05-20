# Distance 

## Euclidean Distance
   - Straight-line distance between two points
   - Formula: $d(p,q) = \sqrt{\sum_{i=1}^{n}(p_i - q_i)^2}$

## Manhattan Distance
   - Sum of absolute differences between coordinates
   - Formula: $d(p,q) = \sum_{i=1}^{n}|p_i - q_i|$

## Cosine Similarity
   - Measures cosine of angle between two vectors
   - Range: [-1, 1] where 1 means vectors are identical
   - Formula: $cos(\theta) = \frac{A \cdot B}{||A|| \cdot ||B||}$
   - Often converted to distance: $d(p,q) = 1 - cos(\theta)$