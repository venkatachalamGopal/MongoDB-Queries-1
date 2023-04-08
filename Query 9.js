// Query 9: Find products which contain product color indigo  and product price 492.00,,,,
db.collection.find({$and:[{product_color:"indigo"},{product_price:492.00}]})

// Result : []