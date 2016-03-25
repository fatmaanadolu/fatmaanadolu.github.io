/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var course {
'coursename':'modern art 102';
        'inspector':'Elif Altaylı';
        'credit':'3';
        'hours':'70'
        'term':'spring';
        'class':'Z12';
        'size':'5'
}
function course(dep,code,credits,grade,year,term) {
    this.dep=dep;
    this.code=code;
    this.credits=credits;
    this.grade=grade;
    this.year=year;
    this.term=term;
    this.getCourseCode = function() {
        return this.dep+this.code;
    };
}
var c1=new Course("MBG","106","3","100","2017","spring");
var c2=new Course("MBG","108","3","100","2017","Fall");

var s1= Student;
s1.ID="123456";
s1.fname="emine";
s1.lname="salihli";
s1.courses=[c1,c2];
var s1GPA = s1.calcGPA();
s1GPA;