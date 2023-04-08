// Query -2:Find the product price which are between 400 to 800

db.collection.find({$and:[{product_price:{$gte:400}},{product_price:{$lte:800}}]})


// Result :
/*  

[
    {
      _id: "643147aef3c5cbf2e58b020e",
      id: "1",
      product_name:
        "Intelligent Fresh Chips",
      product_price: 655,
      product_material: "Concrete",
      product_color: "mint green",
    },
    {
      _id: "643147aef3c5cbf2e58b0210",
      id: "3",
      product_name: "Refined Steel Car",
      product_price: 690,
      product_material: "Rubber",
      product_color: "gold",
    },
    {
      _id: "643147aef3c5cbf2e58b0211",
      id: "4",
      product_name:
        "Gorgeous Plastic Pants",
      product_price: 492,
      product_material: "Soft",
      product_color: "plum",
    },
    {
      _id: "643147aef3c5cbf2e58b0213",
      id: "6",
      product_name:
        "Awesome Wooden Towels",
      product_price: 474,
      product_material: "Plastic",
      product_color: "orange",
    },
    {
      _id: "643147aef3c5cbf2e58b0214",
      id: "7",
      product_name:
        "Practical Soft Shoes",
      product_price: 500,
      product_material: "Rubber",
      product_color: "pink",
    },
  ]
*/