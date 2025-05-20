# Bias-Variance tradeoff

- Bias is the difference between the predicted value and the actual value. Increasing the complexity of model, increases the model performance (bias decreases and variance increases). 
- Variance is the sensitivity of the model to new data.

<div align='center'> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bias_and_variance_contributing_to_total_error.svg/2560px-Bias_and_variance_contributing_to_total_error.svg.png' width=50%"> </div>

The Bias-variance tradeoff is the relationship between bias and variance as you try to minimize each but by minimizing one the other increases, so there is 
inherently a tradeoff. 

$$\text{Expected Err. = Variance + $\text{Bias}^2$  + Irreducible Error} $$

### Overfitting and underfitting
Higher degree polynomial linear regression model may result in overfitting. `Model complexity increase may result in overfitting`

<div align="center">
  <img src="https://h2o.ai/wiki/overfitting/_jcr_content/root/section/par/advancedcolumncontro/columns1/image.coreimg.png/1689866308016/overfitting-visual.png" width=80% />
</div>


## Case of overfitting

1. Low loss for training and high for the test.
2. Low accuracy for training and high for the test.

## Case of underfitting

1. High loss for training and high for the test.
2. Low accuracy for training and low for the test.

## Prevention
1. **Regularization:** will reduce overfitting by penalizing the large coefficients which would lead to generalization. 

2. **Train with more data:** by having more data the model can better detect the signal and it reduces the chances of the model memorizing the data. 

3. **Cross-Validation:** split the data into k groups and let one group be the validation set while the others are used for training the model (we interchange which group becomes the validation set). 

4. **Reduce the number of features:** We can use some feature selection methods – filter-based (chi-square), wrapper based (Recursive Feature Elimination) or embedded like Lasso regularization. 

5. **Change the model** for e.g. ensemble learning techniques: by having multiple weak models instead of one model, we hope to capture the signal in the data better and so 
we can generalize to unseen datasets. 