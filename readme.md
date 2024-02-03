# Node.js Express Nodemailer Example

This is a simple Node.js application that demonstrates how to use Express and Nodemailer to send emails.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm (Node Package Manager): This comes with Node.js, so you don't need to install it separately.

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repository
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory of the project.

2. Add the following environment variables to your `.env` file:

    ```env
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-app-password
    ```

    Replace `your-email@gmail.com` with your Gmail email address and `your-app-password` with the [app password](https://support.google.com/accounts/answer/185833?hl=en) generated for your Gmail account.

## Run the Application

```bash
npm start
