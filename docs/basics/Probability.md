# Probability

## Notations

$\Omega$ : Sample Space

$\mathcal{F}$ : set of all possible event

$P$ : Probability

## Basics

### Axioms and Properties

**Axioms**

$P : \mathcal{F} \rightarrow R$ satisfying

- Non-negativity : $P(A)$ ≥ 0, $\forall A \in \mathcal{F}$
- Normalization: $P(\Omega) =1$
- $\sigma$-additivity: If $A_i \cap A_j = \phi$, $\forall i \neq j$ then $P(\cup_{i=1}^{\infty} A_i) = \sum_{i=1}^{\infty}P(A_i)$

**Properties**

If $A \subseteq B \Longrightarrow P(A) \le P(B).$

- $P(A \cap B) \le min(P(A), P(B))$

- $P(A \cup B) \le P(A) + P(B)$

- $P( \Omega / A) = 1- P(A)$

If $A_1, \cdots, A_k$ are a set of disjoint events such that $\cup_{i=1}^{k} A_i = \Omega$, then $\sum_{i=1}^{k} P(A_k) =1.$

### Independent

- $P(AB) = P(A) P(B)$

- $P(ABC) = P(A) P(B) P(C)$

### Conditional Independence

- $P(AB|C) = P(A|C)P(B|C)$

Event may be conditionally independent but not independent.

### Chain Rule

$$f(x_1, x_2, \cdots , x_n) = f(x_1)f(x_2|x_1) f(x_3|x_1, x_2) \cdots f(x_n| x_1,x_2, \cdots , x_{n-1}) = f(x_1) \Pi_{i=2}^{n} f(x_i | x_1, \cdots , x_{i-1})$$


### Conditional Probability

- $P(A|B) = \frac{P(A\cap B)}{P(B)} = \frac{P(AB)}{P(B)}$

- $P(AB) = P(A|B) P(B)$

- $P(A|B,C) = P(A|BC) = \frac{P(ABC)}{P(BC)}$

### Total probability rule

- $P(A) = \sum_{i} P(A|B_i)P(B_i)$

### Bayes Rule

- $P(A|B) = \frac{P(AB)}{P(B)}= \frac{P(B|A)P(A)}{P(B)}$


## Random Variable

$X:\Omega \rightarrow R$, here $X(\omega)$ is denoted as $X$.

### CDF

$F_X : R \rightarrow [0,1]$

$F_X(x) = P(X < x)$

**Properties**

- $0 \le F_X(x) \le 1.$

- $\lim_{x \to  - \infty} F_X(x) = 0$

- $\lim_{x \to  \infty} F_X(x) = 1$

- $x \le y \Longrightarrow  F_X(x) \le F_X(y).$

### PMF

$X$ is a discrete random variable

$p_X : \Omega \rightarrow R$

$p_X(x) = P(X=x)$

$Val(X):$ set of possible values of random variable $X$.

**Properties:**

- $0 \le p_X(x) \le 1$

- $\sum_{x \in Val(X)} p_X(x) = 1$

- $\sum_{x \in A} p_X(x) = P(X \in A)$

### PDF

For some continuous random variable, $F_x(x)$ is differentiable everywhere. Then PDF can be defined as.

$f_X(x) = \frac{dF_X(x)}{dx}$

So, PDF for continuous random variable may not always exits.

PDF at any given point x is not the probability of that event, i.e., $f_X(x) \neq P(X=x)$ as it can take value larger than 1.

**Properties:**

- $f_X(x) \ge 1$

- $\int_{-\infty}^{\infty} f_X(x) =1$

- $\int_{x \in A} f_X(x) dx = P(X =A)$

### Expectation

- $E[g(X)] = \sum_{x \in Val(X)} g(x) p_X(x)$, $X$ is **discrete** random variable

- $E[g(X)] = \int_{-\infty}^{\infty} g(x)f_X(x)dx$, $X$ is **continuous** random variable

**Properties**

- $E[a] = a$

- $E[af(X)]=aE[f(X)]$, for any constant $a \in R$

- $E[f(X) + g(X)] = E[f(X)] + E[g(X)]$

For discrete random variable $X, E[1\{X=k\}] = P(X=k)$

### Variance

- $Var(X) = E[(X - E(X))^2]$

- $E[(X - E(X))^2] = E[X^2] - E[X]^2$

**Properties**

- $Var[a] = 0$, for any constant $a \in R$.

- $Var[af(x)] = a^2 Var[f(x)]$

### Compilation

