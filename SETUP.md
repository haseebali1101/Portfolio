# Setup Guide

## Initial Setup

1. **Install Node.js** (if not already installed):
   - Download from: https://nodejs.org/
   - Recommended version: Node.js 18 or higher
   - Verify installation: `node --version` and `npm --version`

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Update Your Portfolio Data**:
   - Open `src/data/portfolioData.js`
   - Update all sections with your information from your resume
   - Save the file

4. **Run Development Server**:
   ```bash
   npm start
   ```
   - The site will open at http://localhost:3000
   - Changes will auto-reload

5. **Build for Production**:
   ```bash
   npm run build
   ```
   - Creates optimized production build in `build/` folder

## Customizing Your Portfolio

### Update Personal Information
Edit `src/data/portfolioData.js`:
```javascript
personal: {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername"
}
```

### Add Education
```javascript
education: [
  {
    degree: "Your Degree",
    university: "University Name",
    year: "Start Year - End Year",
    description: "Details about your education"
  }
]
```

### Add Experience
```javascript
experience: [
  {
    title: "Job Title",
    company: "Company Name",
    period: "Start Date - End Date",
    description: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
      "Achievement or responsibility 3"
    ]
  }
]
```

### Update Skills
```javascript
skills: {
  "Category Name": [
    "Skill 1", "Skill 2", "Skill 3"
  ],
  "Another Category": [
    "Skill 4", "Skill 5"
  ]
}
```

### Add Projects
```javascript
projects: [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["Tech1", "Tech2", "Tech3"],
    link: "https://project-link.com"
  }
]
```

## Styling

The portfolio uses a dark theme with blue/purple accents. To customize colors:
- Main colors are defined in component CSS files
- Primary gradient: `#4a90e2` to `#7b68ee`
- Background: `#0a0a0a` and `#0f0f0f`
- Text: `#e0e0e0` and `#c0c0c0`

## Deployment

See the main README.md for Google Cloud deployment instructions.

