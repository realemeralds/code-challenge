class DataSource {
  /* 
    getPrices returns a Promise which provides fulfilment handler 
    with an array of price objects retrieved from a remote pricing engine.

    This is implemented with vanilla JavaScript.

    the returned price objects have the following methods and attributes:
    [
        ...
        {
            id: Number -> unqiue id
            buy: Number -> Price corresponding to buy value
            sell: Number -> Price corresponding to sell value
            mid(): returns a Number with the mid-point value between price.buy and price.sell
            pair: String -> 6 characters code corresponding to trade pairs
            quote(): returns the quote currency (counter currency) of the trade pair, 
                     e.g. for ETHSGD pair the quote currency is SGD.
            timestamp: String -> ISO 8601 date string corresponding to timestamp
        }
        ...
    ]
    */
  getPrices() {
    return new Promise((resolve, reject) => {
      fetch("https://static.ngnrs.io/test/prices")
        .then((res) => res.json())
        .then((data) => data.data.prices)
        .then((prices) => {
          resolve(
            prices.map((price) => ({
              ...price,
              mid() {
                return (price.buy + price.sell) / 2;
              },
              quote() {
                return price.pair.slice(3);
              },
            }))
          );
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }
}

const ds = new DataSource();
ds.getPrices()

  .then((prices) => {
    console.log(prices[1].id);
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.err(error);
  });
