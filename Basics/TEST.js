//// 1)


// function getResult(value) {                                       //   value = 13
// if (value > 4) {                                                  //   if(13>4) condition
// return 10;                                                        //   result = 10 
// } else {                                                          //   else case
    // return 20;                                                    //   result = 20
    // }
    // }
    // console.log(getResult(3))                                     // console.log or function call


////  2)
//     function getResult(value) {                                   // value = "hello"
//         if (value.length < 4) {                                   // if length of the value is less than 4
//         return 'short';                                           // result = short
//         } else {                                                  // else case
//         return 'long';                                            // result = long
//         }                            
//         }
//    console.log(getResult('hello'))                                // console.log or function call



//// 3)
// function getResult(bool1, bool2) {                                // bool1 = true and bool2 = false
//     return bool1 || bool2 ? 'one or more' : 'neither';            // condition ? true statement : false statement
//     }
//     console.log(getResult(true, false))                           // console.log or function call


//// 4)
// function getResult(arr) {                                         // arr = [1,2,3]
// if (arr.length) {                                                 // condition: lenght should not be zero
// return 'full';                                                    // output = full
// } else {                                                          // else case
// return 'empty';                                                   // output = empty
// }
// }
// console.log(getResult([1, 2, 3]))                                 // console.log or function call


//// 5)
// function getResult(value) {                                       // value = 9 
// return value === 10 ? 'ten' : 'not ten';                          // condition ? true statement : false statement
// }
// var result = getResult(9);                                        // console.log or function call


//// 6)
// function getResult(value) {                                       // value = "10"
// return typeof value === 'number' ? 'numeric' : 'other';           // condition ? true statement : false statement
// }
// }
// var result = getResult('10');                                     // console.log  or function call 


//// 7)
// function getSum(values) {                                         // values = [1, 2, 3]
// var sum = 0;                                                      // sum = 0 
// for (var i = 0; i < values.length; i++) {                         // values.lenght = 3 
// sum += values[i];                                                 // sum = sum + values[0-2]
// }
// return sum;                                                       // result = sum
// }                            
// function getAverage(values) {                                     // getAverage function 
// return getSum(values) / values.length;                            // getAverage = sum / 3
// }
// console.log(getAverage([1, 2, 3]))                                // console.log or function call


//// 8)
// var nonNumericCards = {                                           // nonNumericCards is a object containing keys&values
// 1: 'Ace',
// 11: 'Jack',
// 12: 'Queen',
// 13: 'King'
// };
// var suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];            // suits array
// var pack = [];                                                    // pack is a empty array
// for (var suitIndex = 0; suitIndex < suits.length; suitIndex++) {  // values of suitIndex [0-3]
// var suit = suits[suitIndex];                                      // suit = [0-3]
// for (var number = 1; number < 14; number++) {                     // number = [1-14]
// var value = nonNumericCards[number] || number;                    // value = Ace || 1
// pack.push(value + ' of ' + suit);                                 // pack = [ace of hearts]
// }
// }
// console.log(pack[0])                                              // console.log or function call


// 9)
// var person1 = {                                                   // person1 is a object containing keys&values
// name: 'Bob',
// dateOfBirth: '1973-01-03'
// };
// var person2 = {                                                   // person2 is a object containing keys&values
// name: 'Bob',
// dateOfBirth: '1982-01-03'
// };
// function sameDateAndMonth(date1, date2) {                        // function
// var sameMonth = date1.getMonth() == date2.getMonth();            // comparing month of date1 and month of date2
// var sameDate = date1.getDate() == date2.getDate();               // comparing date of date1 and date of date2
// return sameMonth && sameDate;
// }
// function haveSameBirthday(person1, person2) {                   // funcrion
// var date1 = new Date(person1.dateOfBirth);                      // date1 = '1973-01-03'
// var date2 = new Date(person2.dateOfBirth);                      // date2 = '1982-01-03'
// return sameDateAndMonth(date1, date2);
// }
// console.log(haveSameBirthday(person1, person2))                 // console.log or function call


