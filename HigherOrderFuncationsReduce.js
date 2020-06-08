let students = [{ firstName: 'Eric', lastName: 'Couch', age: 47, gender: 'M', married: true, faction: 'Jedi'},
                { firstName: 'Rashad', lastName: 'Davis', age: 32, gender: 'M', married: false, faction: 'Jedi'},
                { firstName: 'Tigre', lastName: 'Anthony', age: 38, gender: 'M', married: true, faction: 'Jedi'}, 
                { firstName: 'Marissa', lastName: 'Sams', age: 23, gender: 'F', married: false, faction: 'Sith'}, 
                { firstName: 'Maurice', lastName: 'Rodriguez', age: 28, gender: 'M', married: false, faction: 'Sith'}];

let ages = [47, 32, 38, 23, 28]

let totalAges = ages.reduce(function(total, age) {
    return total + age;
})

console.log(totalAges);