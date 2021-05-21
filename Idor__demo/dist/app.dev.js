"use strict";

var database = [{
  id: '1',
  user: 'kavin'
}, {
  id: '2',
  user: 'dharnish'
}, {
  id: '3',
  user: 'team_inbox'
}];
var value = location.hash.substring(1);
console.log(value);
database.map(function (item) {
  if (value === item.id) {
    console.log(item.user + ' Logged in');
  }
});