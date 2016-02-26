var templates = {
  chats: [
  '<div data-idx="<%= _id %>">',
  '<h5 class="usersName" ><%= username %></h5>',
  '<p><%= post %></p>',
  '<button type="button" name="Delete" class="delete-post">x</button>',
  '</div>'
].join("")
};
