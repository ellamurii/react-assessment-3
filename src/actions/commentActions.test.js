import jsonPlaceholder from '../api/jsonPlaceholder';
import { fetchComments } from './commentActions';
import { FETCH_COMMENTS, LOADING } from '../actionTypes';

jest.mock('../api/jsonPlaceholder');

describe('commentActions', () => {
  let dispatch;
  const data = { message: 'ok' };
  beforeEach(() => {
    dispatch = jest.fn();
    jsonPlaceholder.get.mockImplementation(() => Promise.resolve({ data }));
  });

  test('should call api and dispatch LOADING and FETCH_COMMENTS', async () => {
    await fetchComments(1)(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[0]).toEqual([{ type: LOADING }]);
    expect(jsonPlaceholder.get).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({
      type: FETCH_COMMENTS,
      payload: data,
    });
  });
});
