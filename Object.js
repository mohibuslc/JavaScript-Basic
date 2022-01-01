var student = { id: 2341, name: 'jamal', Address: 'Tillaghore', class: 'Eight' };

var first = student.name;

var second = student['name'];

var nameProps = 'name';

var info = student[nameProps];

student.Address = 'Uposhohor';

student.name = "Kamal";

console.log(info);


console.log(first);

console.log(second);

console.log(student);


