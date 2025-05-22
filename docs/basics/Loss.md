# Loss

## Mean Square Loss

- `Regression problems`
- $L_{MSE} = \frac{1}{n}\sum_i (y_i - \hat{y}_i)^2$
- **Properties**
    - Sensitive to outliers


## Binary Cross Entropy Loss

- `Binary Classification`
- $L_{BCE} = -\sum_i y_i \log(\hat{y}_{i}) + (1 - y_i) \log(1 - \hat{y}_{i})$
- **Properties**
    - Penalizes confident wrong predictions heavily

## Cross Entropy Loss
- `Multi-class Classification`
- $L_{CE} = -\sum_i y_i \log(\hat{y}_i)$
- **Properties**
    - Good for mutually exclusive classes
    - Penalizes wrong predictions proportionally

## Hinge Loss
- `SVM Classification`
- $L_{hinge}=\max(0, 1-\hat{y} \cdot y)$
- **Properties**
    - Robust to outliers
    - Used in maximum-margin classification

## [Focal Loss](https://arxiv.org/pdf/1708.02002)
- `Object Detection/Imbalanced Classification`
- $L_{focal} = - (1 - p_t)^{\gamma} \log(p_t)$
- $L_{CE} = - \log(p_t)$
- **Properties**
    - $\gamma$ controls focus on hard examples

## [Triplet Loss](https://arxiv.org/pdf/1503.03832)
- `Similarity Learning/Embedding Learning`
- $L_{triplet} = \sum_i^N [||f(x_i^a) - f(x_i^p)||_2^2 - ||f(x_i^a) - f(x_i^n)||_2^2 + \alpha]_{+}$
- **Proeprties**
    - Requires triplets (anchor, positive, negative)
    - $\alpha$ : margin that is enforced between positive and negative pairs
    - Used in face recognition

## KL Divergence Loss
- `Distribution Learning`
- $KL(P||Q)=\sum P(x) \log \frac{P(x)}{Q(x)}$
- **Properties**
    - Not symmetric
    - Used in VAE
    - Useful for probability distribution matching

## [Contrastive Loss](https://proceedings.mlr.press/v182/zhang22a/zhang22a.pdf)
-  `Self-supervised/Multi-modal Learning`
- $l_i^{(u \rightarrow v)} = - \log \frac{\exp(sim(u_i,v_i)/\tau)}{\sum_{k=1}^N \exp(sim(u_i, v_k)/ \tau)}$
- $L_{contrast} = \frac{1}{N} \sum_{i=1}^N (\lambda l_i^{(v \rightarrow u)} + (1-\lambda) l_i^{(u \rightarrow v)})$
- $\lambda \in [0,1]$
- **Properties**
    - Pulls similar pairs together
    - Pushes dissimilar pairs apart
    - Used in CLIP, SimCLR

## Question

 - Explain residual loss and how it can be generalized for training multiple hypotheses.

??? question "Draw graph of cross entropy."

    <div align='center'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Comparison_of_Loss_functions_for_binary_classification.png/1896px-Comparison_of_Loss_functions_for_binary_classification.png', width=100%>
    </div>
