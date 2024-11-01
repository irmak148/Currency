Currency Conversion App
This is a simple currency conversion application built with React, Axios, and Material-UI. It allows users to convert amounts between different currencies using the Free Currency API.

Features
Convert amounts between USD, EUR, and TRY.

Swap currencies with a button click.

Display conversion results.

Handle errors and display notifications using React Toastify.

Installation
Clone the repository:

bash

Copy

git clone https://github.com/yourusername/currency-conversion-app.git
cd currency-conversion-app
Install the dependencies:

bash

Copy
npm install
Start the development server:

bash

Copy
npm start
Usage
Enter the amount you want to convert.

Select the currencies you want to convert from and to.

Click the "Convert" button to see the conversion result.

Press the "Tab" key to swap the currencies.

Press the "Enter" key to perform the conversion.

Code Overview
Components
Currency: The main component that handles the currency conversion logic and UI.

Dependencies
axios: For making HTTP requests to the Free Currency API.

react-toastify: For displaying notifications.

@mui/material: For Material-UI components.

@mui/icons-material: For Material-UI icons.

API
Free Currency API: Used to fetch the latest currency exchange rates.
