'use strict';

console.log('log index.js');

$('#bookBtn').click(function() {   // If submit button is clicked
  console.log('log bookBtn clicked');
  var locationBuild = '';
  locationBuild += 'https://salonlofts.com/marty_kunsman/schedule'; 
  // locationBuild += movie[key].id;
  window.location.href = locationBuild;
}); // end click functioun

