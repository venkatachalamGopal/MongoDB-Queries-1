
// Query 8:    Find all products which contain the value of soft in product material ,,,,,
db.collection.find({product_material:"Soft"})

// Result :
/*
[
  {
    _id: "64314ce2a99ec7fb80faedcb",
    id: "4",
    product_name:
      "Gorgeous Plastic Pants",
    product_price: 492,
    product_material: "Soft",
    product_color: "plum",
  },
  {
    _id: "64314ce2a99ec7fb80faedd0",
    id: "9",
    product_name: "Awesome Wooden Ball",
    product_price: 28,
    product_material: "Soft",
    product_color: "azure",
  },
  {
    _id: "64314ce2a99ec7fb80faedd2",
    id: "11",
    product_name:
      "Unbranded Wooden Cheese",
    product_price: 26,
    product_material: "Soft",
    product_color: "black",
  },
  {
    _id: "64314ce2a99ec7fb80faedda",
    id: "19",
    product_name:
      "Intelligent Cotton Chips",
    product_price: 46,
    product_material: "Soft",
    product_color: "azure",
  },
];
*/ 
