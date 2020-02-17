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
