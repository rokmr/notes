# Activation

## Sigmoid

- $f(x) = \frac{1}{1 + e^{-x}} = \sigma(x)$

- $f'(x) = f(x)(1 - f(x)) = \sigma(x)(1 - \sigma(x))$

<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Kick-Start-AI/refs/heads/main/assets/sigmoid.png' width=70%>
</div>

## Tanh

- $f(x) = \tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}$

- $f'(x) = 1 - \tanh^2(x) = 1 - f^2(x)$

<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Kick-Start-AI/refs/heads/main/assets/tanh.png' width=70%>
</div>

## ReLU

- $f(x) = \max(0, x) = \begin{cases}
x & \text{if } x > 0 \\
0 & \text{if } x \leq 0
\end{cases}$

- $f'(x) = \begin{cases}
1 & \text{if } x > 0 \\
0 & \text{if } x \leq 0
\end{cases}$

<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Kick-Start-AI/refs/heads/main/assets/relu.png' width=70%>
</div>

## Leaky ReLU

- $f(x) = \begin{cases}
x & \text{if } x > 0 \\
\alpha x & \text{if } x \leq 0
\end{cases}$

- $f'(x) = \begin{cases}
1 & \text{if } x > 0 \\
\alpha & \text{if } x \leq 0
\end{cases}$

<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Kick-Start-AI/refs/heads/main/assets/leakyRelu.png' width=70%>
</div>

## ELU (Exponential Linear Unit)

- $f(x) = \begin{cases}
x & \text{if } x > 0 \\
\alpha(e^x - 1) & \text{if } x \leq 0
\end{cases}$

- $f'(x) = \begin{cases}
1 & \text{if } x > 0 \\
\alpha e^x & \text{if } x \leq 0
\end{cases}$

<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Kick-Start-AI/refs/heads/main/assets/elu.png' width=70%>
</div>

## Swish

- $f(x) = x \cdot \sigma(x)$

- $f'(x) = f(x) + \sigma(x)(1 - f(x))$

<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Kick-Start-AI/refs/heads/main/assets/swish.png' width=70%>
</div>

## PReLU (Parametric ReLU)

- $f(x) = \begin{cases}
x & \text{if } x > 0 \\
\alpha x & \text{if } x \leq 0
\end{cases}$

- $f'(x) = \begin{cases}
1 & \text{if } x > 0 \\
\alpha & \text{if } x \leq 0
\end{cases}$

$\alpha :$ Learnable Parameter

<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Kick-Start-AI/refs/heads/main/assets/prelu.png' width=70%>
</div>

## GeLU

- $f(x) = x \cdot \Phi(x)$

- $f'(x) = \Phi(x) + x\Phi(x)$

- $\Phi(x) : \text{Cumulative Distribution Function of Gaussian}$

- $\Phi(x) = \frac{1}{2}\left[1 + \text{erf}\left(\frac{x}{\sqrt{2}}\right)\right] = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^x e^{-\frac{t^2}{2}}dt$

- $\Phi(x) = 0.5 * (1 + \tanh(\sqrt{\frac{2}{\pi}} * (x + 0.044715 * x^3)))$

<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Kick-Start-AI/refs/heads/main/assets/gelu.png' width=70%>
</div>

## Linear

- $f(x) = x$

- $f'(x) = 1$

<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Kick-Start-AI/refs/heads/main/assets/linear.png' width=70%>
</div>