# Bias-Variance tradeoff

- Let $f(x)$ be true model and $\hat{f}(x)$ be estimate of our model

<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Kick-Start-AI/refs/heads/main/assets/biasVar.png' width=70%>
</div>

## Bias

- Bias measures the difference between the model's average prediction and the true value
- Bias($\hat{f}(x)$) = $E[\hat{f}(x)] - f(x)$
- $E[\hat{f}(x)]:$ Average value of the model.
- For simple models, the average predicted value is often very far from the true value
- Simple models have very high bias & complex models have very low bias
- Simple model has very high bias & complex model has very low bias.

## Variance

- Variance measures the model's sensitivity to fluctuations in the training set
- Variance($\hat{f}(x)$) = $E[(\hat{f}(x) - E[\hat{f}(x)])^2]$
- Measures how much the predictions vary from one training set to another
- Simple models have low variance as they are more stable
- Complex models have high variance as they are more sensitive to training data

<div align='center'> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bias_and_variance_contributing_to_total_error.svg/2560px-Bias_and_variance_contributing_to_total_error.svg.png' width=50%> </div>

!!! Note

    - Simple Model: high bias, low variance, underfitting
    - Complex Model: low bias, high variance, overfitting


## Trade-off
- The Bias-variance tradeoff is the relationship between bias and variance as you try to minimize each but by minimizing one the other increases, so there is 
inherently a tradeoff. 
- $E[(y - \hat{f}(x))^2] = \text{Bias}^2 + \text{variance} + \sigma \text{(irreducible error)}$

<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Kick-Start-AI/refs/heads/main/assets/overfitUnderfit.png' width=50%>
</div>

### Case of underfitting

1. High loss for training and high for the test.
2. Low accuracy for training and low for the test.

#### Prevention

- More complex models
- Reducing regularization
- Increase training time


### Case of overfitting

1. Low loss for training and high for the test.
2. Low accuracy for training and high for the test.

#### Prevention

- Regularization
- Train with more data
- Data augmentation
- K-fold cross-validation
- Reduce the number of feature
- Change the model