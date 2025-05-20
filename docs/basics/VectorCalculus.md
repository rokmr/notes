# Vector Calculus

## Basics

### Vector

#### Notations

- $\bar{A} = A_x \hat{i} + A_y \hat{j} + A_z \hat{k}$

- $\bar{B} = B_x \hat{i} + B_y \hat{j} + B_z \hat{k}$

Position vector for point $P(x,y,z) : \bar{OP} = \bar{r} = x \hat{i} + y \hat{j} + z \hat{k}$

- $r = \sqrt{x^2 + y^2 + z^2}$

#### Properties

1. Magnitude
2. Direction
3. Follows vector law of addition

#### Representations

- $\bar{A} = |\bar{A}| \hat{a}_A$

- $\hat{a}_A = \frac{\bar{A} }{ |\bar{A}| }$ : unit vector

- $\bar{AB} = \bar{B} - \bar{A}$

#### Angle between two vectors

- $0 \le \theta_{AB} \le 180^{\circ}$

#### Dot Product

- $\bar{A} \cdot \bar{B} = |\bar{A}| |\bar{B}| \cos \theta_{AB} \rightarrow \text{scalar}$

- $\bar{A} \cdot \bar{B} = 0 \rightarrow \text{perpendicular}$

- $\bar{A} \cdot \bar{B} = |\bar{A}| |\bar{B}|  \rightarrow \text{parallel}$

- $\bar{A} \cdot \bar{B} = - |\bar{A}| |\bar{B}| \rightarrow \text{anti-parallel}$

Example:

- $\bar{A} \cdot \bar{B} = A_xB_x + A_yB_y +A_zB_z$

**Projection**

Projection of $\bar{B}$ in the direction of $\bar{A} = \bar{B} \cdot \hat{a}_A = |\bar{B}| |\hat{a}| \cos \theta_{AB} = |\bar{B}| \cos \theta_{AB}$

#### Cross Product

$\bar{A} \times \bar{B} = |\bar{A}| |\bar{B}| \sin \theta_{AB} \hat{a}_n$

$\hat{a}_n $$: normal perpendicular to plane AB while taking curl from $$\bar{A}$$ to towards $$\bar{B}$

Example:

- $\bar{A} \times \bar{B} = \begin{bmatrix} \hat{i} & \hat{j} & \hat{k} \\ A_x & A_y & A_z \\ B_x & B_y &B_z \end{bmatrix}$

Physical Significance of curl:

- $\text{Area of }\triangle ABC = \frac{1}{2} |\bar{AB} \times \bar{AC} |$

- $\text{Area of }\square ABCD = |\bar{AB} \times \bar{AD} | = \frac{1}{2} |\bar{AC} \times \bar{BD} |$

## Co-ordinate System


### Cartesian Coordinate System

Variables: $(x, y, z)$

**Properties**

- $-\infty < x < \infty$
- $-\infty < y < \infty$
- $-\infty < z < \infty$

### Cylindrical Coordinate System
Variables: $(r, \phi, z)$

**Properties**

- $0 \le r < \infty$
- $0 \le \phi < 2\pi$
- $-\infty < z < \infty$

### Spherical Coordinate System

Variables : $(r, \theta,  \phi)$

**Properties**

- $0 \le r < \infty$
- $0 \le \phi < 2\pi$
- $0 \le \theta \le \pi$


## Vector Operator


**Del/Nabla operator**

- $\nabla = \frac{\partial{}}{\partial{x}}\bf{\hat{i}} +  \frac{\partial{}}{\partial{y}} \bf{\hat{j}} +  \frac{\partial{}}{\partial{z}} \bf{\hat{k}}$: vector

**Laplacian Operator**

- $\nabla \cdot \nabla = \nabla^2 = \frac{\partial^2}{\partial{x^2}}+  \frac{\partial^2}{\partial{y^2}} +  \frac{\partial^2}{\partial{z^2}}$ : scalar

**Scalar-point function**

- $f(x,y,z) : R^3 \rightarrow R$ (output scalar)

Level-surface equation : $f(x,y,z) = c$

**Vector-point function**

- $\bar{F}(x,y,z) : R^3 \rightarrow R^3$(output vector)

- $\bar{F} = F_x\hat{i} + F_y\hat{j} + F_z\hat{k}$

## Differential

### Gradient

Calculated for scalar-point function $f$

!!! warning "Caution"

      Convert function $f$ into the form $f = 0$ before calculating the gradient

$\text{grad} f  \rightarrow \text{vector}$

$\text{grad} f = \nabla f = \nabla f(x,y,z) = (\frac{\partial{f}}{\partial{x}}, \frac{\partial{f}}{\partial{y}}, \frac{\partial{f}}{\partial{z}}) = \frac{\partial{f}}{\partial{x}}\bf{i} +  \frac{\partial{f}}{\partial{y}} \bf{j} +  \frac{\partial{f}}{\partial{z}} \bf{k}$ ( direction is in the dir $f > c$ )

**Properties of gradient**

- $|\nabla f|$: Maximum rate of change in the normal direction of $f$
- $\nabla(r) = \frac{\bar{r}}{r}$
- $\nabla(f(r)) = f'(r)\frac{\bar{r}}{r}$
- $\nabla^2[f(r)] = f''(r) + \frac{2}{r}f'(r)$

**Application of gradient**

