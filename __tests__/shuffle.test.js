const shuffle = require("../src/shuffle");


// test('just a string stating what the function does' () => {
//   function
// })

let testData = {
  id: 0,
  name: "The Hammer",
  imgAddress: "https://robohash.org/hammer",
  health: 100,
  attacks: [
    {
      id: 0,
      damage: 25,
    },
    {
      id: 1,
      damage: 30,
    }
  ]
}

describe("shuffle should...", () => {
  
  test('finalShuffle should return shuffled', () => {
    let finalShuffle = shuffle(testData.title)
    expect(typeof finalShuffle).toBe(shuffled)
  })

  test('check to see if items are consistent in array', () => {
    let botsArr = shortenArr(testData.botsArr)
    expect(botsArr.length).toBeLessThan(testData.botsArr.length)
  })

});
