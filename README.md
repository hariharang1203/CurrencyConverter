Currency Converter
Overview
The Currency Converter is a simple web application that allows users to convert one currency to another using real-time exchange rates. The application fetches up-to-date exchange rates from the Frankfurter API and performs the conversion based on user input.

Features
Real-Time Exchange Rates: Fetches the latest currency exchange rates from the Frankfurter API.
User-Friendly Interface: Simple and intuitive design for easy currency conversion.
Responsive Design: Works seamlessly on various devices, including desktops and tablets.

Technologies Used
HTML5: Structure and content of the webpage.
CSS3: Styling and layout.
JavaScript (ES6+): Fetching data from the API and handling user interactions.
Frankfurter API: Source of the currency exchange rates.
Project Structure

├── index.html           # The main HTML file
├── css
│   └── style.css        # Custom CSS for styling the webpage
└── js
    └── script.js        # JavaScript for fetching data and handling user interactions

API Reference
This project uses the Frankfurter API to fetch the latest exchange rates. Below is a brief description of the endpoints used:

GET /currencies: Fetches the list of available currencies.
GET /latest: Retrieves the latest exchange rate for the selected currencies.
