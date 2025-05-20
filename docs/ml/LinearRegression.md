# Linear Regression
Linear Regression would be appropriate since we are predicting a continuous value.

Linear Regression works when these 4 assumtion being followed:

1. **Linearity:** this means that the relationship must be linear between the independent variables and dependent variables. 
$y= \beta_0 + \beta_1 x_1 + \beta_2 x_2$ or $y= \beta_0 + \beta_1 sin(x) + \beta_2 cosx(x)$

2. **Homoscedasticity:** Constant variance of residuals. 

3. **Independence:** independent variables (observations) are not highly correlated.

4. **Normality:** Residuals are normally distributed for any fixed value of our observations 

**Note**

- Find the collinearity by using Variance Inflation Factors (VIF). VIF > 5 variable are dependent.

- Solve collinearity by either removing one of the features or linearly combine both features. 

## Metrics
- **Root Mean Square Error (RMSE) :** Calculates the average of the squared difference between the predicted and actual values. Thus, larger errors (outliers or poor prediction) are flagged 
more than when using MAE due to squaring errors. $RMSE = \sqrt{\frac{\sum_{i=1}^{N}(y_i - \hat{y_i})^2}{N}}$

- **Mean Absolute Error (MAE) :** Calculates the average of the absolute difference between the predicted and actual values. As a result, it does not punish large errors as much as RMSE. $MAE = \frac{\sum_{i=1}^{N}|y_i - \hat{y_i}|}{N}$

## Methods
1. Closed form solution
    - $XW=y$
    - $X^TXW=X^Ty$
    - ==$w = (X^TX)^{-1}X^Ty$==
    - Useful, when optimal solution is needed. Issue when inverse does notexist and computationally expensive when data is too large.

2. Optimization algorithm, typically Gradient Descent (GD) or Stochastic Gradient Descent (SGD).
    - $\text{L} = \frac{1}{2} ||\hat{y} - y||^2$ where $\hat{y} = X*W + b$ 
    - ==$\frac{\partial L}{\partial W} = X*(\hat{y}- y)$==
    - ==$\frac{\partial L}{\partial W} = \hat{y}- y$==

## Feature Importance
If the features are normalized then the coefficients are an indication of feature importance, i.e. features with higher coefficients are more useful for 
prediction.

## Prediction

$y = \sum_{i}w_ix_i + b$

## Question

??? question "Why linear regression is called linear?"
    - The relationship between the independent variables (X) and dependent variable (Y) is expressed as a linear combination of parameters (coefficients).
    - The coefficients (β) appear in the equation in a linear way: Y = β₀ + β₁X₁ + β₂X₂ + ... + βₙXₙ
    - These parameters are not raised to powers or modified by other functions.
    - The variables themselves (X) can be non-linear (like X², log(X), etc.)
    - For example: Y = β₀ + β₁X² is still a linear regression model because the coefficient β₁ is linear

??? question "Explain the concept of correlation between features, its implications, and potential problems in machine learning models, particularly in regression."

    - Measures linear relationship between variables
    - Range: -1 to +1
    - Shows how variables move together
    - Problems with Correlated Features:
        - Multicollinearity in regression
        - Unstable coefficients
        - Reduced model interpretability

## :octicons-code-24: Code 

{% set repo_path = 'rokmr/Machine-Learning/blob/main/src/colab/LinearRegression.ipynb' %}
{% include 'snippets/notebook.html' %}

!!! Numpy

    === "Closed Form"

        ```py linenums='1' 
        class LinearRegressionClosedForm:
            def __init__(self):
                self.weights = None
                self.bias = None

            def fit(self, X, y):
                n_samples, n_features = X.shape
                bias = np.ones((n_samples, 1))
                X_new = np.column_stack((X, bias))
                W = np.linalg.inv(X_new.T @ X_new) @ X_new.T @ y
                self.weights = W[:-1]
                self.bias = W[-1]

            def predict(self, X):
                y_approximated = np.dot(X, self.weights) + self.bias
                return y_approximated
        ```

    === "Gradient Form"
        ```py linenums='1' 
        class LinearRegression:
            def __init__(self, learning_rate=0.001, n_iters=1000):
                self.lr = learning_rate
                self.n_iters = n_iters
                self.weights = None
                self.bias = None

            def fit(self, X, y):
                n_samples, n_features = X.shape

                # init parameters
                self.weights = np.zeros(n_features)
                self.bias = 0

                # gradient descent
                for _ in range(self.n_iters):
                    y_predicted = np.dot(X, self.weights) + self.bias
                    # compute gradients
                    dw = (1 / n_samples) * np.dot(X.T, (y_predicted - y))
                    db = (1 / n_samples) * np.sum(y_predicted - y)

                    # update parameters
                    self.weights -= self.lr * dw
                    self.bias -= self.lr * db

            def predict(self, X):
                y_approximated = np.dot(X, self.weights) + self.bias
                return y_approximated

        ```

!!! PyTorch

    === "Parameter Based" 
        ```py linenums='1'
        class LinearRegression(nn.Module):
            def __init__(self, input_dim, output_dim):
                super(LinearRegression, self).__init__()
                self.weights = nn.Parameter(torch.randn(input_dim, output_dim, requires_grad=True))
                self.bias = nn.Parameter(torch.randn(1, output_dim, requires_grad=True))

            def forward(self, x):
                return  torch.matmul(x, self.weights) + self.bias
        ```
    === "Linear Layer Based"
        ```py linenums='1'
        class LinearRegressionV2(nn.Module):
            def __init__(self, input_dim, output_dim):
                super(LinearRegressionV2, self).__init__()
                self.linear = nn.Linear(input_dim, output_dim)

            def forward(self, x):
                return  self.linear(x)
        ```