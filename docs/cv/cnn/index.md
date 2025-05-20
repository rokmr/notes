# Convolutional Neural Network
$W_{new} = \frac{W_{old} - F + 2P}{S} +1$

$H_{new} = \frac{H_{old} - F + 2P}{S} +1$

How is learning kernel is different from regular feed-forward NN?
- Weight Sharing
- Sparse Network


CNN tries to learn ecific characterstics of inputs, different neurons can fire for different characterstics.


## Question

- why cnn is more robust then dnn ? how is it translation invariant ?

??? question "Given two CNN with the same number of parameters, but one is of single layer while other is a 2-layer network. Which one you will choose and why?"

    - 2-layer CNN has better feature learning capability and expressiveness.
        - First layer learns basic features (edges, corners) and second layer combines these to learn more complex patterns
        - Additional ReLU between layers adds more non-linearity
    
??? question "Analyze the differentiability of the MaxPool function commonly used in CNNs?"

    - MaxPool Properties:
        - Non-linear function
        - Not differentiable at points where maximum changes
        - Piece-wise continuous
        - Only one input contributes to output

    - Derivative Behavior:
        - Gradient = 1 for max element
        - Gradient = 0 for all other elements
        - Not defined when two elements are equal