var templates = {};
  templates.chats = [
  '<div data-idx="<%= _id %>">',
  '<div class="postContent"><h5><%= username %></h5>',
  '<p><%= post %></p></div>',
  '<% if (obj.username === localStorage.getItem("user")){%>',
  '<button type="button" name="Delete" class="delete-post">x</button>',
  '<%}%>',
  '</div>'
].join("")
