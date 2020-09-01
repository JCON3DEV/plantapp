$(() => {
  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((users) => {
  //   for(user of users) {
  //     $("<div>").text(user.name).appendTo($("body"));
  //   }
  // });;
  // Haviz suggests ;
  // MUST learn why this script js is differnt to the main.js
  // this script ONLY gets triggered / executed on the browser
  // you cannot pass files from the database to this file
  // this file is running on the users computer
  // the DB is on a server computer
  // the ejs is compilied BEFORE it is sent to the user (browser)
});
