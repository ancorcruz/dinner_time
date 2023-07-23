import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import RecipeList from './RecipeList';

jest.mock('axios');

describe('RecipeList', () => {
  test('fetches all recipes on component mount', async () => {
    const mockRecipes = [
      { id: 1, title: 'Recipe 1', ingredients: [{ id: 1, name: 'ingredient 1' }, {id: 2, name: 'ingredient 2' }] },
      { id: 2, title: 'Recipe 2', ingredients: [{ id: 3, name: 'ingredient 3' }, {id: 4, name: 'ingredient 4' }] },
    ];
    axios.get.mockResolvedValueOnce({ data: mockRecipes });

    render(<RecipeList />);

    await screen.findByText('Recipe 1');
    expect(screen.getByText('Recipe 1')).toBeInTheDocument();
    expect(screen.getByText('ingredient 1')).toBeInTheDocument();
    expect(screen.getByText('ingredient 2')).toBeInTheDocument();
    expect(screen.getByText('Recipe 2')).toBeInTheDocument();
    expect(screen.getByText('ingredient 3')).toBeInTheDocument();
    expect(screen.getByText('ingredient 4')).toBeInTheDocument();
  });

  test('searches recipes by ingredients', async () => {
    const mockSearchedRecipes = [
      { id: 3, title: 'Recipe 3', ingredients: [{ id: 1, name: 'ingredient 9' }, {id: 2, name: 'ingredient 2' }] },
      { id: 2, title: 'Recipe 2', ingredients: [{ id: 3, name: 'ingredient 2' }, {id: 4, name: 'ingredient 4' }] },
    ];
    axios.get.mockResolvedValue({ data: mockSearchedRecipes });

    render(<RecipeList />);

    const ingredientsInput = screen.getByLabelText('Ingredients:');
    const searchButton = screen.getByRole('button', { name: 'Search' });

    fireEvent.change(ingredientsInput, { target: { value: 'ingredient 9, ingredient 2' } });
    fireEvent.click(searchButton);

    expect(axios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_URL}`,
      {"params": {"ingredients": ["ingredient 9", "ingredient 2"]}}
    )

    await screen.findByText('Recipe 3');
    expect(screen.getByText('Recipe 3')).toBeInTheDocument();
    expect(screen.getByText('ingredient 9')).toBeInTheDocument();
    expect(screen.getByText('Recipe 2')).toBeInTheDocument();
  });
});
