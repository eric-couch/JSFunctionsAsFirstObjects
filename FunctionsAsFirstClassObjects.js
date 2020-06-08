let nums = [0,1,3,5,7,9,11,13,15];
// console.log(nums[2]);

// console.log(nums[nums.length-1]);

nums.push(17);

// for (let i=0;i<nums.length;i++) {
//     console.log(nums[i]);
// }

// console.log(nums.length);
// nums.pop();
// console.log(nums.length);

// nums.forEach(function(x) {
//     console.log(x);
// });

nums.forEach(x => console.log(x));

let name = "Eric Couch";
name.split('').forEach(x => console.log(x));

name.split('').forEach(function (x) {
    console.log(x);
} )

for (let i=0; i<name.length; i++) {
    console.log(name[i]);
}

// Create an Array of names (strings) with every person in the class
// as an element of the array (let names = ['bob', 'frank'...])
// add my name (eric) to the array
// use forEach to print out each name

let names = ['Rashad', 'Maurice', 'Marissa', 'Tigre'];
//names.push('Eric');
names.unshift('Eric');
names.forEach(x => console.log(x));


let nbateams = ['Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Hornets',
                'Chicago Bulls'];

nbateams.unshift('Cleveland Cavaliers');
nbateams.unshift('Dallas Mavericks');
nbateams.unshift('Denver Nuggets');
nbateams.unshift('Detroit Pistons');
nbateams.unshift('Golden State Warriors');

nbateams.push('Houston Rockets');
nbateams.push('Indiana Pacers');
nbateams.push('LA Clippers');
nbateams.push('Los Angeles Lakers');
nbateams.push('Memphis Grizzlies');
// console.log(nbateams);
let twoNBATeam = nbateams.splice(0,2);
// console.log(nbateams);
twoNBATeam[0] = twoNBATeam[0].toUpperCase();
// console.log(nbateams);
// console.log(twoNBATeam);
nbateams.push(twoNBATeam[0]);
nbateams.sort();
//nbateams.forEach(x => console.log(x));

let unsetArray = new Array(20);

nbateams.forEach(function(x) {
    if (x.toLowerCase().startsWith('d')) {
        console.log(x);
    } 
})