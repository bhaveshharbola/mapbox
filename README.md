# mapbox
Create a World Map Application
Your task is to build a world map application using React and JavaScript. The application should display a map of the world and allow users to click on a country to fetch and display country-specific details such as demographics, geography, and other relevant information.
Timeline :  24 hours 
Requirements:
Map display: Use a map library like Leaflet or Mapbox to display a world map on the application. The map should include zoom and pan functionalities.
Country selection: Implement functionality that allows users to click on a country on the map. When a country is selected, fetch country-specific details using a RESTful API.
API integration: Find a suitable API (e.g., REST Countries API, World Bank API) that provides country-specific data such as demographics, geography, population, or any other information you find interesting. Retrieve the relevant data based on the selected country.
Display country details: Once the data is fetched from the API, display the country-specific details on the screen. This can include information such as the country's name, capital, population, area, languages spoken, currency, and any other data you retrieve from the API.
React components: Organize your code into reusable React components. Use proper component hierarchy and state management to maintain the application's state.
Styling: Apply CSS styles to make your application visually appealing. You can use CSS frameworks like Bootstrap or Material-UI if you prefer.
Bonus (optional):
Implement caching for the API data to avoid unnecessary API calls when selecting the same country multiple times.
Add additional layers or overlays to the map, such as highlighting neighboring countries or displaying specific regions or points of interest.
Include a search bar that allows users to search for a country by name or filter countries based on specific criteria.
Implement error handling and provide a user-friendly message if there are any issues with the API or data retrieval.
Submission Guidelines:
Create a public Git repository (e.g., GitHub, GitLab) for your project.
Include a README file with instructions on how to run the application and any additional notes.
Write clean, readable code with proper comments and documentation.
Add any necessary configuration files or dependencies needed to run the application.
Feel free to enhance the functionality or add extra features to make the application more interactive or visually appealing. 


Good luck with your assignment!

https://api.worldbank.org/v2/countries/COUNTRY_CODE/indicators/SP.POP.TOTL?format=json&api_key=YOUR_API_KEY











