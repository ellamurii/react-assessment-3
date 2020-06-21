import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import * as userActions from '../actions/userActions';
import Users from './Users';
import { FETCH_USERS } from '../actionTypes';

jest.mock('../actions/userActions');
const mockStore = configureStore([]);

describe('Redux - Users', () => {
  let store;
  const users = [
    {
      id: 1,
      name: 'Im Nayeon',
      email: 'nayeon@twice.com',
      company: { name: 'JYPE' },
    },
    {
      id: 2,
      name: 'Yoo Jeongyeon',
      email: 'jeongyeon@twice.com',
      company: { name: 'JYPE' },
    },
  ];

  beforeEach(() => {
    store = mockStore({  users  });
    userActions.fetchUsers.mockImplementation(() => ({
      type: FETCH_USERS,
    }));
  });

  test(`should render ${users.length} cards based on user store`, () => {
    const { queryAllByTestId } = render(
      <Provider store={store}>
        <Users />
      </Provider>,
      { wrapper: MemoryRouter }
    );

    const userCards = queryAllByTestId('user-card');
    expect(userCards.length).toBe(users.length);
  });
});
