import { MillisecondsToSecondsPipe } from './milliseconds-to-seconds.pipe';

describe('MillisecondsToSecondsPipe', () => {
  it('create an instance', () => {
    const pipe = new MillisecondsToSecondsPipe();
    expect(pipe).toBeTruthy();
  });
});
