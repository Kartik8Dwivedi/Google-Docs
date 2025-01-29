# Google Docs Clone - Collaborative Real-Time Document Editor

This project is a Google Docs clone that allows multiple users to collaboratively edit a document in real time. It uses WebSockets for real-time updates, MongoDB for document storage, and Quill.js for the rich text editor.

## Features

- Real-time collaborative editing.
- Auto-saving every 2 seconds.
- Rich text editing with Quill.js (bold, italic, lists, etc.).
- Documents stored in a MongoDB database.

## Tech Stack

- **Backend**: Node.js, Socket.io, MongoDB, Express
- **Frontend**: React, Quill.js, React Router

## Installation

### Prerequisites

- Node.js (v14+)
- MongoDB (or MongoDB Atlas)

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/google-docs-clone.git
   cd google-docs-clone/backend
2. TODO

## How It Works

### Backend
1. The server listens for WebSocket connections and handles real-time updates.
2. Users can request a document by ID (`get-document` event).
3. The server sends the document contents to the user and joins them to a WebSocket room for that specific document.
4. Users send changes via the `send-changes` event, and the server broadcasts these changes to all connected users.
5. The document is periodically saved to the database using the `save-document` event.

### Frontend
1. The frontend uses a Quill.js editor for rich text editing.
2. It connects to the backend via WebSocket to handle real-time document updates.
3. When users make changes, they are sent to the backend via the `send-changes` event.
4. The frontend listens for the `receive-changes` event and updates the document content in real time.
5. Every 2 seconds, the frontend sends the document's contents to the backend to save the document.

## File Structure

    google-docs-clone/
    │
    ├── backend/
    │   ├── controllers/
    │   │   └── document.controller.js    # Document fetching and updating logic
    │   ├── database/
    │   │   └── db.js                     # MongoDB connection
    │   ├── server.js                     # WebSocket server
    │
    └── frontend/
        ├── src/
        │   ├── components/
        │   │   └── Editor.js             # Quill.js editor component
        │   ├── App.js                    # Main app component
        │   ├── index.js                  # React app entry point
        └── public/
            └── index.html                # HTML template for frontend

## Future Enhancements

- **User Authentication**: Implement user login functionality to manage users.
- **Version History**: Enable document versioning and display past revisions.
- **Real-time Notifications**: Notify users about changes or comments made to documents.

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
