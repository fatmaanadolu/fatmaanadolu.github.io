 var student ={
                    'name':'',
                    'ID':'',
                    'lname':'',
                    'courses': [
                        {
                            'courseID': '',
                            'grade':''
                        }
                    ],
                    calcGPA: function () {
                        var gpa=0;
                        for(var i=0; i<this.courses.length;i++) {
                            gpa += this.courses[i].grade;
                        } 
                        gpa/=this.courses.length;
                        return gpa;
                        
                    }
            
                
            };
            var s1 = student;
            s1['ID']="145556";
            s1['name']="first";
            for(var i=0; i<5; i++) {
                s1['courses'][i]={
                    'courseID':'c'+i,'grade':Math.random()*100+1
                }
                s1['tel']="1255366"
            }
            var gpa = s1.calcGPA();
         function Person(first,last,age,eye) {
             this.name=first;
             this.lastName=last;
             this.age=age;
             this.eyeColor=eye;
             this.yearsToLive= function() {
                 return 50-this.age;
             }
            };
            var p1 = new Person('fırat','last',50,'blue');
            var p2 = new Person('ali','metin',40,'green');
       
