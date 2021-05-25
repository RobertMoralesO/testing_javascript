import { colorCode, COLORS } from './resistor-color';

describe('ResistorColor', () => {
  describe('UPPER Colors', () => {
    test('Black', () => {
      expect(colorCode('Black')).toEqual(0);
    });

    test('White', () => {
      expect(colorCode('wHite')).toEqual(9);
    });

    test('Orange', () => {
      expect(colorCode('oraNge')).toEqual(3);
    });

    test('Red', () => {
      expect(colorCode('RED')).toEqual(2);
    });
  });

  describe('Lower Colors', () => {
    test('Black', () => {
      expect(colorCode('black')).toEqual(0);
    });

    test('White', () => {
      expect(colorCode('white')).toEqual(9);
    });

    test('Orange', () => {
      expect(colorCode('orange')).toEqual(3);
    });

    test('Red', () => {
      expect(colorCode('red')).toEqual(2);
    });
  });

  test('Colors', () => {
    expect(COLORS).toEqual([
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ]);
  });
});
