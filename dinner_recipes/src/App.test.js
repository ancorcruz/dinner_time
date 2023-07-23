import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';

jest.mock('axios');

describe('dinner_recipes app', () => {
  test('renders RecipeList', async () => {
    const mockRecipes = [
      { id: 1, title: 'Recipe 1', ingredients: [{ id: 1, name: 'ingredient 1' }, {id: 2, name: 'ingredient 2' }] }
    ];

    axios.get.mockResolvedValueOnce({ data: mockRecipes });

    render(<App />);
    await screen.findByText('Recipe 1');

    expect(screen.getByText('DINNER TIME!')).toBeInTheDocument();
    expect(screen.getByText('Recipe 1')).toBeInTheDocument();
  });
});
