# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Update Your Information
Edit `src/data/portfolioData.js` with your details from your resume.

### 3. Run Locally
```bash
npm start
```
Visit http://localhost:3000 to see your portfolio!

## 📝 What to Update in portfolioData.js

1. **Personal Info**: Name, title, description, email, LinkedIn, GitHub
2. **Education**: Degree, university, years, description
3. **Experience**: Job titles, companies, dates, responsibilities
4. **Skills**: Organized by categories (Cloud & DevOps, Programming Languages, etc.)
5. **Projects**: Project names, descriptions, technologies, links

## 🎨 Features

- ✅ Dark theme with modern design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Animated sections
- ✅ Easy to customize (all data in one file)
- ✅ Ready for Google Cloud deployment

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized build in the `build/` folder.

## ☁️ Deploy to Google Cloud

See `README.md` for detailed deployment instructions.

### Quick Deploy (App Engine):
```bash
npm run build
gcloud app deploy
```

## 📁 Project Structure

```
Portfolio/
├── public/           # Static files
├── src/
│   ├── components/   # React components
│   ├── data/         # Portfolio data (EDIT THIS!)
│   └── ...
├── app.yaml         # Google App Engine config
├── Dockerfile       # Docker config (for Cloud Run)
└── package.json     # Dependencies
```

## 🎯 Next Steps

1. Update `src/data/portfolioData.js` with your information
2. Customize colors in CSS files if desired
3. Test locally with `npm start`
4. Build and deploy to Google Cloud
5. Share your portfolio!

## 💡 Tips

- Keep descriptions concise and impactful
- Use bullet points for experience descriptions
- Add real project links when available
- Update skills to match your expertise
- Test on mobile devices for responsiveness

Happy coding! 🎉

