import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import CommentCard from '../components/CommentCard';

describe('<CommentCard />', () => {
  const comment = {
    name: 'Nayeon',
    email: 'nayeon@twice.com',
    body: 'Face of the group',
  };

  const setup = () => {
    return render(<CommentCard comment={comment} />, {
      wrapper: MemoryRouter,
    });
  };

  describe('renders', () => {
    test('should render component without error', () => {
      const { queryAllByTestId } = setup();
      const commentCard = queryAllByTestId('comment-card');
      expect(commentCard.length).toBe(1);
    });

    test('should render card details', () => {
      const { queryByTestId } = setup();
      const cardHeader = queryByTestId('card-header');
      const cardMeta = queryByTestId('card-meta');
      const cardDesc = queryByTestId('card-description');
      expect(cardHeader.textContent).toBe(comment.name);
      expect(cardMeta.textContent).toBe(comment.email);
      expect(cardDesc.textContent).toBe(comment.body);
    });
  });
});
