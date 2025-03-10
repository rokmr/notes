---
title: Media Examples
tags:
  - media
  - images
  - video
---

# Media Examples

## Images

### Basic Image
![Sample Image](../../assets/images/sample.jpg)

### Image with Caption
<figure markdown>
  ![Sample Image](../../assets/images/sample.jpg)
  <figcaption>A sample image with caption</figcaption>
</figure>

### Responsive Image with Custom Size
![Sample Image](../../assets/images/sample.jpg){ width="300" }

### Image with Lightbox
<figure markdown>
  ![Sample Image](../../assets/images/sample.jpg){ .lightbox }
  <figcaption>Click to enlarge</figcaption>
</figure>

## GIFs

### Animated GIF
![Sample GIF](../../assets/images/sample.gif)

### GIF with Play/Pause Control
<div class="gif-wrapper">
  ![Sample GIF](../../assets/images/sample.gif){ .playable }
</div>

## Videos

### YouTube Video
<div class="video-wrapper">
  <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
          frameborder="0" 
          allowfullscreen>
  </iframe>
</div>

### Local Video
<video controls>
  <source src="../../assets/videos/sample.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## File Downloads

### Document Download
[Download Sample PDF](../../assets/docs/sample.pdf){ .md-button }

## Tips

1. **Image Optimization**
   - Use WebP format for better performance
   - Compress images before uploading
   - Provide appropriate alt text

2. **Video Best Practices**
   - Host large videos on YouTube/Vimeo
   - Use compressed formats for local videos
   - Provide fallback content

3. **GIF Considerations**
   - Use short, optimized GIFs
   - Consider using video for longer animations
   - Provide static image fallbacks 