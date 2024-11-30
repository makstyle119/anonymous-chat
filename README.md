# Anonymous Chat

A minimalistic, privacy-focused Next.js application enabling quick, anonymous chats with a **15-minute limit** for messages. This project emphasizes simplicity, security, and user anonymity with no login or tracking required.

---

## Features

- **Anonymous Messaging:** Send and receive messages instantly without creating an account.
- **Time-Limited Chats:** Messages automatically disappear after 15 minutes for enhanced privacy.
- **Responsive Design:** Fully optimized for both mobile and desktop users.
- **Modern Stack:** Built using Next.js, Tailwind CSS, and Firebase for real-time functionality.

---

## Live Demo

Check out the application here: [Anonymous Chat](https://anonymous-chat-mak-writing-house.vercel.app/)

---

## Folder Structure

Here’s a clean and scalable folder structure for the project:

```
📂 project-root
├── 📂 public/ // Public assets (favicon, logos, etc.)
├── 📂 src/
│ ├── 📂 app/ // Next.js pages (Home, About, etc.)
│ ├── 📂 components/ // Reusable UI components (Header, Footer, etc.)
│ └── 📂 utils/ // Utility functions (formatting, etc.)
├── .env.local // Environment variables (Firebase config, etc.)
├── package.json // Project dependencies
├── next.config.js // Next.js configuration
└── tailwind.config.js // Tailwind CSS configuration
```

---

## Technical Details

### Frontend

- **Framework:** Next.js
- **Styling:** Tailwind CSS
- **State Management:** React `useState` and Firebase real-time listeners

### Backend

- **Database:** Firebase Firestore (Real-time Database)

### Deployment

- **Hosting:** Vercel for frontend hosting and testing.
- **Scalability:** Firebase handles scalability for the backend seamlessly.

---

## Installation

1. **Clone the repository:**

```
   bash
   git clone https://github.com/your-username/anonymous-chat.git
   cd anonymous-chat
```

2. **Install dependencies:**

```
npm install
```

3. **Set up environment variables:**

Create a `.env.local` file with the following variables (replace placeholders with your Firebase project details):

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. **Run the development server:**

```
npm run dev
```

Open your browser at `http://localhost:3000`.

---

## Contributing

Contributions are welcome!\
Feel free to open an issue or submit a pull request. For major changes, discuss them with the maintainers first.

---

## Contact

For queries or feedback, reach out to us:
- **Support Email**: [support@makwritinghouse.com](mailto:support@makwritinghouse.com)
