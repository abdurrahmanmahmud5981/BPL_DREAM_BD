
## Private For your Assignment

you have to create private repo in our Google Classroom . here is the Link

# [https://classroom.github.com/a/8giEjBQc](https://classroom.github.com/a/8giEjBQc)



Welcome to **Assignment -07**. This assignment involves building a React-based application where users can select and manage cricket players for a team, following the design from Figma. You'll create a responsive UI, handle player selection, coin limitations, and complete the system following the requirements written below:

---

### Navbar

- The Navbar should match the Figma design and be responsive.
- Display the user's money in the Navbar, initially it will be 0. 

### Banner

- Design the banner with a heading, text, background, and button as per Figma.
- Everytime On clicking the button, the user's coin  will increase so that user can buy player.

### Main Section Design and Toggling Feature

- Create two buttons at the top-right of the section. Available  & Selected
- Selected button will show how many players are selected as in Figma , initially it will be 0.
- Display Available Player section by default.
- Display Selected Player Count in selected Player component as in figma.

### Player Data

- Create a JSON file for  10-15 players, each having information like playerId, name, country, image, role, batting/bowling type, and bidding price.
- You can create this JSON with AI systems such as Gemini , ChatGPT

### Display Players

- Show all players in a card layout (3 columns recommended ) with the player's details
- Show Players name, country, image, role, batting/bowling type, and bidding price.
- Their will be a  "Choose Player" button on each card. on Clicking it following will happen.

### Choose Player Functionality

- on Click "Choose Player" button ,  check if user have available coin or not.
- show an alert if user dont have available coin.  
- Otherwise, add the player to the selected players list.

### Selected Players

- Display selected players' details in a card with one-column layout
- Each card will have player image , name ,  player role, price. 
- a remove button for each player.

### Newsletter Section

- Design the newsletter section according to Figma.

### Footer

- Design the footer section following the Figma design.

---

### Challenges

- **Use React-Toastify**:
  Replace all alerts in the interface with `React-Toastify` for better user notifications.

- **Implement Selected Player Remove Functionality**:
  Add a "Remove" button to each selected player card. On click, the player should be removed from the selected players' section.

- **Add More Player Button Functionality **:
  Implement an "Add More Players" button. On click, it should display the available player section again for the user to choose from.

- **Implement The Perfect Validation on Player selection**:
      - on clicking choose, player,  if player selected previously then show user an alert and terminate.
      - if the selected player is already 6 then , show an alert and terminate
 - **Change Your Web-Application Title**:
   change the web application title. If it show Vite-react some marks will be deducted.  
  


- **Beautify GitHub Repository **:
  Create an attractive `README.md` for your GitHub repository with the following:
  - Name of your project.
  - A brief description.
  - Technologies used.
  - 3 key features of your project.

---

### Optional Feature

- Implement a login experience in the newsletter section using LocalStorage.
- On subscribing, store the user's email and display a personalized message on reload if the email exists in LocalStorage.




# Cricket Player Selection App

This is a React-based application designed to allow users to select and manage cricket players for a team, following the provided Figma design. The application features a responsive UI, player selection, coin limitations, and various functionalities.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React-Toastify: A React component for displaying notifications.
- React-Bootstrap: A popular library for building responsive and mobile-first components.
- Axios: A promise-based HTTP client for making API requests.

## Key Features

1. **Navbar**: Displays the user's money and is responsive across different devices.
2. **Banner**: Provides a heading, text, background, and a button to increase the user's coin.
3. **Main Section**: Offers two buttons to toggle between the Available and Selected players sections.
4. **Player Data**: Displays players in a card layout with their details, including name, country, image, role, batting/bowling type, and bidding price.
5. **Choose Player Functionality**: Allows users to select players by clicking the "Choose Player" button. Checks for available coins and displays alerts accordingly.
6. **Selected Players**: Displays the selected players' details in a card layout. Includes a remove button for each player.
7. **Newsletter Section**: Provides a design for the newsletter section.
8. **Footer**: Displays the footer section with the required design.

## Optional Features

1. **Login Experience**: Implements a login experience in the newsletter section using LocalStorage.
2. **Personalized Message**: On subscribing, stores the user's email and displays a personalized message on reload if the email exists in LocalStorage.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/cricket-player-selection-app.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.