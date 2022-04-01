function gradingStudents(grades) {
    // Write your code here
    let res = []
    let finalGrade = 0;
    grades.forEach((grade, index) => {
        
        if(grade < 40){
            finalGrade = grade ;
        }
        else {
            let nextMultipleOfFive = Math.ceil(grade/5) * 5;
            let diff = nextMultipleOfFive - grade ;
            
            if(diff < 3){
                finalGrade = nextMultipleOfFive ;
            }
            else{
                finalGrade = grade;
            }
           
        }
        res.push(finalGrade);
    })
    
return res
}

console.log(gradingStudents([73,67,38,33]))
