# Note
The data generated is random , please ignore if the image does not matches the product description

# Shopping Cart App

This is a responsive React-based shopping cart application. The app displays a list of products, allows users to filter products by various criteria, and manage their cart for checkout. The app is mobile-friendly and features a dynamic filter system for both small and large screens.

# Check The Deployed Site

https://main--comforting-frangollo-f05cee.netlify.app/

## Features

- **Product Display**: Products are displayed in a grid layout, dynamically adjusted based on the screen size.
- **Cart Management**: Users can add products to their cart and proceed to checkout.
- **Filters**: 
  - Sort products by price (ascending/descending).
  - Filter by stock availability.
  - Filter by fast delivery.
  - Filter by ratings.
- **Responsive Design**: The app adapts to different screen sizes, showing a sidebar filter on large screens and a dropdown filter in mobile view.

## Tech Stack

- **Frontend**: React, Context API for state management, React Router for routing.
- **Styling**: Tailwind CSS, DaisyUI, custom CSS for component-specific styles.
- **Icons**: SVG icons for cart and ratings.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/shopping-cart-app.git
```

2. Navigate to the project directory:

```bash
cd shopping-cart-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

## Components Overview

### `Home.js`

The `Home` component displays the list of products and contains the filter functionality. It features a sidebar filter for larger screens and a dropdown filter for mobile devices.

### `Filters.js`

The `Filters` component allows users to filter products based on stock availability, fast delivery, price, and ratings. The filters adjust dynamically based on user input.

### `SingleProduct.js`

Each product is rendered via the `SingleProduct` component, which displays product information such as name, price, and ratings. Users can add products to their cart from here.

### `Header.js`

The `Header` component includes the navigation bar with links to the home page, a cart icon that displays the number of items in the cart, and a dropdown for checkout.

## CSS Customization

- **Product Layout**: CSS is structured to provide responsive product display across various screen sizes using media queries.
- **Filter Customization**: Filters are styled differently for mobile and desktop views, providing a user-friendly experience.

## Usage

- **Adding Products to Cart**: Users can browse products and click "Add to Cart" to add them to their shopping cart.
- **Viewing and Checking Out**: Users can view their cart by clicking the cart icon in the header and proceed to checkout.
- **Applying Filters**: Filters can be toggled and applied to adjust the product display based on user preferences.

## Contributing

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.


This `README.md` file covers the basic structure, installation, and features of your React-based shopping cart application. You can adjust the file with more specific details about your project as it evolves.

