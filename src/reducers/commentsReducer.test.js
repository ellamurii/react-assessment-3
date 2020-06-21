import commentsReducer, { initialState } from './commentsReducer';
import { FETCH_COMMENTS, LOADING } from '../actionTypes';

describe('commentsReducer', () => {
  test('should loading flag when action type is LOADING', () => {
    const actual = commentsReducer(initialState, {
      type: LOADING,
    });
    expect(actual).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  test('should update commments and loading flag when action type is FETCH_COMMENTS', () => {
    const comments = ['nayeon', 'twice'];
    const actual = commentsReducer(initialState, {
      type: FETCH_COMMENTS,
      payload: comments,
    });
    expect(actual).toEqual({
      ...initialState,
      data: comments,
      isLoading: false,
    });
  });
});
