let arr = [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 90]},
			{name: "Prateek", marks: [20, 30, 40]},
      {name: "ankush" , marks:[100,100,100]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [100, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]


for(let i=0;i<arr.length;i++){
   let grade = arr[i].grade;
   let students = arr[i].students;
   let max = -Infinity;
   let st = "";
   for(let j=0;j<students.length;j++){
      let sum=0;
      let marks= students[j].marks;
      for(let k=0;k<marks.length;k++){
         sum+=marks[k];
      }
      if(sum>max){
         max=sum;
         st=students[j].name;
      }
   }
   console.log(grade+'-'+st+'-'+max);
}