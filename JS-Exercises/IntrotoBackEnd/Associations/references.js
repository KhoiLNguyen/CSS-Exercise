let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", { useNewUrlParser: true });

let Post = require("./models/post");
let User = require("./models/user");


// Post.create({
//   title: "How to cook the best burger part 4",
//   content: "123414151512412341243123213"
// }, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     User.findOne({email: "bob@gmail.com"}, function(err, foundUser) {
//       if(err) {
//         console.log(err);
//       } else {
//         foundUser.posts.push(post);
//         foundUser.save(function(err, data) {
//           if(err) {
//             console.log(err);
//           } else {
//             console.log(data);
//           }
//         });
//       }
//     });
//   }
// });

// User.create({
//   email: "bob@gmail.com",
//   name: "Bob Belcher"
// })

// find user
// find all posts for that user

User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) {
  if(err) {
    console.log(err);
  } else {
    console.log(user);
  }
});


