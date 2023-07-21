# API Data Viewer

API Data Viewer is a versatile web application that allows users to fetch and view data from various APIs based on user inputs. Users can interact with the application by entering relevant parameters, such as ID or keywords, and the application dynamically communicates with the specified API endpoints to retrieve the corresponding data. The fetched data is then displayed in a user-friendly format for easy viewing.

## Technologies Used

- HTML
- CSS
- JavaScript (for frontend)
- Express.js (for backend)
- Fetch API (for making API requests)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/dv-udit/API-Data-Viewer
cd api-data-fetcher
```

2. Install dependencies:
```
npm install
```

3. Start the server:
```
node server.js
```

## How it Works

The user opens the application in the browser and sees an input box and a "Submit" button.

The user enters a parameter (e.g., ID or keyword) in the input box and clicks the "Submit" button.

When the "Submit" button is clicked, the frontend JavaScript sends a POST request to the Express.js backend with the user input as the request payload.

The Express.js backend receives the POST request and uses the Fetch API to make a request to the external API (e.g., JSONPlaceholder).

The external API returns the relevant data based on the user's input.

The Express.js backend sends the fetched data as a JSON response to the frontend.

The frontend JavaScript handles the JSON response and updates the HTML to display the fetched data on the page.

