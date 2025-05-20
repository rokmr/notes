# Optimization

## SGD

$w_{t+1} = w_t - \eta \nabla w_t$

## Momentum Based GD
$update_t = \gamma \cdot update_{t-1} + \eta \nabla w_t$

$w_{t+1} = w_t - update_t$

## Nesterov Accelerated GD

$update_t = \gamma \cdot update_{t-1} + \eta \nabla (w_t- \gamma \cdot update_{t-1})$

$w_{t+1} = w_t - update_t$

## AdaGrad

$v_t = v_{t-1} + (\nabla w_t)^2$

$w_{t+1} = w_t - \frac{\eta}{\sqrt{v_t + \epsilon }}* \nabla w_t$

effective_lr = initial_lr / sqrt(accumulated_squared_gradients + eps)

## RMSProp

$v_t = \alpha * v_{t-1} + (1- \alpha) *(\nabla w_t)^2$

$w_{t+1} = w_t - \frac{\eta}{\sqrt{v_t + \epsilon }}* \nabla w_t$

## Adam

$m_t = \beta_1 * v_{t-1} + (1- \beta_1) * \nabla w_t$

$v_t = \beta_2 * v_{t-1} + (1- \beta_2) *(\nabla w_t)^2$

**Bias Correction**

$\hat{m_t} = \frac{m_t}{1-\beta_1^t}$

$\hat{v_t} = \frac{v_t}{1-\beta_2^t}$


$w_{t+1} = w_t - \frac{\eta}{\sqrt{\hat{v_t} + \epsilon }} * \nabla \hat{m_t}$

## Question

- Derive the backpropagation equations for a 3-layer neural network with the following specifications:
    - Each layer has exactly one neuron
    - Network structure: Input → Hidden Layer 1 (1 neuron) → Hidden Layer 2 (1 neuron) → Output Layer (1 neuron)

??? question "Despite using single samples for gradient estimation, how does Stochastic Gradient Descent (SGD) manage to converge?"

    - Noisy but unbiased estimate of true gradient
    - $E[\nabla L_i] = \nabla L$
    - Converges in expectation