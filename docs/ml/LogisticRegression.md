# Logistic Regression
It is used for te classification problem. It uses linear regressing equaition to predict the class probabilities.

Equation:

$y = wx+b$

This $y$ is feed to the sigmoid function to get the output between 0 and 1 as probailities. So,

$y = \frac{1}{1+ e^{-(wx+b)}}$


**Logistic regression doesn't require:**
- Normality of residuals
- Homoscedasticity

**Logistic regression specifically requires:**
- Binary/categorical outcome
- Linear relationship with log odds (not the outcome itself)

## Effect of Outlier
Since here we focus on finding the decision boundry that linearly seperate the classes. So we mostly focus on the points which are closer to the boundry. Therefore, outlier will have very less effect here.

## Logistic Regression as Maximum Likelihood Estimation(MLE)

Assuming the Bernoulli distribution (i.e., binary classification). Let, $y \in \{0,1\}$ if $p$ is the probability of class as 1. Then according to MLE we need to maximize $p^y$ if class is 1 and $(1-p)^{(1-y)}$ if class is 0.

==$L = \Pi_{i=1}^{N} p_i^{y_i} (1-p_i)^{(1-y_i)}$==

Multipying such large number may result in the overflow. So take `log` on both side.

==$L = \sum_{i=1}^{N} (y_i \ln p_i + (1 - y_i) \ln (1 - p_i))$==

$Loss = -Likelihood$

This loss penelizes much more than MSE when prediciton is wrong.

## Prediction
Here, $pred = \frac{1}{1+ e^{-(wx+b)}}$, if $pred > \tau$ then class 1 else class 0.

$\tau$ is decided according to problem statement.

## Multi-Class (N)
1. **One-vs-all:** We need to have N models 

    $pred = \text{argmax}_{i} f_{i}(x)$

2. **One-vs-one:** We need to have $\binom{N}{2}$ models, where each model is trained to distinguish between a pair of classes. For N classes, this results in $\frac{N(N-1)}{2}$ binary classifiers. The prediction is made by ==majority voting across all pairwise== comparisons:

    $pred = argmax_{i} \sum_{j \neq i} \mathbb{I}(f_{ij}(x) = i)$

    where $f_{ij}(x)$ is the binary classifier for classes i and j, and $\mathbb{I}$ is the indicator function.

3. **Mathematical:** Use softmax instead of sigmoid and use cross-entropy loss.

## :octicons-code-24: Code

{% set repo_path = 'rokmr/Machine-Learning/blob/main/src/colab/LogisticRegression.ipynb' %}
{% include 'snippets/notebook.html' %}

=== "Numpy"
    ```py linenums='1'
    class LogisticRegression:
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
                # approximate y with linear combination of weights and x, plus bias
                linear_model = np.dot(X, self.weights) + self.bias
                # apply sigmoid function
                y_predicted = self._sigmoid(linear_model)

                # compute gradients
                dw = (1 / n_samples) * np.dot(X.T, (y_predicted - y))
                db = (1 / n_samples) * np.sum(y_predicted - y)
                # update parameters
                self.weights -= self.lr * dw
                self.bias -= self.lr * db

        def predict(self, X):
            linear_model = np.dot(X, self.weights) + self.bias
            y_predicted = self._sigmoid(linear_model)
            y_predicted_cls = [1 if i > 0.5 else 0 for i in y_predicted]
            return np.array(y_predicted_cls)

        def _sigmoid(self, x):
            return 1 / (1 + np.exp(-x))
    ```


=== "PyTorch"
    ```py linenums='1'
    class LogisticRegression(nn.Module):
        def __init__(self, input_features):
            super(LogisticRegression, self).__init__()
            self.layer1 = nn.Linear(input_features, 8)
            self.layer2 = nn.Linear(8, 1)
            self.relu = nn.ReLU()
            self.dropout = nn.Dropout(0.5)
            self.bn = nn.BatchNorm1d(8)

        def forward(self, x):
            x = self.layer1(x)
            x = self.bn(x)
            x = self.relu(x)
            x = self.dropout(x)
            x = torch.sigmoid(self.layer2(x))
            return x

    ```

