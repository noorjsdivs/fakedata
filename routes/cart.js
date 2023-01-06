const express = require("express");
const router = express.Router();

const cartData = [
  {
    _id: 1,
    userId: 1,
    date: "2020-03-02T00:00:02.000Z",
    products: [
      { productId: 1, quantity: 4 },
      { productId: 2, quantity: 1 },
      { productId: 3, quantity: 6 },
    ],
  },
  {
    _id: 2,
    userId: 1,
    date: "2020-01-02T00:00:02.000Z",
    products: [
      { productId: 2, quantity: 4 },
      { productId: 1, quantity: 10 },
      { productId: 5, quantity: 2 },
    ],
  },
  {
    _id: 3,
    userId: 2,
    date: "2020-03-01T00:00:02.000Z",
    products: [
      { productId: 1, quantity: 2 },
      { productId: 9, quantity: 1 },
    ],
  },
  {
    _id: 4,
    userId: 3,
    date: "2020-01-01T00:00:02.000Z",
    products: [{ productId: 1, quantity: 4 }],
  },
  {
    _id: 5,
    userId: 3,
    date: "2020-03-01T00:00:02.000Z",
    products: [
      { productId: 7, quantity: 1 },
      { productId: 8, quantity: 1 },
    ],
  },
  {
    _id: 6,
    userId: 4,
    date: "2020-03-01T00:00:02.000Z",
    products: [
      { productId: 10, quantity: 2 },
      { productId: 12, quantity: 3 },
    ],
  },
  {
    _id: 6,
    userId: 8,
    date: "2020-03-01T00:00:02.000Z",
    products: [{ productId: 18, quantity: 1 }],
  },
];

router.get("/cart", (req, res) => {
  res.send(cartData);
});

module.exports = router;
