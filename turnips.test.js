const determinePattern = require('./turnips');


/**
 * Assuming all 12 prices
 */
const decreasing = [73, 72, 69, 50, 49, 47, 44, 39, 35, 32, 20, 17];
const spikeBig = [73, 72, 69, 80, 92, 112, 98, 95, 35, 32, 20, 17];
// (80+92+103+107)/4 = 95.5
const spikeSmall = [73, 72, 69, 50, 49, 80, 92, 103, 107, 32, 20, 17];
const random = [73, 172, 93, 37, 12, 112, 43, 39, 99, 97, 29, 78];

/**
 * Partial inputs
 */
// Spikes caught as they happen
const spikeBigPartial = [73, 72, 69, 80, 92, 112, 98];
// Could be a big or a small
const spikePartialEarly = [73, 92, 95, 99];
const spikeSmallPartial = [73, 72, 69, 50, 49, 80, 92, 103, 81];
// Could be a big or small spike (both have at least three consecutive increases)
const spikeIndeterminate = [73, 72, 69, 80, 92, 112];

test('Decreasing', () => {
  const pattern = determinePattern(decreasing);
  expect(pattern.decreasing).toEqual(true);
  expect(pattern.spikeBig).toEqual(false);
  expect(pattern.spikeSmall).toEqual(false);
  expect(pattern.random).toEqual(false);
});

test('Random', () => {
  const pattern = determinePattern(random);
  expect(pattern.decreasing).toEqual(false);
  expect(pattern.spikeBig).toEqual(false);
  expect(pattern.spikeSmall).toEqual(false);
  expect(pattern.random).toEqual(true);
});

test('Spike - Small', () => {
  const pattern = determinePattern(spikeSmall);
  expect(pattern.decreasing).toEqual(false);
  expect(pattern.spikeBig).toEqual(false);
  expect(pattern.spikeSmall).toEqual(true);
  expect(pattern.random).toEqual(false);
});

test('Spike - Big', () => {
  const pattern = determinePattern(spikeBig);
  expect(pattern.decreasing).toEqual(false);
  expect(pattern.spikeBig).toEqual(true);
  expect(pattern.spikeSmall).toEqual(false);
  expect(pattern.random).toEqual(false);
});

// console.log('Spike - Big (Partial):');
// console.log(determinePattern(spikeBigPartial));
// console.log('Spike - Small (Partial):');
// console.log(determinePattern(spikeSmallPartial));
// console.log('Spike - (Partial, Early):');
// console.log(determinePattern(spikePartialEarly));
