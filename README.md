# KICKS/SHARP

A minimalist shoe e-commerce mobile application built with React Native and NativeWind, featuring a modern brutalist design aesthetic with zero border radius and sharp geometric elements.

## Design Philosophy

KICKS/SHARP follows a strict brutalist-lite design language characterized by:

- Zero border radius on all UI elements
- High contrast monochrome color palette
- Heavy use of whitespace and dividing lines
- Industrial and modern aesthetic
- Sharp 90-degree corners throughout

## Tech Stack

- React Native 0.83.1
- NativeWind 4.2.1 - Tailwind CSS for React Native
- React Navigation 7.x - Drawer and Bottom Tab navigation
- Lucide React Native - Icon library
- Functional components with React Hooks

## Features

### Navigation System

**Custom Bottom Tab Bar**
- Rectangular container with top border
- Active tab indicated by bold square underline
- Four main sections: Home, Browse, Cart, Account

**Custom Drawer Navigation**
- Full-height slide-out panel with solid border
- Rectangular menu items with hairline dividers
- Category browsing section
- No rounded elements or shadows

### Screens

**Home Screen**
- Minimalist header with text logo and cart icon
- Full-width hero banner with CTA button
- Horizontal scrolling new arrivals section
- Featured category highlights
- Best sellers showcase

**Product Details Screen**
- Large product image display
- Size selector with square boxes
- Selected size shown as solid black with white text
- Full-width rectangular "Add to Cart" button
- Detailed product information section

**Browse Screen**
- Search functionality
- Category filtering
- Grid layout product display
- Consistent card styling

**Cart Screen**
- Empty state with call-to-action
- Ready for cart item management

**Account Screen**
- User profile section
- Organized menu items by category
- Settings and support options

### Components

**ShoeCard**
- Sharp bordered container
- Product image with brand and price
- Consistent typography hierarchy

**Button**
- Primary and secondary variants
- Full-width and inline options
- Disabled state handling

**CustomBottomTabBar**
- No default native styling
- Sharp geometric design
- Bold active state indicators

**CustomDrawer**
- Solid border instead of shadow
- Rectangular menu blocks
- Category navigation

## Project Structure

```
src/
├── components/
│   ├── Button.jsx
│   ├── CustomBottomTabBar.jsx
│   ├── CustomDrawer.jsx
│   └── ShoeCard.jsx
├── data/
│   └── shoes.json
├── navigation/
│   └── AppNavigator.jsx
└── screens/
    ├── AccountScreen.jsx
    ├── BrowseScreen.jsx
    ├── CartScreen.jsx
    ├── HomeScreen.jsx
    └── ProductDetailsScreen.jsx
```

## Installation

Install dependencies:

```sh
npm install
```

For iOS, install CocoaPods dependencies:

```sh
bundle install
bundle exec pod install
```

## Running the App

Start Metro bundler:

```sh
npm start
```

Run on Android:

```sh
npm run android
```

Run on iOS:

```sh
npm run ios
```

## Development Notes

- All components use NativeWind className props for styling
- Mock data provided in JSON format for product catalog
- Navigation structure uses nested navigators: Stack > Drawer > Bottom Tabs
- Design strictly adheres to zero border radius constraint
- Color palette limited to black, white, and gray tones

## Future Enhancements

- Cart state management
- User authentication
- Product filtering and search
- Order history
- Payment integration
- Wishlist functionality
