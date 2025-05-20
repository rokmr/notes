# Scheduler

## StepLR

$lr_{epoch} = \begin{cases}
\gamma * lr_{epoch-1}, & \text{if epoch % step_size = 0} \\
lr_{epoch-1}, & \text{otherwise}
\end{cases}$

<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Kick-Start-AI/refs/heads/main/assets/stepLR.png' width=50%>
</div>

## MultiStepLR

$lr_{epoch} = \begin{cases}
\gamma * lr_{epoch-1}, & \text{if epoch in milestones} \\
lr_{epoch-1}, & \text{otherwise}
\end{cases}$

<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Kick-Start-AI/refs/heads/main/assets/multiStepLR.png' width=50%>
</div>


## ExponentialLR

$lr_{epoch} = \gamma * lr_{epoch-1}$

<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Kick-Start-AI/refs/heads/main/assets/exponentialLR.png' width=50%>
</div>

