const filterArray = require('./index'); 
 
describe('filterArray', () => { 
  let array; 
 
  beforeEach(() => { 
    array = [false, 7, 'array', 0, 'hi', null, '', true]; 
  }); 
 
  test('should remove falsy values from array', () => { 
    const result = [7, 'array', 'hi', true]; 
    expect(filterArray(array)).toEqual(result); 
  }); 
 
  test('should array working even it was modified', () => { 
    array.push(...['lovely', 19]); 
    expect(filterArray(array)).toContain('lovely'); 
    expect(filterArray(array)).toContain(19); 
  }); 
 
  test('should array NOT to contain falsy values', () => { 
    expect(filterArray(array)).not.toContain(false); 
    expect(filterArray(array)).not.toContain(0); 
    expect(filterArray(array)).not.toContain(''); 
    expect(filterArray(array)).not.toContain(null); 
  }); 
 
  test('should array NOT to be empty', () => { 
    expect(filterArray(array)).not.toEqual([]); 
  }); 
 
});
