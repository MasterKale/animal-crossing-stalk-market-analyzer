import analyze from './index';

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
const incomplete = [73, 92, undefined, 99];

/**
 * From this Google Sheet on Reddit
 * https://docs.google.com/spreadsheets/d/1qNojSBK8mpQRkqXjnOJ75Mk7ZNiG3DRIZHwFQsk6kFY/edit
 */
const week13082018 = [73, 69, 65, 60, 57, 111, 112, 190, 192, 167, 78, 74];
const week20082018 = [145, 128, 140, 147, 115, 103, 66, 61, 105, 80, 61, 50];
const week27082018 = [69, 66, 63, 59, 56, 52, 48, 101, 97, 170, 187, 173];
const week03092018 = [118, 121, 112, 107, 100, 61, 56, 50, 48, 61, 51, 49];

test('Decreasing', () => {
  expect(analyze(decreasing)).toEqual('decreasing');
});

test('Random', () => {
  expect(analyze(random)).toEqual('random');
});

test('Spike - Small', () => {
  expect(analyze(spikeSmall)).toEqual('spikeSmall');
});

test('Spike - Big', () => {
  expect(analyze(spikeBig)).toEqual('spikeBig');
});

test('Spike - Big (Partial)', () => {
  expect(analyze(spikeBigPartial)).toEqual('spikeBig');
});

test('Spike - Small (Partial)', () => {
  expect(analyze(spikeSmallPartial)).toEqual('spikeSmall');
});

test('Spike - (Partial, Early)', () => {
  expect(analyze(spikePartialEarly)).toEqual('spikeBig');
});

test('Indeterminate', () => {
  expect(analyze(spikeIndeterminate)).toEqual('spikeBig');
});

test('Incomplete', () => {
  expect(analyze(incomplete)).toEqual('unknown');
});

test('week13082018', () => {
  expect(analyze(week13082018)).toEqual('spikeSmall');
});

test('week20082018', () => {
  expect(analyze(week20082018)).toEqual('random');
});

test('week27082018', () => {
  expect(analyze(week27082018)).toEqual('random');
});

test('week03092018', () => {
  expect(analyze(week03092018)).toEqual('random');
});
