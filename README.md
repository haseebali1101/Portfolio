# Portfolio Website

A modern, dark-themed portfolio website built with React, designed for deployment on Google Cloud Platform.

## Features

- Dark theme with smooth animations
- Responsive design for all devices
- Sections: About, Education, Experience, Skills, Projects, Contact
- Smooth scrolling navigation
- Modern UI with gradient accents

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Cloud SDK (for deployment)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## Deployment to Google Cloud

### Prerequisites for Deployment

1. Install Google Cloud SDK:
   - Download from: https://cloud.google.com/sdk/docs/install
   - Or use: `curl https://sdk.cloud.google.com | bash`

2. Authenticate and initialize:
```bash
gcloud init
gcloud auth login
```

### Option 1: Google App Engine (Recommended for Static Sites)

1. Create a new project (or use existing):
```bash
gcloud projects create your-project-id
gcloud config set project your-project-id
```

2. Enable App Engine:
```bash
gcloud app create --region=us-central
```

3. Install dependencies and build the React app:
```bash
npm install
npm run build
```

4. Deploy to App Engine:
```bash
gcloud app deploy
```

5. View your deployed site:
```bash
gcloud app browse
```

### Option 2: Google Cloud Run (For Containerized Deployment)

1. Set your project ID:
```bash
export PROJECT_ID=your-project-id
gcloud config set project $PROJECT_ID
```

2. Enable required APIs:
```bash
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
```

3. Build and deploy:
```bash
gcloud builds submit --tag gcr.io/$PROJECT_ID/portfolio
gcloud run deploy portfolio --image gcr.io/$PROJECT_ID/portfolio --platform managed --allow-unauthenticated
```

### Option 3: Google Cloud Storage (Static Website Hosting)

1. Create a bucket:
```bash
gsutil mb -p your-project-id -c STANDARD -l US gs://your-bucket-name
```

2. Enable static website hosting:
```bash
gsutil web set -m index.html -e index.html gs://your-bucket-name
```

3. Build and upload:
```bash
npm run build
gsutil -m rsync -r build/ gs://your-bucket-name
```

4. Make bucket publicly accessible:
```bash
gsutil iam ch allUsers:objectViewer gs://your-bucket-name
```

## Customization

**Easy Update**: All portfolio content is centralized in one file for easy customization!

Update `src/data/portfolioData.js` with your information:
- Personal information (name, title, description, contact)
- Education history
- Work experience
- Skills organized by category
- Projects with descriptions and technologies

The components will automatically use this data. No need to edit individual component files!

## Technologies Used

- React 18
- CSS3 (Custom styling with dark theme)
- Google App Engine / Cloud Run

## License

MIT License

