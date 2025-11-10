# Backdrop Image Setup

## Important: Add backdrop.jpg to public folder

The portfolio is configured to use `backdrop.jpg` as the background image for the hero section.

### Steps:

1. **Place your backdrop image** in the `public` folder:
   ```
   public/backdrop.jpg
   ```

2. **Image Requirements:**
   - File name must be exactly: `backdrop.jpg`
   - Recommended size: 1920x1080 or larger
   - Format: JPG, PNG, or WebP
   - File size: Optimize for web (under 500KB recommended)

3. **Alternative:** If you want to use a different filename or format:
   - Update `src/components/About.css` line 17:
   ```css
   background-image: url('/your-image-name.jpg');
   ```

### Current Configuration:

The background image is set in `src/components/About.css`:
```css
.about-background {
  background-image: url('/backdrop.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
```

The image has a dark overlay (85% opacity) to ensure text readability.

