/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var elemID="#disp";
$().ready(function() {
    var top;
    var left;
    var timer;
    for(var i=0; i<10;i++) {
        left=Math.floor((Math.random()*1000)+1);
        top= Math.floor((Math.random()*800)+1)
        $(elemID).append("<div id='"+i+"' class='b' style='top:" +top+ "px; left:" + left + "px;'>" + i + "</div>");
    }
//    timer= setTimeout(function() {
//        $("#5").css("left",left);
//        $("#5").css("top",top);
//    }, 500)
});
