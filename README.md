# Dinner Time Recipe Finder

This application is a simple prototype to help users find the most relevant recipes they can prepare with the ingredients they have at home. The backend is a Ruby on Rails JSON API, and the frontend is a basic React application that consumes the backend API. The main objective is to deliver a usable prototype, focusing on the core functionality and implementation details.

## Table of Contents

[[_TOC_]]

## Tech Stack

- Backend: Ruby on Rails with PostgreSQL database, React and FactoryBot
- Frontend: React, Axios, Jest

## Setup Instructions

To set up the app locally, follow these steps:

### Backend Setup

1. Clone the repository.
2. Navigate to the app directory.
3. Install the required gems by running:
```
bundle install
```

4. Set up the database:
```
rails db:setup
```

5. Seed the database with sample recipes and ingredients:
```
rails db:seed
```

6. Start the Rails server:
```
rails server
```
The backend API will be accessible at `http://localhost:3000`.

### Frontend Setup

1. Navigate to the frontend app `dinner_recipes`.
2. Install the required dependencies by running:
```
npm install
```

3. Start the React development server:
```
npm start
```
The frontend application will be accessible at `http://localhost:3001`.

## Testing

### Backend

The app uses RSpec and FactoryBot for backend testing. No particular reason, these tools makes the task easier.

To run the tests, execute the following command:

```
rspec
```

### Frontend

The app uses Jest for frontend testing. To run the tests, execute the following command:

```
npm test
```

### Code Standard

The application code follows Ruby community standard enforced by `standard` gem.

## API Endpoints

### Get Relevant Recipes

Endpoint: `GET /api/v1/recipes`

Description: Get a list of relevant recipes.

Parameters:
- `ingredients[]`: ingredients to filter by (available at home).

Example Request:
```
GET /api/v1/recipes?ingredients[]=eggs&ingredients[]=cream
```

<details>
<summary>Example Response:</summary>

TO BE DEFINED

</details>
