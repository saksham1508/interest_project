# Interest Web Application

## Description
This is a minimal full-stack web application demonstrating capabilities in both front-end and back-end development. The application allows users to send interest messages to other users. If the recipient accepts the interest, both users can chat in real-time.

## Setup Instructions

### Backend (Django)
1. Create and activate a virtual environment:
    ```sh
    python -m venv venv
    source venv/bin/activate
    ```
2. Install the required packages:
    ```sh
    pip install django djangorestframework django-cors-headers djangorestframework-simplejwt channels channels_redis
    ```
3. Run migrations:
    ```sh
    python manage.py migrate
    ```
4. Create a superuser:
    ```sh
    python manage.py createsuperuser
    ```
5. Start the server:
    ```sh
    python manage.py runserver
    ```

### Frontend (React)
1. Install the required packages:
    ```sh
    npm install axios @material-ui/core @material-ui/icons
    ```
2. Start the development server:
    ```sh
    npm start
    ```

## Design Choices
- **Django** for the backend due to its robust framework and built-in admin interface.
- **React** for the frontend for its component-based architecture and state management capabilities.
- **JWT** for authentication to maintain statelessness on the server side.
- **Django Channels** and **WebSocket** for real-time chat functionality.

## Assumptions
- The application is for demonstration purposes, so extensive error handling and edge cases are not fully covered.
- The chat functionality assumes a one-on-one chat, not group chats.

## Next Steps
- Expand test coverage for both backend and frontend.
- Enhance the UI/UX with more polished design and better error handling.
- Implement more advanced features like notifications.
- Deploy the application using services like Heroku or Vercel.

## Tests
To run the backend tests:
```sh
python manage.py test

