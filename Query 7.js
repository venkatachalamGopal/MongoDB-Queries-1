
// Query 7:    Find only the product name and product material,,,

db.collection.findOne({$and:[{product_name:" "},{product_material:" "}]}) 

// Result :

// return -[null]