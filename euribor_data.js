//Euribor going up data (2011)
const euribor_UP = {
  sixMonth: {
    firstHalf: 1.229,
    secondHalf: 1.797,
  },
  threeMonth: {
    firstQuarter: 0.999,
    secondQuarter: 1.249,
    thirdQuarter: 1.556,
    fourthQuarter: 1.544,
  },
};

//Euribor going down data (2012)
const euribor_DOWN = {
  sixMonth: {
    firstHalf: 1.622,
    secondHalf: 0.926,
  },
  threeMonth: {
    firstQuarter: 1.361,
    secondQuarter: 0.948,
    thirdQuarter: 0.65,
    fourthQuarter: 0.22,
  },
};

//Euribor stable data (2013)
const euribor_STABLE = {
  sixMonth: {
    firstHalf: 0.319,
    secondHalf: 0.342,
  },
  threeMonth: {
    firstQuarter: 0.186,
    secondQuarter: 0.213,
    thirdQuarter: 0.222,
    fourthQuarter: 0.225,
  },
};

module.exports = {
    euribor_UP,
    euribor_DOWN,
    euribor_STABLE
}