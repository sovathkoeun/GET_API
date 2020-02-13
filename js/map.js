// const DINNER_MAP = new Map();

// DINNER_MAP.set('Monday','Eat Fish');
// DINNER_MAP.set('Tusday', 'Eat adn Fish');
// DINNER_MAP.set('Wednesday','Eat and Treykhor');
// DINNER_MAP.set('Thursday','Eat and Meat');
// DINNER_MAP.set('Friday','Eat and Vegetable');
// DINNER_MAP.set('Saturday','Eat and Salt');
// DINNER_MAP.set('Sunday','Eat and Chicken');

//  console.log(DINNER_MAP.size);
//  console.log(DINNER_MAP.get('Friday'));
//  console.log(DINNER_MAP);

// DINNER_MAP.forEach( (value, key) => {
//     // console.log(key + " : " + value);
//     var table = document.querySelector('table');
//     table.innerHTML +=`
//         <table>
//             <tr>
//                 <td>${key}</td>
//                 <td>${value}</td>
//             </tr>
//         </table>
//     `;
// })

//=======================///======================///

const STUDENT_MAP =  new Map();

STUDENT_MAP.set(123,{"name":"Romdul","age":18 , "province":"Pursat"});
STUDENT_MAP.set(124,{"name":"Bonpha","age":19 , "province":"Siem Riep"});
STUDENT_MAP.set(125,{"name":"Chompey","age":20 , "province":"Kampong Cham"});
STUDENT_MAP.set(126,{"name":"Chompa","age":19 , "province":"Battambong"});
STUDENT_MAP.set(127,{"name":"Komlab","age": 25, "province":"Pailin"});

STUDENT_MAP.forEach( (value,key) => {
    var table = document.querySelector('table');
    table.innerHTML +=`
        <tr>
            <td>${key}</td>
            <td>${value['name']}</td>
            <td>${value['age']}</td>
            <td>${value['province']}</td>
        </tr>
    `;
})