// Query -4: List the four product which are grater than 500 in price ,,,,,,

db.collection.find({product_price:{$gt:500}}).sort({product_price:1})

// Result :
/* 
[
  {
    _id: "64314afef3c5cbf2e58b02a3",
    id: "1",
    product_name:
      "Intelligent Fresh Chips",
    product_price: 655,
    product_material: "Concrete",
    product_color: "mint green",
  },
  {
    _id: "64314afef3c5cbf2e58b02a5",
    id: "3",
    product_name: "Refined Steel Car",
    product_price: 690,
    product_material: "Rubber",
    product_color: "gold",
  },
  {
    _id: "64314afef3c5cbf2e58b02a4",
    id: "2",
    product_name:
      "Practical Fresh Sausages",
    product_price: 911,
    product_material: "Cotton",
    product_color: "indigo",
  },
]
*/