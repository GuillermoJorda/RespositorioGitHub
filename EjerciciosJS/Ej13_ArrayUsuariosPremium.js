const users = [{username: "ppc90", age: 30, premium: false},{username: "lu65", age: 24, premium: false},{username: "maria3", age: 36, premium: false},{username: "abc123", age: 20, premium: true},{username: "sergio58", age: 26, premium: true}];

users.map(function(user) {
    //console.log("El usuario" + user.username + "tiene" + user.age + "años");
    console.log(`El usuario ${user.username} tiene ${user.age} años de edad`)
});

const noPremium = users.filter(function(user) {
    return user.premium === false ; // return !user.premium; es lo mismo

});

console.log("no premium", noPremium);