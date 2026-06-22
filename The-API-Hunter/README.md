# 🕵️ The API Hunter

The API Hunter is a responsive web application that allows users to search GitHub profiles and compare two GitHub users in **Battle Mode**. It uses the GitHub REST API to fetch user information and repositories dynamically.

---

## 🚀 Features

### Phase 1
- Search GitHub users
- Loading state while fetching data
- Error handling for invalid usernames (404)

### Phase 2
- Fetch and display the latest 5 repositories
- Repository links open directly on GitHub
- Dynamic DOM rendering

### Phase 3
- Single User Mode
- Battle Mode
- Compare two GitHub users simultaneously
- Uses `Promise.all()` for parallel API requests
- Calculates total stars using `reduce()`
- Determines Winner 🟢 and Loser 🔴
- Displays battle results visually

---

## 📸 Preview

### Single User Mode
- Search any GitHub username
- View profile information
- View latest repositories

### Battle Mode
- Compare two GitHub users
- Total stars from repositories are calculated
- User with more stars becomes the winner

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- GitHub REST API

---

## 📂 Project Structure

```
project-folder/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/VivekBhardwaj80/ProdeskIT/tree/main/The-API-Hunter
```

### Move into the project folder

```bash
cd The-API-Hunter
```

### Open the project

Simply open:

```text
index.html
```

in your browser.

---

## Live Demo

```text
https://the-api-hunter.vercel.app/
```

## 🔗 GitHub API Endpoints Used

### User Information

```text
https://api.github.com/users/{username}
```

### Latest Repositories

```text
https://api.github.com/users/{username}/repos?sort=created&per_page=5
```

### All Repositories (Battle Mode)

```text
https://api.github.com/users/{username}/repos?per_page=100
```

---

## 🧠 JavaScript Concepts Used

- DOM Manipulation
- Event Listeners
- Async/Await
- Fetch API
- Error Handling
- Template Literals
- Array Methods
  - `forEach()`
  - `reduce()`
- Promise.all()
- Dynamic Rendering

---

## 📱 Responsive Design

The application is fully responsive and works on:

- Desktop
- Tablet
- Mobile Devices

---

## Example Usernames

Try searching:

- `torvalds`
- `gaearon`
- `octocat`
- `facebook`
- `vercel`

### Battle Examples

- `torvalds` vs `gaearon`
- `octocat` vs `vercel`
- `facebook` vs `microsoft`

---

## Future Improvements

- Dark/Light Theme
- Search History
- Followers and Following Count
- Repository Language Statistics
- Most Starred Repository
- Pagination
- GitHub Contribution Graph
- Profile Sharing

---

## Author

Vivek Sharma

---

## License

This project is open-source and available under the MIT License.