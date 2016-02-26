var usersName = prompt("Enter Username");
sessionStorage.setItem('user', usersName);
$('#usersName').html("You are: <span>" + usersName + "</span>");
var intervalId = window.setInterval(getChats, 10000);
var chats = [];

 function addChats(newChats){
   $.ajax({
     url: 'http://tiny-tiny.herokuapp.com/collections/hankleen/',
     method: 'POST',
     data: newChats,
     success: function(response){
       getChats();
     },
     error: function (err){
       console.log("error", err);
     },
   });
 }

 function getChats(){
   $.ajax({
     url: 'http://tiny-tiny.herokuapp.com/collections/hankleen/',
     method: 'GET',
     success: function(chatPosts){
       console.log(chatPosts);
       addAllChats(chatPosts);
     },
     error: function(err){
       console.log("error", err);
     },
   });
 }

 function deleteChats(idx){
   console.log("http://tiny-tiny.herokuapp.com/collections/hankleen/" + idx)
   $.ajax({
     url: "http://tiny-tiny.herokuapp.com/collections/hankleen/"+ idx,
     method: 'DELETE',
     success: function(response){
       console.log(response);
      //  var delete = $(this).closest('div').response('_id').remove();
       addAllChats(getChats());
     }
   });
 }

 // Getting the information the user is putting in

 function getChatsFromDom(){
   var post = $('input[name="chats"]').val();
   var username = sessionStorage.getItem('user');
   return {
     post: post,
     username: username,
   }
 }

 function addChatsToDom(newChats, templateStr, $target){
   var tmpl = _.template(templateStr);
   $target.append(tmpl(newChats));
 }

 function addAllChats(arr){
   $('.chatContainer').html('');
   _.each(arr, function(element, idx){
     element.idx = idx;
     addChatsToDom(element,templates.chats,$('.chatContainer'));
   });
 }

 $(document).ready(function(){
   addAllChats(chats);

// this is to print out user info on page after hitting return

$('form').on('submit', function(event){
  event.preventDefault();
  var newChats = getChatsFromDom();
    addChats(newChats);
    addAllChats(getChats());
    $('input[name="chats"]').val('');
});

// to use the delete button and delete a list item

$('.chatContainer').on('click', '.delete-post', function(event){
  var id = $(this).closest('div').data('idx');
  var name = sessionStorage.getItem('user');
  var msgUser = $(this).siblings('h5').text();
  if (msgUser === name) {
      deleteChats(id);
      addAllChats();
    };

  // deleteChats(idx);
  // addAllChats();
});

});
