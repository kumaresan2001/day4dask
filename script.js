//1)question
// var obj1={
//     "name":"person1",
//     "age":"5"
// },
// obj2={
//     "age":"5",
//     "name":"person1"
// };
// JSON.stringify(obj1) === JSON.stringify(obj2)
//     console.log((obj1,obj2));
    

//2)question 

//     var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send()
//  request.onload=function(){
//     var data = request.response
//     var result = JSON.parse(data)
//     for(var i=0;i<result.length;i++)
//     {
//         console.log(result[i].flag,result[i].name.common);
//     }
//  }

 //3)question
 var request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all",true)
 request.send()
  request.onload=function(){
     var data = request.response
     var result = JSON.parse(data)
     for(var obj of result){
        console.log(obj.name.common , obj.region,obj.subregion)
     }
     
  }