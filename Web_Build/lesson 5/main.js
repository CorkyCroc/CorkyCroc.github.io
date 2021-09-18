//bài 1:
// function giaiThua(n) {
//   let r = 1;
//   for (i = 1; i <= n; i++) {
//     r = r * i;
//   }
//   return r
// }

// let result = giaiThua(5)
// console.log(result);

//bài 2
// var str = 123;
// var result = "";
// for (var i = 0; i < 10; i++) {
//     // if(i<9){
//     //     result += str + "-"
//     //     // result += `${str}-`;
//     // }else{
//     //     result += str
//     // }
//     if(i>9){
//         result += str
//     }else{
//         result += str + "-"
//     }
// }
// console.log(result);

//bài 3
//for (var i = 0; i <= 50; i++){
//    if (i % 2 == 0){
//        console.log(i);
//   }
//}
//for (var i = 0; i <= 50; i++){
//    if (i % 3 == 0){
//        console.log(i);
//    }
//}
//for (var i = 0; i <= 50; i++){
//    if (i % 4 == 0){
//        console.log(i);
//    }
//}

//bài 4
//var a = 40;
//var b = 6;
//var r= a + b;
//for ( let i = 1; i<a*b; i++) {
//    if(i%a == 0 && i%b == 0)
//    r = i
//    break
//}
//console.log(r);

//bài 5--
//function UCLN(a, b) {
//  while (a != b) {
//    if (a > b) {
//      a = a - b;
//    } else {
//      b = b - a;
//    }
//  }
//  return a;
//}
//console.log(UCLN(100, 4));

//bài 6
//let x = day(4)
//function day(n) {
//    if (n = 2) {
//        console.log('thứ 2');
//    }else if(n = 3){
//        console.log('thứ 3');+
//    }else if (n = 4) {
//        console.log('thứ 4');
//    }else if (n=5) {
//        console.log('thứ 5');
//   }else if (n = 6) {
//        console.log('thứ 6');
//    }else if (n = 7) {
//        console.log('thứ 7');
//    }else if (n=0) {
//        console.log('chủ nhật');
//    }else {
//        console.log('inappropriate value');
//    }
//}
