import React from 'react';
import * as Enzyme from 'enzyme';

import { isClosed } from '../../utils/common.js';

describe('`isClosed()` function', () => {
  it('Checks if Bracket Matched/Closed Properly', () => {
    expect(isClosed('')).toBe(true);
    expect(isClosed('^^')).toBe(false);
    expect(isClosed('^$^$')).toBe(true);
    expect(isClosed('$^$^')).toBe(false);
    expect(isClosed('$$')).toBe(false);
    expect(isClosed('^12^$123$')).toBe(true);
    expect(isClosed('^123^abc$$')).toBe(true);
  });
});