let count=0;
for ( let i=0; i<=3; i++){
  for( let j=0; j<=3; j++ ){
    for( let k=0; k<=2; k++){
      if ( i==j && i==k) {
        count++;
      }
    }
  }
}

console. log( count ) ;
