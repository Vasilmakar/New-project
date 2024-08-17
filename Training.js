// var key = [1,2,3];
// const value = 'Hello';
// const obj = {
// value
// };



// const obj ={
//     name: 'John',
//     age: 0,
//     strike : 123,
//     has:true,
// } 



// const entries = Object.entries(obj);
// for(let i = 0; i<entries.length; i++){
//     let entry = entries[i];
//     let key = entry[0];
//     let value =entry[1];
//     console.log(key, value);
// }

// --------------------------------------------------
// const userInformation = {
//     name: 'Іван' ,
//     surname: 'Іванов'  ,
//     age: 15,
//     family:{
//         dad:{
//             name: 'Олександр' ,
//     surname:  'Іванов'  ,
//     age:null,
    
//         },
//         mom:{
//             name: 'Наталя'  ,
//             surname: 'Іванова'  ,
//         },
//         brother:{
//             name: 'Костя' ,
//     surname: 'Іванов'   ,
//      age: 10,
//         },
//     }
// }
// function getInfo(user) {
//     // Accessing user information directly
//     const { name, surname, age, family } = user;

//     // Accessing family members
//     const { dad, mom, brother } = family;

//     // Constructing output strings
//     counter(family);
//     const userInfo = `У ${user.name} ${user.surname} ${family.lenth}`;
//     const fatherInfo = `Батько - ${dad.name} ${dad.surname} ${dad.age}`;
//     const motherInfo = `Мати - ${mom.name} ${mom.surname} ${mom.age}`;
//     const brotherInfo =  `Брат - ${brother.name} ${brother.surname} ${brother.age}`;
//     console.log(userInfo + 'членів сім\'ї');
//     console.log(fatherInfo + '.' );
//     console.log(motherInfo + '.' );
//     console.log(brotherInfo + ' ' + 'років.' );
// }
// function counter(family){
//     for(let i = 0; i<family.lenth; i++){
//         const member = family[i];
//         for(let age in member){
//             member.age;
//         }
//         if(typeof member.age === null || typeof member.age === undefined){
//             member.age = 'Не вказано';
        
//     }
// }
// }
// getInfo(userInformation);
// -------------------------------------------------
// getInfo(userInformation);

// function  getInfo(massive){
//     let obj =  Object.values(massive);
//     let infosun = '';
//    let Father = ' ';
//    let Mother = '';
//    let Brother = '';
//    let number = 0;
//    let anotherMassive = '';
//    let afer = '';
//    let twoI = ' ';
//     let FamilySeparate = ' ';
//     let familySeparate = ' ';
//     let hub = ' ';
// let mama = {};
//     for(let i = 0; i<obj.length; i++){
//         const infoMembers = obj[3];
//          twoI = Object.values(infoMembers);
//          FamilySeparate =  twoI[i];
//         // number =  FamilySeparate.length;
//         //  familySeparate = FamilySeparate[i];
//           hub =  Object.values(FamilySeparate);
//            let papa = ' ';
//           for(let i = 0; i<hub.length; i++){
//             const member = hub[i];
//          papa += ' ' + member;

//           }
//         //   hub =  Object.values(familySeparate);
//         // if(typeof familySeparate.age === null || typeof familySeparate.age === undefined ){
//         //     familySeparate.age = ' Не відомо';}
        
//         //  Father =  familySeparate[i];
         
         
//         //  Mother =valueofMember[1];
//         //  Brother = valueofMember[2];
//         // const masive = obj[i];
//         // const sunsurname = masive[1] ;
//         // const infoFamily = infoMembers[1];
//         // const massiveOfvalues =  Object.values(infoFamily);
//         // anotherMassive = massiveOfvalues[i];
       
// mama += papa;
//     //    after = Object.values(anotherMassive);
    
     
//     //    var memberInfo  = Object.values(anotherMassive);
//     //   const valueOfmember =  memberInfo[i];
//     //   const Source =  valueOfmember[1];

//     //  infosun+= ' ' + sunsurname ;
//     // console.log(JSON.stringify(obj))
//     // console.log(JSON.stringify(FamilySeparate));
//     // console.log(JSON.stringify(hub));
//    } console.log(mama)
//     //  console.log(JSON.stringify( obj));
//     //  console.log(JSON.stringify(twoI));
//     //  console.log(JSON.stringify(hub));
//     //  console.log(JSON.stringify(Father));
// //  console.log( infosun);
//     }-----------------------------------------------------

    const array = 'lesson, lessons, Для новачків, Для початківців, Створити сайт, css, css3, Курси по css';
    const newarray = array.split(', ');
    const lowerCaseArray = newarray.map(element => element.toLowerCase());
    let newMassive = [];
    lowerCaseArray.forEach((element)=>{
    if(element.includes(' ')){
        let gap = element.split(' ');
      element =  gap.join('_');
}
    newMassive.push('#' + element);

})

    const fromYou = newMassive.join(' ');
    console.log(fromYou);
  

const countries = [{
      country: 'Гаана',
      weather:19,
      warm: true,
      cities:["Аккра","Тамале","Кумасі"],
}, {
      country: 'Гренландія',
      weather:20,
      warm: false,
      cities:["Нуук","Какорток"]
}, {
      country: 'Малі',
      weather:25,
      warm: true,
      cities:["Мопті","Бамако","Джене"],
  }, {
    country: 'Данія',
    weather:5,
    warm: false,
    cities:["Коппенгаген"],
}];

const result = countries.reduce((acc, element)=>{
    const name = element.country;
    const weather = element.weather;
    let weath = ' ';
    if(element.warm === true){
        weath = '+' + weather;
    }
    else{
        weath = '-' + weather;
    };
    const joined  = element.cities.join(',')

    acc.push(`В країні ${name} ${weath} градусів. У складі такі міста:  ${joined}`);
         return acc;
    і}, []);
           console.log(result);