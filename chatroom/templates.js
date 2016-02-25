var templates = {
  chats: [
  '<div data-idx="<%= _id %>">',
  '<p class="usersName" ><%= username %></p>',
  '<p><%= post %></p>',
  '<button type="button" name="Delete" class="delete-post">x</button>',
  '</div>'
].join("")
};
