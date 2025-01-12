# TH-demo-2025
demo project 

Project Name: Demo2025
Description
Demo2025 is a web application designed to showcase some of my skills as a full-stack web developer. This project was intended as a demo project for TalentHive

Technologies Used
Frontend
React.js
As it was required by the company
React Bootstrap
MDBReact (Material Design for Bootstrap)


Used for additional UI components with Material Design principles.
Includes components like cards, buttons, text areas, and more.

Backend
Firebase
Authentication: Handles user sign-in and sign-up functionality.
Firestore: A NoSQL database to store and manage user comments with real-time updates.

Deployment
Firebase Hosting


Used for deploying the project.
Provides a global CDN for fast and secure content delivery.
GitHub Actions


Configured for CI/CD pipeline.
Automates build and deployment processes upon repository updates.

Features
Authentication


Users can sign up and log in using Firebase Authentication.
Commenting System


Users can post reviews, which are displayed in real-time.
Each review includes a timestamp and user’s email (not ideal).
Comments are sorted so the most recent appear first.
Responsive Design


The application is optimized for various screen sizes using React Bootstrap and custom CSS.
Secure Deployment


Hosted on Firebase Hosting with HTTPS and other built-in security measures.

Getting Started
Prerequisites
Node.js: Ensure you have Node.js installed on your system.
Firebase CLI: Install Firebase CLI for deployment.
Installation
Clone the repository:
 git clone https://github.com/kasari-devs/TH-demo-2025.git


Navigate to the project directory:
 cd TH-demo-2025


Install dependencies:
 npm install


Running Locally
Start the development server:
 npm start


Open your browser and visit:
 http://localhost:3000


Build and Deploy
Build the project:
 npm run build


Deploy to Firebase:
 firebase deploy



Folder Structure
/public: Static files served by the app.
/src: Contains application source code.
/components: Reusable React components.
/config: Firebase configuration files.
/contexts: Context API for managing authentication.
/assets: Stylesheets and other static assets.

Future Enhancements
Add a "Like" feature for reviews.
Unable the user to edit/delete reviews
Each user should have a unique username (not implemented since sign-up was not part of the task)
Implement user profiles with avatars.
Enhance security using more server-side validation.
Add internationalization support for multiple languages.

Author
Kasra Ariyaeimehr

License
This project is licensed under the MIT License.


