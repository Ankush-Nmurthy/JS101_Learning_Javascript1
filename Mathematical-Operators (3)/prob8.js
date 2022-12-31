let arr=["Batman", "Superman", "Flash", "Wonder Woman"];
let count=0;
for (let i = 0; i < arr. length; i++){
  for (let j = 2; j <= arr. length-1; j++) {
    if(arr[i][j] =="a" || arr[i][2]=="e" || (typeof(arr[i] !== "number"))){
      count++;
    }
  }
}
console.log(count) ;
