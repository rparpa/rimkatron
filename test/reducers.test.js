import expect from 'expect';
import homeReducer from '../js/reducers/homeReducer';
import * as constants from '../js/constants/AppConstants';

// Test Reducer
describe('defaultReducer', () => {
  // Test that the initial state is returning correctly
  it('should return the initial state', () => {
    expect(homeReducer(undefined, {})).toEqual({
      projectName: 'Rimkatron',
      ownerName: 'Rémi Parpaillon'
    });
  });
});
