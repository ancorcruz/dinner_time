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

```
[
    {
        "id": 7123,
        "title": "Baileys \u00e0 la French Toast",
        "cook_time": 6,
        "prep_time": 5,
        "ratings": 4,
        "cuisine": "",
        "category": "Everyday Cooking",
        "author": "Baileys",
        "image": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5983211.jpg",
        "created_at": "2023-07-06T19:39:45.023Z",
        "updated_at": "2023-07-06T19:39:45.023Z",
        "ingredients": [
            {
                "id": 68463,
                "recipe_id": 7123,
                "name": "\u00bd ounce Baileys\u00ae Original Irish Cream",
                "created_at": "2023-07-06T19:39:45.026Z",
                "updated_at": "2023-07-06T19:39:45.026Z"
            },
            {
                "id": 68464,
                "recipe_id": 7123,
                "name": "4 ounces whipping cream",
                "created_at": "2023-07-06T19:39:45.026Z",
                "updated_at": "2023-07-06T19:39:45.026Z"
            },
            {
                "id": 68465,
                "recipe_id": 7123,
                "name": "2 tablespoons confectioners' sugar",
                "created_at": "2023-07-06T19:39:45.026Z",
                "updated_at": "2023-07-06T19:39:45.026Z"
            },
            {
                "id": 68466,
                "recipe_id": 7123,
                "name": "2 \u00bd ounces Baileys\u00ae Original Irish Cream",
                "created_at": "2023-07-06T19:39:45.026Z",
                "updated_at": "2023-07-06T19:39:45.026Z"
            },
            {
                "id": 68467,
                "recipe_id": 7123,
                "name": "2 \u00bd ounces whipping cream",
                "created_at": "2023-07-06T19:39:45.026Z",
                "updated_at": "2023-07-06T19:39:45.026Z"
            },
            {
                "id": 68468,
                "recipe_id": 7123,
                "name": "\u00bd teaspoon vanilla extract",
                "created_at": "2023-07-06T19:39:45.026Z",
                "updated_at": "2023-07-06T19:39:45.026Z"
            },
            {
                "id": 68469,
                "recipe_id": 7123,
                "name": "2 eggs",
                "created_at": "2023-07-06T19:39:45.026Z",
                "updated_at": "2023-07-06T19:39:45.026Z"
            },
            {
                "id": 68470,
                "recipe_id": 7123,
                "name": "2 thick slices bakery-style bread",
                "created_at": "2023-07-06T19:39:45.026Z",
                "updated_at": "2023-07-06T19:39:45.026Z"
            },
            {
                "id": 68471,
                "recipe_id": 7123,
                "name": "1 tablespoon butter",
                "created_at": "2023-07-06T19:39:45.026Z",
                "updated_at": "2023-07-06T19:39:45.026Z"
            },
            {
                "id": 68472,
                "recipe_id": 7123,
                "name": "3 \u00bd tablespoons dark chocolate chips, melted",
                "created_at": "2023-07-06T19:39:45.026Z",
                "updated_at": "2023-07-06T19:39:45.026Z"
            }
        ]
    },
    {
        "id": 2283,
        "title": "Cream Tart Number Cake",
        "cook_time": 10,
        "prep_time": 30,
        "ratings": 5,
        "cuisine": "",
        "category": "Dessert Tarts",
        "author": "Sandra Garth",
        "image": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6434357.jpg",
        "created_at": "2023-07-06T19:39:19.815Z",
        "updated_at": "2023-07-06T19:39:19.815Z",
        "ingredients": [
            {
                "id": 22238,
                "recipe_id": 2283,
                "name": "2 matching letter or number stencils",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            },
            {
                "id": 22239,
                "recipe_id": 2283,
                "name": "\u00be cup softened butter",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            },
            {
                "id": 22240,
                "recipe_id": 2283,
                "name": "\u00be cup white sugar",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            },
            {
                "id": 22241,
                "recipe_id": 2283,
                "name": "2 eggs, slightly beaten",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            },
            {
                "id": 22242,
                "recipe_id": 2283,
                "name": "2 teaspoons vanilla extract",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            },
            {
                "id": 22243,
                "recipe_id": 2283,
                "name": "2 teaspoons cream cheese flavoring",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            },
            {
                "id": 22244,
                "recipe_id": 2283,
                "name": "2 \u00bc cups all-purpose flour",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            },
            {
                "id": 22245,
                "recipe_id": 2283,
                "name": "2 \u00bc teaspoons baking powder",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            },
            {
                "id": 22246,
                "recipe_id": 2283,
                "name": "\u00bd teaspoon salt",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            },
            {
                "id": 22247,
                "recipe_id": 2283,
                "name": "\u00bd teaspoon ground cinnamon",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            },
            {
                "id": 22248,
                "recipe_id": 2283,
                "name": "1 (8 ounce) package cream cheese",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            },
            {
                "id": 22249,
                "recipe_id": 2283,
                "name": "1 cup sifted confectioners' sugar",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            },
            {
                "id": 22250,
                "recipe_id": 2283,
                "name": "1 cup heavy cream, chilled",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            },
            {
                "id": 22251,
                "recipe_id": 2283,
                "name": "1 1/2 teaspoons cream cheese flavoring",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            },
            {
                "id": 22252,
                "recipe_id": 2283,
                "name": "1 teaspoon vanilla extract",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            },
            {
                "id": 22253,
                "recipe_id": 2283,
                "name": "12 blackberries, or to taste",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            },
            {
                "id": 22254,
                "recipe_id": 2283,
                "name": "12 strawberries, or to taste",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            },
            {
                "id": 22255,
                "recipe_id": 2283,
                "name": "12 yogurt-covered pretzels, or to taste",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            },
            {
                "id": 22256,
                "recipe_id": 2283,
                "name": "small faux flowers",
                "created_at": "2023-07-06T19:39:19.818Z",
                "updated_at": "2023-07-06T19:39:19.818Z"
            }
        ]
    }
]
```

</details>
