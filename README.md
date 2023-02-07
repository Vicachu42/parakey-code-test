# Parakey Code test
Code test for parakey where the task was to create a weather application. It shows the forecast for four days with the minimum, maximum, average, and median temperatures calculated. The data is fetched from Open Weather API.
## Get started
- Clone or unzip the repository
- Run `npm install` in terminal
- Go to [Open Weather API](https://openweathermap.org/api), create an account, and create an API key. Once your key has been activated, paste it in the .env file.
- Run `npm start` in the terminal to run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Techincal choices
### React
I chose to use React for a couple of different reasons, one of the being that it's the most widely used framework right now. I also like working in different components, where each is used to different purposes. It makes the work easier to structure.
I considered adding global state management using Redux Toolkit, but since it's just a single page I decided it was too much hassle for little reward.

### Axios
My prefered method of fetching API, since you don't have to parse the JSON data.
### Dotenv
Implemented to keep secrets like API keys.
### Bootswatch
This has a lot of nice and easily available designs. I chose to use this to save time that I rather spend on functions.