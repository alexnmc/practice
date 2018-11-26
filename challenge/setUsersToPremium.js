
/*
users is an array of user objects.
Each user object has the property isPremium.
Set each user's isPremium property to true.
Return the users array.

Input Example:

[{ ... isPremium: false }, { ... isPremium: false }]

Output Example:

[{ ... isPremium: true }, { ... isPremium: true }]
*/


function setUsersToPremium(users) {
for(i=0;i<users.length;i++){users[i].isPremium = true}                         
    return users
}