# TEAM-OZARK
ProfilePlus is a full-stack web application designed to manage team member profiles. Built with React, Node.js, Express, and MongoDB, it allows users to create, view, and manage detailed profiles, including names, roll numbers, academic details, project descriptions, hobbies, certifications, internships, career goals, and profile images.

## Features
- **Add Team Members**: Input member details via a form, with only the name field required. Supports image uploads (JPEG/JPG/PNG).
- **View Team Members**: Display a list of members with key details (name, roll number, year, degree, project description).
- **Member Details**: View comprehensive profiles, including all fields and images.
- **Responsive Design**: User-friendly interface with clean styling.
- **Error Handling**: Clear feedback for invalid inputs or server issues.

## Tech Stack
- **Frontend**: React, Axios, CSS
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB
- **File Uploads**: Multer
- **Environment**: dotenv

## Prerequisites
- **Node.js** (LTS version, e.g., 18.x or 20.x): [Download](https://nodejs.org)
- **MongoDB Community Server** (7.0.x): [Download](https://www.mongodb.com/try/download/community)
- **Git**: For cloning the repository
- **Windows**: Instructions are tailored for Windows (adaptable for other OS)

## Installation and Running
To set up and run **ProfilePlus**, first install Node.js (LTS) from [nodejs.org](https://nodejs.org) and MongoDB Community Server (7.0.x) from [mongodb.com](https://www.mongodb.com/try/download/community), ensuring MongoDB is installed as a service and added to your system Path (`C:\Program Files\MongoDB\Server\7.0\bin`). Clone the repository to your local machine, navigate to `ProfilePlus`, and run `npm install` in both the `backend` and `frontend` directories to install dependencies (React, Express, Mongoose, Multer, Axios). Create a `backend/.env` file with `PORT=5000` and `MONGO_URI=mongodb://localhost:27017/team-blue`, and make an `uploads` folder in `backend` for image storage. Start MongoDB with `Start-Service -Name "MongoDB"`, then run the backend with `cd backend && npm start` (runs on `http://localhost:5000`). In a new terminal, run the frontend with `cd frontend && npm start` (opens `http://localhost:3000`). Access the app in your browser to add and view team member profiles.

## Usage
1. **Add a Team Member**:
   - Go to `http://localhost:3000/add-member`.
   - Fill in the form.
   - Optional: Upload a JPEG/JPG/PNG image.
   - Click **SUBMIT** to save.
   - On success, redirects to the "View Members" page.

2. **View Team Members**:
   - Go to `http://localhost:3000/view-members`.
   - See a list of members with name, roll number, year, degree, and project description.
   - Click **View Details** to see all fields, including hobbies, certifications, internships, and goals.

3. **Troubleshooting**:
   - **"fill all the fields" Error**:
     - Ensure only the `name` field is filled (others are optional).
     - Check backend logs for validation errors.
   - **400 Bad Request**:
     - Verify MongoDB is running.
     - Ensure image is JPEG/JPG/PNG.
     - Check browser console (Inspect > Console) and backend terminal logs.
   - **MongoDB Connection Error**:
     - Confirm `MONGO_URI` in `.env` matches the database (`team-blue` or `team-blue1`).
     - Run:
       ```bash
       mongosh
       use team-blue
       show collections
       ```

## Project Structure
```
ProfilePlus/
├── backend/
│   ├── config/
│   │   └── multer.js
│   ├── models/
│   │   └── Member.js
│   ├── routes/
│   │   └── members.js
│   ├── uploads/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddMember.js
│   │   │   ├── ViewMembers.js
│   │   │   ├── MemberDetails.js
│   │   │   ├── AddMember.css
│   │   │   ├── ViewMembers.css
│   │   │   └── MemberDetails.css
│   └── package.json
└── README.md
```

## Debugging
- **Backend Logs**:
  - Check terminal for:
    - `POST /api/members - Received: {...}`
    - `POST /api/members - Error: {...}`
- **Frontend Logs**:
  - Open browser console (Right-click > Inspect > Console):
    - Look for `Submitting form data: {...}` and `Error adding member: {...}`.
- **Network**:
  - Inspect > Network > `POST http://localhost:5000/api/members` > Check **Response**.
- **MongoDB**:
  - Run:
    ```bash
    mongosh
    use team-blue
    db.members.find().pretty()
    ```

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit changes (`git commit -m "Add YourFeature"`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.
