// var $postTitle = $("#post-title");
// var $postText = $("#post-content");

// var $postList = $(".list-container .list-group");



// // activepost is used to keep track of the post in the textarea
// var activePost = {};

// // A function for getting all posts from the db
// var getPost = function() {
//   return $.ajax({
//     url: "/api/posts",
//     method: "GET"
//   });
// };

// // A function for saving a post to the db
// var savePost = function(post) {
// console.log(post);

//   return $.ajax({
//     url: "/api/posts",
//     data: post,
//     method: "POST",
   
//   });
 
// };

// // BONUS A function for deleting a post from the db
// var deletepost = function(id) {
//   return $.ajax({
//     url: "api/posts/" + id,
//     method: "DELETE"
//   });
// };

// // If there is an activepost, display it, otherwise render empty inputs
// var renderActivepost = function() {
//   $savepostBtn.hide();

//   if (activepost.id) {
//     $postTitle.attr("readonly", true);
//     $postText.attr("readonly", true);
//     $postTitle.val(activepost.title);
//     $postText.val(activepost.text);
//   } else {
//     $postTitle.attr("readonly", false);
//     $postText.attr("readonly", false);
//     $postTitle.val("");
//     $postText.val("");
//   }
// };

// // Get the post data from the inputs, save it to the db and update the view
// var handlepostSave = function() {
//   var newpost = {
//     title: $postTitle.val(),
//     text: $postText.val(),
// 	id:(new Date()).getTime().toString(36)
//   };

//   savepost(newpost).then(function(data) {
//     console.log(data);
//     console.log("returning text");
//     getAndRenderposts(data);
    
//     renderActivepost(data);
//   }).catch(function(error) {
//     console.log("Error writing post.")
//   })
// };

// // BONUS Delete the clicked post
// var handlepostDelete = function(event) {
//   // prevents the click listener for the list from being called when the button inside of it is clicked
//   event.stopPropagation();

//   var post = $(this)
//     .parent(".list-group-item")
//     .data();

//   if (activepost.id === post.id) {
//     activepost = {};
//   }

//   deletepost(post.id).then(function(data) {
//     getAndRenderposts(data);
//     renderActivepost(data);
//   });
// };

// // Sets the activepost and displays it
// var handlepostView = function() {
//   activepost = $(this).data();
//   renderActivepost();
// };

// // Sets the activepost to and empty object and allows the user to enter a new post
// var handleNewpostView = function() {
//   activepost = {};
//   renderActivepost();
// };

// // If a post's title or text are empty, hide the save button
// // Or else show it
// var handleRenderSaveBtn = function() {
//   if (!$postTitle.val().trim() || !$postText.val().trim()) {
//     $savepostBtn.hide();
//   } else {
//     $savepostBtn.show();
//   }
// };

// // Render's the list of post titles
// var renderpostList = function(posts) {
//   $postList.empty();

//   var postListItems = [];

//   for (var i = 0; i < posts.length; i++) {
//     var post = posts[i];

//     var $li = $("<li class='list-group-item'>").data(post);
//     var $span = $("<span>").text(post.title);
//     var $delBtn = $(
//       "<i class='fas fa-trash-alt float-right text-danger delete-post'>"
//     );

//     $li.append($span, $delBtn);
//     postListItems.push($li);
//   }

//   $postList.append(postListItems);
// };

// // Gets posts from the db and renders them to the sidebar
// var getAndRenderposts = function() {
//   return getposts().then(function(data) {
//     // console.log("get render posts: ");
//     // console.log(data);
//     renderpostList(data);
//   });
// };

// $savepostBtn.on("click", handlepostSave);
// $postList.on("click", ".list-group-item", handlepostView);
// $newpostBtn.on("click", handleNewpostView);
// $postList.on("click", ".delete-post", handlepostDelete);
// $postTitle.on("keyup", handleRenderSaveBtn);
// $postText.on("keyup", handleRenderSaveBtn);

// // Gets and renders the initial list of posts
// getAndRenderposts();