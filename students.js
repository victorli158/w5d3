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
    } else {
      result[course.department] = course.credits;
    }
  });

  return result;
};

function Course(name, department, credits, block, days) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
  this.block = block;
  this.days = days;
}

Course.prototype.addStudent = function(student){
  student.enroll(this);
};

Course.prototype.conflictsWith = function(otherCourse) {
  if (this.block !== otherCourse.block) {
    return false;
  }
  if (this.days === this.days - otherCourse.days) {
    return false;
  }
  return true;
};

let s1 = new Student("Tu", "Ngo");
let s2 = new Student("Victor", "Li");
let s3 = new Student("Jesus", "Christ");

let c1 = new Course("Ruby", "pool", 20, 1, ['mon', 'wed', 'fri']);
let c2 = new Course("Rails", "hotel", 10, 2, ['mon', 'wed', 'fri']);
let c3 = new Course("JavaScript", "pool", 15, 1, ['mon', 'tue']);
let c4 = new Course("Java", "hotel", 5, 1, ['tue', 'thur']);

s1.enroll(c1);
s1.enroll(c2);
s1.enroll(c3);

s2.enroll(c1);
s2.enroll(c2);

// console.log(c1.conflictsWith(c4));
// console.log(c1.conflictsWith(c3));
