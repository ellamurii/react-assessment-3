import React from 'react';
import configureStore from 'redux-mock-store';
import { MemoryRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from "@testing-library/user-event";

import * as userActions from '../actions/userActions';
import * as postActions from '../actions/postActions';
import * as actionTypes from '../actionTypes';
import App from './App';

jest.mock('../actions/userActions');
jest.mock('../actions/postActions');
const mockStore = configureStore([]);

describe('App Routing', () => {
  let store;
  const users = [
    {
      id: 1,
      name: 'Im Nayeon',
      email: 'nayeon@twice.com',
      company: { name: 'JYPE' },
    },
  ];

  const posts = {
    data: [
      {
        id: 1,
        title: 'Twice',
        body: 'best gg',
      },
    ],
  };

  beforeEach(() => {
    store = mockStore({
      users,
      posts,
    });

    userActions.fetchUsers.mockImplementation(() => ({
      type: actionTypes.FETCH_USERS,
    }));

    postActions.fetchPosts.mockImplementation(() => ({
      type: actionTypes.FETCH_POSTS,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render Users component as base url', async () => {
    const { findByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>,
      {
        wrapper: MemoryRouter,
      }
    );
    expect(await findByTestId("users-container")).not.toBeNull();
  });

  test('navigates to posts when a user was clicked', () => {
    const history = createMemoryHistory()
    const { container, queryByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
    const userItem = queryByText(users[0].name);
    userEvent.click(userItem);
    const title = container.querySelector('.header');

    expect(title).not.toBeNull();
    expect(title.textContent).toEqual(`${users[0].name} Posts`);
  });
});
