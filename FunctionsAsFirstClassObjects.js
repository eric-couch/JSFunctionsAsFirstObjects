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

