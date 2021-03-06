type Pattern = 'spikeBig' | 'spikeSmall' | 'decreasing' | 'random' | 'unknown';

export default function analyze(prices: (number | undefined)[]): Pattern {
  // Start off with the first price since we'll have nothing to compare it to
  let lastPrice = prices.shift();

  // 1 = increase, 0 = decrease, - = no price defined for comparison
  let changes = '';

  // Determine whether each price increases or decreases from the previous one
  prices.forEach(price => {
    if (lastPrice === undefined || price === undefined) {
      changes += '-';
    } else if (price > lastPrice) {
      // Increase
      changes += '1';
    } else {
      // Decrease
      changes += '0';
    }

    lastPrice = price;
  });

  // Try to detect spikes first
  if (changes.indexOf('1111') >= 0) {
    // Small Spike
    return 'spikeSmall';
  } else if (changes.indexOf('111') >= 0) {
    // Big Spike
    return 'spikeBig';
  }

  // Prepare a separate string of "every price decreases" for comparison to our calculated changes
  const allDecreasing = new Array(prices.length).fill(0).join('');
  if (changes === allDecreasing) {
    return 'decreasing';
  }

  // No patterns were detected, and we've detected incomplete data
  if (changes.indexOf('-') >= 0) {
    return 'unknown';
  }

  // If we get this far we weren't able to discern any pattern
  return 'random';
}