![Image.png](https://res.craft.do/user/full/61535040-9e58-412e-39bd-6b33372bf255/doc/220EEC43-DA60-4653-99A2-E9DC5F120EC8/B4D68D2C-8C24-4DEF-A5C6-3B876223BB50_2/7vgc0FLlWhJzZxuI7fpj2eHnQMUTvNLFOtZAPYxubc4z/Image.png)

---

## Two Random Variable

### CDF

- $F_{XY}(x, y) = P(X \le x, Y \le y)$

**Marginal CDF**

- $F_X(x) = \lim_{y \to \infty}F_{XY}(x, y) dy$

- $F_Y(y) = \lim_{x \to \infty}F_{XY}(x, y) dx$

**Properties**

- $0 \le F_{XY}(x, y) \le 1$

- $\lim_{x,y \to \infty} F_{XY}(x, y) = 1$

- $\lim_{x,y \to -\infty} F_{XY}(x, y) = 0$

- $F_X(x) = \lim_{y \to \infty}F_{XY}(x, y)$

### PMF

- $p_{XY}:R \times R \rightarrow [0,1]$

- $p_{XY}(x,y) = P(X=x, Y=y)$

- $p_X(x) = \sum_{y} p_{XY}(x,y)$, marginal probability function.

### Expectation

- $g: R^2 \rightarrow R$

- $E[g(X,Y)] =  \sum_{x \in Val(X)}\sum_{y \in Val(Y)} g(X,Y) p_{XY}(x,y)$, $X, Y$ are **discrete** rv.

- $E[g(X,Y)] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(x,y) f_{XY}(x,y)dxdy$, $X, Y$ are **continuous**  rv.

**Properties**

- $E[f(X,Y) +g(X,Y)] = E[f(X,Y)] + E[g(X,Y)]$

If X and Y are independent, then $E[f(X)g(Y)] = E[f(X)] E[g(Y)]$

### Covariance

- $Cov(X,Y) = E[(X - E[X]) (Y - E[Y])]$

- $Cov (X, Y) = E[XY] - E[X]E[Y]$

**Properties**

- $Var[X+Y] = Var[X] + Var[Y] + 2Cov[X,Y]$

If X and Y are independent, then $Cov(X,Y) = 0$


## Random Vectors

Consider data in the d-dimensional Euclidean Space

- $x = (x^1, ..., x^d) \in R^d$

- $\langle x, y \rangle = \sum_{i=1}^{d} x^iy^i$

- $||x|| =\sqrt{\langle x,x \rangle}$

Consider RV $X \in R^d$ with PDF $p_X : R^d \rightarrow R_{\ge 0}$ providing event A with probability.

- $P(X\in A) = \int_{A} p_X(x)dx$ where $\int p_X(x)dx =1$

To keep notation concise.

- $p_{X_t}$ as $p_t$
- $X \sim p(X)$ as $X \sim p$

### Expectation

- Expected value minimizes the mean squared error.

- $E[X] = {\arg \min}_{z \in R^d} \int {||x-z ||}^2 p_X(x)dx = \int x p_X(x)dx$

- $E[f(X)] = \int f(x) p_X(x)dx$ : *Law of the Unconscious Statistician*

**Conditional densities and expectations**

- $X, Y \in R^d$

- $p_{X,Y}(x,y)$ :  Joint PDF

- $p_Y(y) = \int p_{X,Y}(x,y) dx$  : Marginal PDF

- $p_X(x) = \int p_{X,Y}(x,y) dy$ : Marginal PDF

- $P_{X|Y}(x|y) := \frac{p_{X,Y}(x,y)}{p_Y(y)}$ : Conditional PDF that describes the PDF of the RV $X$ when conditioned on $Y=y$ with density $p_Y(y)>0$.

Using Bayes Rule

- $P_{Y|X}(y|x) = \frac{p_{X|Y}(x|y) p_Y(y)}{p_X(x)}$ where $p_{X} > 0$.

- $E[X|Y=y] := g_{\star}(y) = \int x p_{X|Y}(x|y) dx$ : It is function of y, $g_{\star}(y) : R^d \rightarrow R^d$

- $E[X|Y]$ is a RV assuming values in $R^d$

#### Tower property

- $E[E[X|Y]] = E[X]$ : Detail on variable $E_{Y}[E_{X}[X|Y]] = E_{X}[X]$

- $E[f(X,Y)|Y=y)] = \int f(x,y) p_{X|Y}(x|y) dx$ : *Law of the Unconscious Statistician*

### Covariance

- $\Sigma = E[(X-E[X])(X-E[X])^T]$

### Change of Variables

**Jacobian matrix**

- $J =  \frac{\partial(x_1, x_2)}{\partial(y_1, y_2)}=\begin{bmatrix} \frac{\partial{x_1}}{\partial{y_1}} & \frac{\partial{x_1}}{\partial{y_2}} \\ \frac{\partial{x_2}}{\partial{y_1}} & \frac{\partial{x_2}}{\partial{y_2}} \end{bmatrix}$

- $Y = g(X)$ and $X = h(Y)$. $h$ is inverse of $g$

- $p_Y(y) =  |J| \cdot p_X(h(y))$

**Example use case ( Flow Matching )**

- $X \sim p_X$

- $\psi : R^d \rightarrow R^d$

- $Y = \psi (X)$

Calculate $p_Y(y)$, $E[f(Y)]$

Solution :

- $p_Y(y) = |J| p_X(h(y))$

- $x = h(y) := \psi^{-1}(y)$

$Here, J = \begin{bmatrix} \frac{\partial{x}}{\partial{y}}\end{bmatrix} =\begin{bmatrix} \frac{\partial{ \psi^{-1}(y)}}{\partial{y}}\end{bmatrix}$

Therefore, $p_Y(y) = | \det \partial_{y}\psi^{-1}(y) | \cdot p_X(\psi^{-1}(y))$

Now,

- $E[f(Y)] = \int f(y) p_Y(y) dy = \int f(y) | \det \partial_{y}\psi^{-1}(y) | \cdot p_X(\psi^{-1}(y)) dy$

