# Regularization

## L1 vs L2 regularization

<div align='center'>
<img src='https://towardsdatascience.com/wp-content/uploads/2020/11/1nrWncnoJ4V_BkzEf1pd4MA.png' width=100%>
</div>

1. **Lasso (L1 regularization):** Lasso has “built-in” feature selection since it shrinks the least important features’ coefficient to zero, creating sparse outputs. 
$\mathcal{L} = \sum_{i=0}^{N}(y_i - \sum_{i=0}^{M}x_{ij}w_j)^2 + \lambda |\sum_{i=0}^{M}w_j|$
2. **Ridge (L2 regularization):** Ridge regression is more computationally efficient due to being differentiable at 0 (can be used easily with gradient descent) while lasso is undefined at 0. $\mathcal{L} = \sum_{i=0}^{N}(y_i - \sum_{i=0}^{M}x_{ij}w_j)^2 + \lambda \sum_{i=0}^{M}w_j^2$
3. **Elastic-net(L1+L2 regularization):**
    $\mathcal{L} = \sum_{i=0}^{N}(y_i - \sum_{i=0}^{M}x_{ij}w_j)^2 + \lambda_1 |\sum_{i=0}^{M}w_j| + \lambda_2 \sum_{i=0}^{M}w_j^2$

## Dorpout

### Inverted Dropout

## Question

??? question "How L1 helps in feature selection?"

    - L1 regularization adds absolute value of weights (|w|) to loss function
    - Pushes less important feature weights exactly to zero
    - Creates sparse solutions where many features have zero coefficients

??? question "Why Exactly Zero?"

    - $\mathcal{L} = \sum_{i=0}^{N}(y_i - \sum_{i=0}^{M}x_{ij}w_j)^2 + \lambda |\sum_{i=0}^{M}w_j|$

    - derivative of $|W|$
        - +1  when w > 0
        - -1  when w < 0
        - [-1,1] at w = 0 (subgradient)
        - Function is non-differentiable at w = 0

    - update equation
        - w = w - α(∂L/∂w + λ⋅sign(w)) where, sign(w) = {-1,0,1}

        - $\text{For } w > 0:
            \begin{cases}
            w_{t+1} = w_t - \alpha(\frac{\partial L}{\partial w} + \lambda) \
            \text{Term } +\lambda \text{ pushes w toward zero}
            \end{cases}$

            $\text{For } w < 0:
            \begin{cases}
            w_{t+1} = w_t - \alpha(\frac{\partial L}{\partial w} - \lambda) \
            \text{Term } -\lambda \text{ pushes w toward zero}
            \end{cases}$

            $\text{At } w = 0:
            \begin{cases}
            \text{Stays at zero if } |\frac{\partial L}{\partial w}| < \lambda \
            \text{Escapes zero if } |\frac{\partial L}{\partial w}| > \lambda
            \end{cases}$

??? question "Dropout and how it can be used to obtain probability distribution of response variable."

    - During Inference:
        - Keep dropout active (don't disable)
        - Run multiple forward passes (e.g., 100 times)
        - Each pass gives different prediction
    - Use the prediction:
        - Mean prediction (average of all passes)
        - Uncertainty estimate (variance of predictions)
        - Approximate probability distribution