// 10)
// function add12Hours(time) {                                     // time = '7:30 PM'
// var hourMinute = time.split(':');                               // hourMinute = ['7', '30 PM']
// return 12 + parseFloat(hourMinute[0]) + ':' + hourMinute[1];    // 12+7 : 30
// }
// function to24HourTime(time) {                                   // function
// var parts = time.split(' ');                                    // parts = ['7', 30', 'PM']
// if (parts[1] === 'AM') {                                        // condition 
// return parts[0];
// }
// return add12Hours(parts[0]);
// }
// console.log(to24HourTime('7:30 PM'))                            // console.log or function call


////11)
// var numberArray = new Array(10);                                //array of 10 empty items
// for (var i = 0; i < numberArray.length; i++) {                  // for loop
// numberArray[i] = i * 3;                                         // adding items
// }
// console.log(numberArray[8])                                     // console.log or function call


////12)
// var string = '0123456789';                                      // string 
// var newString = '';                                             // empty string
// for (var i = 0; i < string.length; i++) {                       // for loop
// var char = string.charAt(i);                                    // 
// newString += char + char;                                       // adding each item *2
// }
// console.log(newString.length)                                   // console.log or function call


//// 13)
// var score = 10;                                                 
// function doubleScore() {                                        // function 
// score = score * 2;                                              // score*2
// }
// doubleScore();
// console.log(result = score)                                     // console.log or function call


//// 14)
// var users = [                                                  // object
//     { username: 'amy', admin: true },
//     { username: 'bob', admin: false },
//     { username: 'helen', admin: true },
//     { username: 'amir', admin: false },
//     { username: 'carmen', admin: false }
//     ];
//     function countAdmins(userArr) {                            //  function 
//     var count = 0;                                  
//     for (var i = 0; i < userArr.length; i++) {                 // for loop 
//     if (userArr[i].admin) {                                    // if the value of key is true then execute 
//     count = count + 1;
//     }
//     }
//     return count;
//     }
//     var result = countAdmins(users);                           //  cosole.log or function call


////15)
// var users = [];                                                // empty array 
// function addUser(users, newUser) {
// return [].concat(users, newUser);
// }
// users = addUser(users, 'bob');                                 // appending items
// users = addUser(users, 'amy');
// users = addUser(users, 'will');
// users = addUser(users, 'lin');
// console.log(users.length)                                      // length or function call



//// 16)
// var list = [1, 2, 3];                              
// function doubleItems(input) {
// for (var i = 0; i < input.length; i += 1) {
// input[i] = input[i] * 2;                                       // updating the items of original array
// }
// }
// doubleItems(list);
// console.log(result = list[1])                                  // at list[2] = 2*2 = 4 


//// 17)
// var animal = {                                                 // object 
// name: 'Snuffles',
// type: 'DOG'
// };
// function rename(input, newName) {                              // updating the value of name key in the function
// input.name = newName;
// }
// rename(animal, 'Snowball');
// console.log(result = animal.name)                              // console.log or function call



//// 18)
// function calculateMagnitude(vector) {                                           // function
//     var magnitudeSquared = (vector.x * vector.x) + (vector.y * vector.y);       // 3*3 + 4*4 = 25
//     var magnitude = Math.sqrt(magnitudeSquared);                                // udrt of 25 = 5
//     vector.magnitude = magnitude;
//     }
//     var vector = { x: 3, y: 4 };
//     calculateMagnitude(vector);
//     console.log(result = vector.magnitude)                                      // conosole.log or function call



//// 19)
// function getSalutation(title, firstName, lastName) {            // function 
// var salutation;
// if (!title) {                                                   // condition
// salutation = firstName + ' ' + lastName;                        // salution = Jane AMrple         
// } else {                                                        // else
// salutation = title + ' ' + lastName;                            // Miss Marple
// }
// return salutation;
// }
// console.log(result = getSalutation('Miss', 'Jane', 'Marple'))   // console.log or function call



