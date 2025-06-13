# Node Task Manager API

This is a Node.js task manager API built by **Gopi Lakke** using Express and MongoDB.  
It allows users to register, authenticate, and manage their tasks. The API follows RESTful principles and provides endpoints for creating, reading, updating, and deleting tasks.

## Installing Node Task Manager API

To install and run the API locally:

1. **Clone the repository**  
   ```bash
   git clone https://github.com/gopilakke/task-manager-api.git
   cd task-manager-api
2.Install the dependencies
npm install

3.Set up environment variables
Rename .env.example to .env and update it with your own environment variables such as:

PORT=3000

MONGODB_URL=your_mongodb_uri

JWT_SECRET=your_jwt_secret

SENDGRID_API_KEY=your_sendgrid_key

EMAIL_FROM=youremail@example.com

4.Start the server
npm start


API Endpoints

Endpoint	Method	Description
/users	POST	Create a new user
/users/login	POST	Log in a user
/users/logout	POST	Log out the current user
/users/logoutAll	POST	Log out user from all sessions
/users/me	GET	Fetch the logged-in user's profile
/users/me	PATCH	Update the logged-in user's details
/users/me	DELETE	Delete the logged-in user's account
/tasks	POST	Create a new task
/tasks	GET	Fetch all tasks of the logged-in user
/tasks/:id	GET	Fetch a specific task by ID
/tasks/:id	PATCH	Update a specific task by ID
/tasks/:id	DELETE	Delete a specific task by ID

🛠️ Technologies Used
Node.js

Express.js

MongoDB + Mongoose

JSON Web Tokens (JWT)

SendGrid API (for optional email notifications)

Multer (for file uploads)

Jest (for testing)

Postman (for API testing)

📁 Folder Structure 
task-manager-api/
│
├── src/
│   ├── db/                # MongoDB connection
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── middleware/        # Auth middleware
│   ├── emails/            # Email logic
│   └── index.js           # Entry point
│
├── tests/                 # Automated tests
├── .env.example           # Sample environment file
├── .gitignore
├── README.md
├── package.json
└── package-lock.json

✍️ Author
Gopi Lakke
https://github.com/gopilakke 

📄 License
This project is licensed under the MIT License.


---

### ✅ Next Steps

To apply:
1. Copy this entire content into your `README.md`.
2. Save the file.
3. Run these commands:

```bash
git add README.md
git commit -m "Updated README with project details by Gopi"
git push origin main
