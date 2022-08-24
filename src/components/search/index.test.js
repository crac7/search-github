import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import Search from './index';

test('Write in input', () => {
  render( <Search />);
  fireEvent.change(screen.getByText('search-element'), {target: {value: 'prueba'}})
  console.log(screen.getByText('search-element'));
  expect(screen.getByText('search-element').value).toBe('prueba');

});
