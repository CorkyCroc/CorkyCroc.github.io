//P1
//1

// let firstName = "Thanh"
// let surName = " Dat"
// let lastName = "Nguyen"
// alert(lastName + firstName)
// alert(surName + firstName)

//2
// let x = prompt("Nhập một số nguyên bất kỳ");
// let y = prompt("Nhập một số nguyên bất kỳ");
// let i = x%y;
// console.log(i);

//3
// let x="This is a string"
// console.log(`Độ dài của string là ${x.length}`);

//P2
//1
// let fruits = [["Watermelon",1], ['Apple',5], ['Lychee', 20]]
// console.log(`I have ${fruits[0][0]}`);
//2
// fruits.forEach(function(item, index, array) {
//     console.log(item, index)
//   })
//3
// var myDog = {
//     name: 'Ngáo',
//     leg: 4,
//     friends: 'everything'
// }
// console.log(myDog);

// myDog.name = 'Husky'
// console.log(myDog);

// myDog.color = 'Brown'
// console.log(myDog);

// delete myDog.friends
// console.log(myDog);

//P3
//1
// const h = 5;
// for (let i=1; i<= h; i++) {
//     for (let k = h; k > i; k--) {
//         document.writeln("-")
//     }
//     for (let j = 0; j <= i*2-2; j++) {
//         document.writeln("+");
//     }
//     document.writeln("<br />");
// }

//2
// let numb = [9,7,9,0,7,8,387,123,456]
// for (let x of numb) {
//     if (x%2 == 0|| x == 0) {
//         console.log(x);
//     }
//     console.log(x);
// }

//3
// let ans = [];
// do {
//   let x = prompt("Bạn đã ăn cơm chưa?");
//   ans.push(x);
// } while (x);
// {
//   if (x == "yes" || x == "Yes") {
//       let a = prompt("Bạn muốn ăn bánh không?");
//       ans.push(a);
//   } else {
//     do {
//       let b = prompt("Bạn muốn ăn sườn không?");
//       ans.push(b);
//     } while (b);
//     {
//       if (b == "yes" || b == "Yes") {
//         let e = prompt("Bạn muốn tự nấu không?");
//         ans.push(e);
//       }else {
//         do {
//             let d = prompt("Bạn muốn ăn trứng rán không?");
//             ans.push(d);
//         }while (d);
//         {
//           if (d == "yes" || d == "Yes") {
//             let r = prompt("Bạn muốn tự rán không?");
//             ans.push(r);
//           }
//       }
//     }
//   }
// }

//P4
// let fruits = ['mango', 'apple', 'melon'];
// let x = prompt('Nhập một loại quả');
// while (x) {
//     if (x == fruits[0]) {
//         alert ('https://www.vietnamonline.com/media/uploads/froala_editor/images/VNO_Mango.jpg')
//     }else if (x == fruits[1]) {
//         alert ('https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834')
//     }else if (x == fruits[2]) {
//         alert ('https://static.libertyprim.com/files/familles/melon-large.jpg?1574629891')
//     }else {
//         alert ('Inappropriate Value')
//         break
//     }
// }