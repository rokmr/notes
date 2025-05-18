# Object Detection

## Introduction
The goal of object detection is to predict a set of bounding boxes(x,y,w,h) and category labels for each object of interest.

<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Computer-Vision/refs/heads/main/assets/ObjectDetection.png'height=150>
</div>

## Traditional
### Template Matching + Sliding Window
For every position you evaluate how much do the pixels in the image and template correlate.

**Cons**

1. Does not handle occlusions.
2. Works with instance of object but not with class of it.
3. Does not work if pose changes.
4. Does not work if position, scale and aspect ratio changes.

### Feature Extraction and Classification
Learn multiple weak classifier to build a strong final decision.

#### Feature Extraction
**Viola-Jones Detector**

Haar Features
<div align='center'>
<img src='https://upload.wikimedia.org/wikipedia/commons/8/8a/Haar_Feature_that_looks_similar_to_the_bridge_of_the_nose_is_applied_onto_the_face.jpg' height=100>
<img src='https://upload.wikimedia.org/wikipedia/commons/6/69/Haar_Feature_that_looks_similar_to_the_eye_region_which_is_darker_than_the_upper_cheeks_is_applied_onto_a_face.jpg'height=100>
</div>

**Histogram of Oriented Gradients(HOGs)**
Compute gradients in dense grids, compute gradients and create a
histogram based on gradient direction
<div align='center'>
<img src='https://scikit-image.org/docs/0.25.x/_images/sphx_glr_plot_hog_001.png'height=200>
</div>

**Deformable Part Model (DPM)** Based on HOG features but based on body part detection. More robust to different body poses.
<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Computer-Vision/refs/heads/main/assets/DPM.png' height=150>
</div>

#### Classification
It is done with the help of SVM.


## General Object Detection

- Class agnostic
- Object Proposals / Region of Intrest
    - [Selective search](SelectiveSearch.md)
    - Edge boxes


**Localization**

<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Computer-Vision/refs/heads/main/assets/Localization.png' height=150>
</div>


### Two-Stage Detector

- R-CNN, Fast R-CNN, Faster R-CNN
- SPP-Net, R-FCN, FPN

<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Computer-Vision/refs/heads/main/assets/TwoStageDetector.png' height=150>
</div>

- [Overfeat](Overfeat.md)
- [R-CNN, Fast R-CNN, Faster R-CNN, SPP-Net](RCNN.md)

### One-Stage Detector

No need of Region Proposal Network

They are very fast

- YOLO, SSD, RetinaNet
- CenterNet, CornerNet, ExtremeNet

<div align='center'>
<img src='https://raw.githubusercontent.com/rokmr/Computer-Vision/refs/heads/main/assets/OneStageDetector.png' height=150>
</div>

- [YOLO](YOLO.md)
- [RetinaNet](RetinaNet.md)
- [CornerNet](CornerNet.md)
- [CenterNet](CenterNet.md)
- [ExtremeNet](ExtremeNet.md)

### Transformer-Based Detector
- [DETR](DETR.md)

## Methods
- [Swin Transformer](SwinTransformer.md)
- [DINO](DINO.md)
- [InternImage](InternImage.md)
- [OWL](OWL.md)
