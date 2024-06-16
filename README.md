# Twitter Clone

This project is a basic clone of Twitter's homepage, implemented using React and Bootstrap for the frontend, and Apex Oracle database for data storage and retrieval.

## Preview
Check out the live demo [here](https://mayank-t0mar.github.io/twitter_clone/).

## Features

### Posting Tweets
- Users can post tweets which are then saved in the Apex Oracle database.
- Currently uses a default username: `visitor` and user handle: `@visitor`.

### Retrieving Tweets
- Tweets are fetched from the Apex Oracle database using RESTful services.

### Searching
- Implemented fuzzy search using the [Fuse.js](https://fusejs.io) library.
- Searchable keys include tweets, username, and user handle.
 ![CPT2406151507-701x376](https://github.com/MAYANK-T0MAR/twitter_clone/assets/137810128/40ee2b2a-a566-4003-8e5b-39521891f2af)


## Getting Started

### Prerequisites
- Node.js
- Oracle Apex database setup

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/MAYANK-T0MAR/twitter_clone.git
    ```
2. Navigate to the project directory:
    ```bash
    cd twitter_clone
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application
1. Start the development server:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- `public/`: Contains the public assets and HTML file.
- `src/`: Contains the main source code for the React application.
- `package.json`: Lists the project dependencies and scripts.

## Technologies Used

- **Frontend**: React, Bootstrap
- **Backend**: Apex Oracle Database, RESTful API
- **Libraries**: Fuse.js for fuzzy search


## Acknowledgements

- Inspired by Twitter's homepage design.
- Special thanks to the creators of the libraries and tools used in this project.


