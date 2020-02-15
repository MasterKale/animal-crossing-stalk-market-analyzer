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

function determinePattern(prices) {
  let lastPrice;
  let pattern = {
    decreasing: true,
    spikeBig: false,
    spikeSmall: false,
    random: false
  };

  for (let i = 0; i < prices.length; i += 1) {
    const price = prices[i];

    // console.log('---price:', price);

    if (!price) {
      continue;
    }

    // undefined check just in case turnip prices can be zero for some reason
    if (lastPrice !== undefined) {
      if (price > lastPrice) {
        // If price ever goes up, it's not a decreasing pattern
        pattern.decreasing = false;

        if (i >= 3) {
          // Try to detect a big spike first, since it's only 3 increases
          const lbPrice3 = price;
          const lbPrice2 = prices[i - 1];
          const lbPrice1 = prices[i - 2];
          const lbPrice0 = prices[i - 3];

          if (
            lbPrice1 < lbPrice2
            && lbPrice2 < lbPrice3
          ) {
            console.log('detected a spike');
            console.log('lookback price 3:', lbPrice3);
            console.log('lookback price 2:', lbPrice2);
            console.log('lookback price 1:', lbPrice1);
            console.log('lookback price 0:', lbPrice0);

            pattern.spikeBig = true;
            pattern.spikeSmall = true;

            if (lbPrice1 < lbPrice0) {
              console.log('spike is big');
              pattern.spikeSmall = false;
            } else {
              console.log('spike is small');
              pattern.spikeBig = false;
            }
          }
        }
      }
    }

    // Stash the current price so we can look at it on the next loop
    lastPrice = price;
  }

  if (!pattern.decreasing && !pattern.spikeBig && !pattern.spikeSmall) {
    pattern.random = true;
  }

  // console.log('returning:', pattern);
  return pattern;
}

// console.log('Decreasing:');
// console.log(determinePattern(decreasing));
// console.log('Random:');
// console.log(determinePattern(random));
console.log('Spike - Big:');
console.log(determinePattern(spikeBig));
// console.log('Spike - Small:');
// console.log(determinePattern(spikeSmall));
// console.log('Spike - Big (Partial):');
// console.log(determinePattern(spikeBigPartial));
// console.log('Spike - Small (Partial):');
// console.log(determinePattern(spikeSmallPartial));
console.log('Spike - (Partial, Early):');
console.log(determinePattern(spikePartialEarly));