1. Directional derivative (D.D.) of $f$ at point $P$ in the direction of $\bar{M} = (\nabla f)_{P} \cdot \hat{a}_M$
2. Angle between to level surface $f_1$ and $f_2$ : $\nabla f_1 \cdot \nabla f_2 = |\nabla f_1| |\nabla f_2| \cos \theta$

### Divergence

Calculated for vector point function $\bar{F}$

- $\nabla \cdot \bar{F} \rightarrow \text{Scalar}$

- $\text{div} \bar{F} =  \nabla \cdot \bar{F} = (\frac{\partial{F_x}}{\partial{x}} + \frac{\partial{F_y}}{\partial{y}} + \frac{\partial{F_z}}{\partial{z}})$

**Physical significance of divergence**

1 . It is only understood at a point. i.e., $(\nabla \cdot \bar{F})_P$

   If $(\nabla \cdot \bar{F})_P$  := positive, $P$ is acting as a source.

   If $(\nabla \cdot \bar{F})_P$  := negative, $P$ is acting as a sink.

2. Solenoidal Vector Field

   $\nabla \bar{F} = 0$,  at all points $(x,y,z)$

   Example: magnetic field, any field lines that makes closed loop

**Properties of divergence**

- $\nabla\cdot \bar{r} = 3$

### Curl

$\nabla \times \bar{F} \rightarrow \text{Vector}$

$\nabla \times \bar{F} = \begin{bmatrix} \hat{i} & \hat{j} & \hat{k} \\ \frac{\partial}{\partial{x}} & \frac{\partial}{\partial{y}} &  \frac{\partial}{\partial{z}} \\ F_x & F_y & F_z \end{bmatrix}$

**Physical significance of curl**

1. It is only understood at a point. i.e., $(\nabla \times \bar{F})_P$

   It represents the capacity of vector field to rotate the point P

2. Irrotational Vector Field/Conservative Vector Field : $(\nabla \times \bar{F})_P = \bar{0}, \forall P$

   $(\nabla \times \bar{E}) = \bar{0}$ , where $\bar{E}$ is static electric field.

**Properties of curl**

- $\nabla \times  \bar{r} = \bar{0}$, where $\bar{r}$ is positional vector.

**Null Identity**

- Scalar: $\nabla \cdot [\nabla \times \bar{A}] = 0$

- Vector: $\nabla \times [\nabla \phi] = \bar{0}$

### Laplacian

$\nabla^2 f = \nabla \cdot (\nabla f) = \frac{\partial^2 f}{\partial{x}^2} + \frac{\partial^2 f}{\partial{y}^2} + \frac{\partial^2 f}{\partial{z}^2}$

**Properties of laplacian**

- Rotation invariant
- $\nabla^2(fg) = f \nabla^2 g + 2(\nabla f \cdot \nabla g) + g \nabla^2 f$
- Laplace's equation: $\nabla^2 f = 0$
- Poisson's equation: $\nabla^2 f = - \rho$

## Integral

### Line Integral

$\int_C \bar{F} \cdot \bar{d}l$

Closed line encircling an Area.

**Non-conservative Vector Field**

- Depends on endpoints
- **Path dependent**
- $\oint_C \bar{F} \cdot \bar{d}l \neq 0$

**Conservative Vector Field**

- Depends on endpoints
- **Path independent**
- $\oint_C \bar{F} \cdot \bar{d}l = 0$
- $F = \nabla f$ for some scalar field
- $\int_A^B \bar{F} \cdot \bar{d}l = f(B) - f(A)$


### Surface Integral

$\int_S \bar{F} \cdot \bar{d}s$ or $\int \int_S \bar{F} \cdot \bar{d}s$

**Open Surface:** Circle, Rectangle etc.

**Closed Surface:** Closed Surface Enclosing a Volume (Hollow).

**Level Surface:** $f(x,y,z) =constant$

**Area Vector:** $\bar{S} =|\bar{S}|\hat{a}_S$

$\hat{a}_S \rightarrow$ always normal to the surface

**Open Surface Integral of Vector Field**

$\int \int_S \bar{F} \cdot \bar{d}s = \psi$

Measure of field lines of Vector $bar{F}$ crossing surface $S$, perpendicularly = Flux

$\psi$ is flux of $\bar{F}$ through $S$

### Volume Integral

$\int \int \int_V V dv$


#### Stoke's Theorem

$\oint_C \bar{A} \cdot \bar{dl} = \int\int_S (\nabla \times \bar{A}) \cdot \bar{ds}$

A is continuous and differential at every point inside C

If **Vector Field** is irrotational then it has to be **Conservative vector field**. But converse is not necessarily true.

If : $\nabla \times \bar{A} = \bar{0}$ then $\oint_C \bar{A} \cdot \bar{dl} = 0$

Inverse Stoke's Theorem :

$\int\int_S (\nabla \times \bar{A}) \cdot \bar{ds} =\oint_C \bar{A} \cdot \bar{dl}$

#### Green's Theorem

$\oint_C M(x,y) dx + N(x,y) dy = \oint M dx + N dy = \int \int_R (\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y})dxdy$ if C is in anti-clockwise direction and if C is in clock-wise direction $-\int \int_R (\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y})dxdy$

M, N are continuous and differential at every point C.

#### Divergence Theorem

$\oint_S \bar{A} \cdot \bar{ds} = \int \int \int_V (\nabla \cdot \bar{A}) dv$