var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
       Comment = require("./models/comment")

var data = [];

function seedDB() {
    //remove all campgrounds
    //   Campground.remove({}, function(err) {
    //     if (err) {
    //         console.log(err);
    //     } 
    //     console.log("removed campgrounds!")
    // add a few campgrounds
        data.forEach(function(seed) {
            Campground.create(seed, function(err, campground) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("campground added");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is amazing but i want internet",
                            author: "Homer"                        
                        }, function(err, comment) {
                            if (err) {
                                console.log(err)
                            } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created new comment")
                            }; 
                      });
                  };
              });
         });  
//    });
};

module.exports = seedDB();