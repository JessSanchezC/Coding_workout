/*
source: https://www.codewars.com/kata/5f6d120d40b1c900327b7e22
solved by: JASC and LZ 
date: 23/10/2020
*/

function leaderboardSort(leaderboard, changes) {
  //loop the changes array
  changes.forEach((elem) =>{
    //each index, split to array [name,movement]
    var a_movement = elem.split(" ");    
    // get change parameters 
      var index_Name = leaderboard.indexOf(a_movement[0]);
      var new_index = index_Name + parseInt(a_movement[1])*-1
    //change leaderboard
      leaderboard.splice(new_index,0,...leaderboard.splice(index_Name,1))      
  })   
  
  return leaderboard
}
