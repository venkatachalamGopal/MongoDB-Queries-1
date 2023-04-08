
// Quey -5 :Find the product name and product material of each products

db.collection.find({$and:[{product_name:" "},{product_material:" "}]})

// Result :
// It return empty Array -[]