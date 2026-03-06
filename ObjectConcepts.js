//In JS Object is a collection of key value pairs

const students = {
    firstName : "Sindhu",
    courseName : "Automation Testing",
    courseDuration : 60
}

console.log(students);
console.log(students.firstName);
students.fee = 9000;
console.log(students);
delete students.fee;
console.log(students); 
//array of objects
let listOfStudents = [
    {
        firstName:"Vinay",
        courseName:"Java",
        courseTime: 40
    }
    ,
    {
        firstName:"Bhargavi",
        courseName:"Data Engineer",
        courseTime: 50
    },

    {
        firstName:"Abhinav",
        courseName:"Tech",
        courseTime: 55
    }

]
console.log(listOfStudents);
//fetch list of students who are doing Tech
let course_Tech =   listOfStudents.filter(s=>s.courseName == 'Tech');
console.log(course_Tech);

let student_CourseDuration = listOfStudents.filter(s=>s.courseTime>30).map(s=>s.courseTime=s.courseTime+20);
console.log(student_CourseDuration);
//check every student taking tech
console.log(listOfStudents.every(s=>s.courseName == 'Tech'));
