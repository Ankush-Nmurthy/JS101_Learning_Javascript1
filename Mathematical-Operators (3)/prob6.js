let A = "zoro";
let B = "masai";
let C = "zuffi";
if (A == B  && B == C && C == A){
  console.log("A  B  C")
}
else if( A == B ){
  console.log("A", "B");
}
else if (B == C ){
  conosle.log("B  C");
}
else if(C == A){
  console.log("C   A");
}
else{
  console.log("All three are different");
}
