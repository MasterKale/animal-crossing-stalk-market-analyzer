# Animal Crossing: New Leaf - Turnip Market Analyzer

CliffsNotes for New Leaf's turnip market economy. Pulled from Thonky: https://www.thonky.com/animal-crossing-new-leaf/stalk-market

## Selling

Reese quotes two prices per day, one at store opening (6am) and another one at 12pm. Assuming Re-Tail is closed on Sundays, that gives **twelve opportunities** to record turnip pricing throughout the week (zero-indexed):

```
      M  T  W  T  F  S
 6am  0  2  4  6  8  10
12pm  1  3  5  7  9  11
```

If turnips are not sold by 6am on the following Sunday, **they spoil and lose all value!**

> NOTE: If Reese's doesn't open on Sundays till, say, 10AM, then effectively this means you have until store closing sometime Saturday night to sell. Unless there's an opportunity to game the system by visiting someone "in the past" thanks to timezones?

## Buying

Joan sells turnips on Sundays with a price between **90 and 110 bells**.

## Patterns

There are four patterns that turnip prices can follow throughout the week:

- Decreasing
- Big Spike
- Small Spike
- Random

### Decreasing

- Start Price
  - 50 - 99
- Characteristic
  -  Price consistently decreases
- Sell Condition
  - If price doesn't increase by Thursday, sell

### Big Spike

- Start Price
  - 50 - 99
- Characteristic: Starts with decreasing, but then three consecutive increases; third increase is max for week. After third increase, two consecutive decreases.
- Sell Condition: Sell on third increase

### Small Spike

- Start Price
  - 50 - 99
- Characteristic:
- Sell Condition:

### Random

- Start Price:
  - Between 50 - 200
- Characteristic: Random price increases and decreases in no pattern
- Sell Condition: Good luck

## Command Ideas

```
<ac-turnip-register
1. Recording for today?
2. (If not: what day?)
2. Is it after 12pm on your Switch system clock?
3. What is the price?
```

Short version?

```
<ac-turnip-register today after 123
<ac-turnip-register monday before 40
```

Analyze input numbers:

```
<ac-turnip-analyze
```
