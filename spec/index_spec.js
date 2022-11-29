const { testingLogger } = require('../index');

describe('testingLogger', () => {
  it('should return true', () => {
    expect(testingLogger(true)).toBeTrue();
  });
});
