- Create
db.types.insert({types: "IPA"}) - inserts to that collection
db.types - creates a collection called types
db.createCollection("beers") - creates a collection

It works like objects

- Read
db.types.find() - Finds all
db.types.find{types: "IPA") - Finds the ones with types "IPA"
db.types.find().pretty() - Makes the printout look better
db.types.find({alcoholContent: {$lt: 5}}) - will fin beers that are less than 5 in alcohol content $lte(less than equals), $gt(greater than). $exists: true(if it exitsts then show it)

- Update
db.types.update({types: "IPA"}, {slogan: "It's good shit}) -  first part is what it searches for and the last part updates it with that exchanges it, overwrites it
db.types.update({types: "IPA"}, {$set: {brand: "Brooklyn"}}) - will match with the first part and add the last part, so it aggregates
db.types.updateMany({types: "IPA"}, {$set: {flavors: "good shit"}}) - updates all with types "IPA"

- Delete
db.types.delete({types: "IPA"}) - Not sure how theese work exaclty, but its bad prolly
db.deleteMany({types: "IPA"})
db.types.remove({types: "IPA"})
db.deleteOne({types: "IPA"})

- Random 
show databases - Shows the ones when you ran mongo
use beer - will use the beer database
show collections
show 


