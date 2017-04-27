function Student(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.courses = [];
}

Student.prototype.name = function () {
  return `${this.firstname} ${this.lastname}`;
};

Student.prototype.enroll = function (course) {
  if (this.courses.includes(course) === false){
    this.courses.push(course);
    course.students.push(this);
  }
};

Student.prototype.courseLoad = function () {
  let result = {};

  this.courses.forEach(function(course) {
    if (course.department in result){
      result[course.department] += course.credits;
    }
    else {
      result[course.department] = course.credits;
    }
  });

  return result;
};

function Course(name, department, credits) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
}


Course.prototype.addStudent = function(student){
  student.enroll(this);
};

let s1 = new Student("Tu", "Ngo");
let s2 = new Student("Victor", "Li");
let s3 = new Student("Jesus", "Christ");

let c1 = new Course("Ruby", "pool", 20);
let c2 = new Course("Rails", "hotel", 10);
let c3 = new Course("JavaScript", "pool", 15);

s1.enroll(c1);
s1.enroll(c2);
s1.enroll(c3);

s2.enroll(c1);
s2.enroll(c3);
