
// Query -6 :Find the product with a row id of 10

db.collection.findOne({id:"10"})

// Result :

// [
//     {
//       _id: "64314c14a99ec7fb80faed9d",
//       id: "10",
//       product_name:
//         "Generic Wooden Pizza",
//       product_price: 84,
//       product_material: "Frozen",
//       product_color: "indigo",
//     },
//   ];