import { RatingPipe } from './rating.pipe';

describe('RatingPipe', () => {
  let pipe = new RatingPipe();

  it('transform 1 to "Ni con tu teclado"', () => {
    expect(pipe.transform(1)).toBe('Ni con tu teclado');
  });

  it('transform 2 to "Ni fu ni fa"', () => {
    expect(pipe.transform(2)).toBe('Ni fu ni fa');
  });

  it('transform 3 to "Chachi que si"', () => {
    expect(pipe.transform(3)).toBe('Chachi que si');
  });

  it('transform any other value to "Rating incorrecto"', () => {
    expect(pipe.transform(5)).toBe('Rating incorrecto');
  });
});
