# Information Theory

## Entropy

$H(X) = -\sum_{i=1}^{n} p(x_i) \log_2 p(x_i)$

## Information Gain

$IG(T,a) = H(T) - \sum_{v \in values(a)} \frac{|T_v|}{|T|} H(T_v)$

- $IG(T,a)$: Information Gain of dataset $T$ when split on attribute $a$
- $H(T)$: Entropy of the parent dataset
- $\sum_{v \in values(a)}$: Sum over all possible values of attribute $a$
- $|T_v|$ is the number of examples in subset $v$
- $|T|$: is the total number of examples in the parent dataset

## Gini Impurity

$Gini(T) = 1 - \sum_{i=1}^{c} (p_i)^2$

- $c$: Number of classes/categories in the dataset
- $p_i$: Probability (proportion) of data points belonging to class $i$

## Cross Entropy
$H(p,q) = -\sum_{x} p(x) \log q(x)$

## KL-Divergence

$D_{KL}(P||Q) = \sum_{i} P(i) \log \frac{P(i)}{Q(i)}$