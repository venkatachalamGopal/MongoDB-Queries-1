
// Query 10:Delete the products which product price value are same,,,,,

db.collection.deleteMany({$or:[{product_price:{$eq:36.00}},{product_price:{$eq:47.00}}]})

// Result :

// [
//     {
//       acknowledged: true,
//       deletedCount: 4,
//     },
//   ];