//// 20)
// function getLogin(user) {                                       // function 
//     var login;
//     if (!user.admin) {                                          // condition
//     login = user.email;                                         // login = jane@example.com
//     } else {                                                    // else 
//     login = user.username;                                      // login = jane
//     }
//     return login;                                               //return
//     }
//     var user = {                                                // object
//     username: 'jane',
//     admin: true,
//     email: 'jane@example.com'
//     };
//     console.log(result = getLogin(user)                         // console.log or function call




////21)
// function canLegallyDrink(age) {                                 // function
//     var legal = age >= 18;                                      // age >= 18
//     if (legal) {                                                // condition
//     return 'yes';                                               // yes
//     } else {                                                    // else
//     return 'no';                                                // no
//     }
//     }
//     console.log(canLegallyDrink(14))                            // console.log or function call



////22)
// function containsCarbon(compound) {                             // function
//     if (compound.indexOf('C') === -1) {                         // condition : if given word doesn't exist return -1
//     return 'no';                                                // no
//     } else {                                                    // else 
//     return 'yes';                                               // yes
//     }
//     }
//     var result = containsCarbon('H2O');                         // console.log or function call


////23)
// var totalPokemon = 150;                                         // 150
// function caughtThemAll(numPokemon) {                            // function
// if (numPokemon !== totalPokemon) {                              // if 120!= 150
// return 'gotta catch them all';                                  // print
// } else {                                                        // else
// return 'caught them all';                                       // print
// }
// }
// console.log(result = caughtThemAll(102))                        // console.log or function call


//// 24)
// function isMeaningOfLife(num) {                                 // function
// if (num === 42) {                                               // if 41===42
// return 'yes';                                                   // yes
// } else {                                                        // else
// return 'no';                                                    // no
// }
// }
// var result = isMeaningOfLife(41);                               // console.log or function call



////25)
// var fruits = ['Banana', 'Pear', 'Apple', 'Mango'];              // array
// var sorted = fruits.sort(function(string1, string2) {           // function
// return string1.length - string2.length;                         // sorted using compare function
// });
// console.log(result = sorted[0])                                 /// console.log or function call



//// 26)
// var users = [                                                   // object
// { username: 'amy', admin: false },                              
// { username: 'bob', admin: true },
// { username: 'helen', admin: true },
// { username: 'amir', admin: false },
// { username: 'carmen', admin: false }
// ];
// function isAdmin(user) {                                        // function 
// return user.admin;                                              // only true will pass
// }
// var admins = users.filter(isAdmin);
// console.log(result = admins[0].username)                        // console.log



////  27)
// function getInitials(sentence) {                                // function
// var words = sentence.toLowerCase().split(' ');                  // saperate each word 
// var initials = words.map(function(word) {
// return word.charAt(0);                                          // first index of every word
// });
// return initials.join('');
// }
// console.log(result = getInitials('Fly me to the moon'))         // console.log or function call


////28) 
// var itemsForSale = [                                            // object 
//     { name: 'cheese', price: 3 },
//     { name: 'tv', price: 300 },
//     { name: 'socks', price: 2 },
//     { name: 'soft toy', price: 7 },
//     { name: 'fridge', price: 120 }
//     ];
//     function formatPrice(item) {                                // function 
//     item.price = '£' + item.price + '.00';                      // £2.00
//     return item;
//     }
//     var formattedItemsForSale = itemsForSale.map(formatPrice);
//     console.log(result = formattedItemsForSale[2].price)        // console.log or function call


////29)
// var everything = ['awesome', 'awesome', 'awesome'];             // array
// function isAwesome(item) {                                      // 
// return item === 'awesome';
// }
// console.log(result = everything.filter(isAwesome).length === everything.length)