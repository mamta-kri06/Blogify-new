Blogify - FullStack MERN Blogging Platform

Blogify is a full-stack web application that allows users to create, read, update, and delete blog posts. It includes user authentication, comment functionality, and image uploads.

Deployment

The application is deployed on **Render**.
Deployed Website: https://blogify-new-1.onrender.com/

 Features

- **User Authentication**: Signup, login, and logout functionality.
- **Blog Management**: Users can create, edit, and delete blog posts.
- **Comment System**: Users can comment on blog posts.
- **Image Uploads**: Blogs support cover images via file upload.
- **Role-Based Access**: Admins have additional permissions.
- **Modern UI**: Built using **EJS** templates and responsive design.

## Tech Stack

- **Frontend**: EJS, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via MongoDB Atlas)
- **Authentication**: JWT (JSON Web Tokens) & bcrypt.js
- **File Uploads**: Multer

## Folder Structure

```
Blogify/
├── public/          # Static files
├── routes/          # Express routes
│   ├── blog.js      # Blog-related routes
│   ├── user.js      # User authentication routes
├── models/          # Mongoose models
│   ├── user.js      # User schema
│   ├── blog.js      # Blog schema
│   ├── comment.js   # Comment schema
├── views/           # EJS templates
├── middlewares/     # Custom middlewares
├── services/        # Utility services
├── .env.example     # Sample env file
├── server.js        # Main server file


