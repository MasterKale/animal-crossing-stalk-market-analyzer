const { determinePattern, PATTERN } = require('./turnips');


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
const spikeSmallPartial = [73, 72, 69, 50, 49, 80, 92, 103, 107];
// Could be a big or small spike (both have at least three consecutive increases)
const spikeIndeterminate = [73, 72, 69, 80, 92, 112];

test('Decreasing', () => {
  expect(determinePattern(decreasing)).toEqual(PATTERN.DECREASING);
});

test('Random', () => {
  expect(determinePattern(random)).toEqual(PATTERN.RANDOM);
});

test('Spike - Small', () => {
  expect(determinePattern(spikeSmall)).toEqual(PATTERN.SPIKE_SMALL);
});

test('Spike - Big', () => {
  expect(determinePattern(spikeBig)).toEqual(PATTERN.SPIKE_BIG);
});

test('Spike - Big (Partial)', () => {
  expect(determinePattern(spikeBigPartial)).toEqual(PATTERN.SPIKE_BIG);
});

test('Spike - Small (Partial)', () => {
  expect(determinePattern(spikeSmallPartial)).toEqual(PATTERN.SPIKE_SMALL);
});

test('Spike - (Partial, Early)', () => {
  expect(determinePattern(spikePartialEarly)).toEqual(PATTERN.SPIKE_BIG);
});

