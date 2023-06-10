const { isRequired, IsRequiredError } = require('../src/index.cjs');

describe('isRequired', () => {
  describe('Argumennts', () => {
    function add(
      a = isRequired({ param: 'a' }),
      b = isRequired({ param: 'b' }),
    ) {
      return a + b;
    }

    it('Should throw the correct error when a param is not received', () => {
      expect(() => add()).toThrowError(new IsRequiredError({ param: 'a' }));
      expect(() => add(1)).toThrowError(new IsRequiredError({ param: 'b' }));
    });

    it('Should not throw any error when the params are all received', () => {
      expect(() => add(1, 1)).not.toThrowError();
      expect(add(1, 1)).toBe(2);
    });
  });

  describe('Destructuring assignment', () => {
    const object = {
      a: 1,
    };

    it('Should throw the correct error when destructuring a non defined property', () => {
      expect(() => {
        const {
          b = isRequired({ param: 'b' }),
        } = object;

        console.log(b);
      }).toThrowError(new IsRequiredError({ param: 'b' }));
    });

    it('Should not throw any error when destructuring a defined property', () => {
      expect(() => {
        const {
          a = isRequired({ param: 'a' }),
        } = object;

        console.log(a);
      }).not.toThrowError(new IsRequiredError({ param: 'a' }));
    });
  });
});
