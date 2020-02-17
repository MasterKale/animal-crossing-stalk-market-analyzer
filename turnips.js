module.exports = function determinePattern(prices) {
  let lastPrice;
  let pattern = {
    decreasing: true,
    spikeBig: false,
    spikeSmall: false,
    random: false
  };

  for (let i = 0; i < prices.length; i += 1) {
  }

  // console.log('returning:', pattern);
  return pattern;
}
