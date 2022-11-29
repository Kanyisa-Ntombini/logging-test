const {
  printLogsOnly,
  returnBooleanValue,
  throwErrorFunction,
} = require('../src/index');

describe('printLogsOnly', () => {
  it('should return undefined', () => {
    expect(printLogsOnly()).toBeUndefined();
  });
});

describe('returnBooleanValue', () => {
  it('should return true', () => {
    expect(returnBooleanValue(true)).toBeTrue();
  });
});

describe('throwError', () => {
  it('should return throw an error', () => {
    expect(() => {
      throwErrorFunction();
    }).toThrow();
  });
});
