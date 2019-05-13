// Ev tapshiriqlari

// var arr = [15, 30, 15, 67, 30, 95, 15];


// function getDuplicate(arr) {
//     var duplArray = [];
//     arr.sort(function (a, b) { return a - b });
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[i + 1] && !duplArray.includes(arr[i])) {
//             duplArray.push(arr[i]);
//         }
//     }
//     return duplArray;
// }

// console.log(getDuplicate(arr));


// var postDate = new Date(2019, 4, 1, 8, 31);

// function ago(postDate) {
//     var nowDate = new Date();
//     var diff = nowDate.getTime() - postDate.getTime();
//     var result;
//     var data = {
//         minute: diff / 1000 / 60,
//         hour: diff / 1000 / 60 / 60,
//         day: diff / 1000 / 60 / 60 / 24
//     }

//     if (data.minute < 60) {
//         result = data.minute.toFixed() + " deqiqe once";
//     } else if (data.hour < 24) {
//         result = data.hour.toFixed() + " saat once";
//     } else if (data.hour >= 24 && data.hour < 72) {
//         result = data.day.toFixed() + " gun once";
//     } else if (data.day > 3 && data.day < 7) {
//         result = "bu hefte";
//     } else {
//         var date=getNormalData(postDate.getDate());
//         var month=getNormalData(postDate.getMonth()+1);
//         result =date +"."+month+"."+postDate.getFullYear()
//     }
//     return result;
// }

// console.log(ago(postDate));


// function getNormalData(count){
//     if(count<10){
//         return "0"+count;
//     }
// }


// praktika 


var meyveler = ["alma", "heyva", "tut", "kivi", "armud"];


function returnA(meyveler, letter) {
    var result = [];
    for (var i = 0;i<meyveler.length;i++){
        if(meyveler[i].indexOf(letter)!= -1){
           result.push(meyveler[i]);
        }
    }
    return result;
}

console.log(returnA(meyveler, "t"));

// ["alma","heyva","armud"]