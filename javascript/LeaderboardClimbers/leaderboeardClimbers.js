/*
source: https://www.codewars.com/kata/5f6d120d40b1c900327b7e22
*/

function leaderboardSort(leaderboard, changes) {
  //loop the changes array
  for (var i = 0; i < changes.length; i++){
    
  //each index, split array index to have [name,movement]
    var a_movement = changes[i].split(" ");
    
  //change leaderboard  
    var index_Name = leaderboard.indexOf(a_movement[0));
    var movement = parseInt(a_movement[1])
  //change array
    
  //TODO
  }
  return //TODO
}
