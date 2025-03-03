# Foodie - Burger and Drinks Ordering Website

## Overview
Foodie is an online ordering platform for burgers and drinks, built with React and React Redux. It allows users to browse a menu, add items to their cart, and proceed to checkout. The website also includes an FAQ section with an accordion for easy navigation.

## Tech Stack
- **Frontend:** React, React Redux
- **State Management:** Redux Toolkit
- **Styling:** CSS Modules
- **Routing:** React Router 
- **Deployment:** Vercel

## Features
### 1. Home Page
- Welcomes users with a visually appealing interface.
- Displays featured menu items.

### 2. Menu Page
- Lists all available burgers and drinks.
- Users can filter for burgers, fries, or drinks.
- Add items to the cart.

### 3. Cart and Checkout Page
- View selected items with quantity and price.
- Update or remove items from the cart.
- Proceed to checkout.

### 4. FAQ Page
- Contains common questions and answers.
- Uses an accordion UI for better readability.

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (latest stable version)
- npm or yarn

### Steps to Run Locally
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-repo/foodie.git
   cd foodie
   ```

2. **Install Dependencies**
   ```sh
   npm install  # or yarn install
   ```

3. **Run the Development Server**
   ```sh
   npm start  # or yarn start
   ```

4. **Build and Deploy**
   ```sh
   npm run build
   ```
   Deploy the `build` folder to hosting platforms like Vercel or Netlify.

## State Management (Redux Setup)
- Redux is used to manage cart state.
- Actions and reducers handle adding, updating, and removing cart items.

## Deployment
- The project can be deployed on **Vercel**, **Netlify**, or any hosting provider supporting React applications.
- Use environment variables if needed.

## Contribution
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Commit changes: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature-branch`
5. Create a Pull Request.

## License
This project is licensed under the MIT License.

---


