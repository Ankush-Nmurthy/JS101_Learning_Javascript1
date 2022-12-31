let N = 4 ;

for (let i = 0 ; i < N ; i++){
  let bag ="";
  for(let j=0 ; j <= i ; j++){
    bag = bag +"*"+" ";
  }
  console.log(bag);
}
for (let i = N ; i >= 0; i--){
  let bag = "";
  for (let j = 0 ; j <= i ; j++){
    bag = bag + "*"+" ";
  }
  console.log(bag);
}