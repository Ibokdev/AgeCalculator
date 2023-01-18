const BirthYear = document.getElementById("BirthYear")
// console.log (BirthYear)

const CurrentYear = 2023
// console.log (CurrentYear)

const calculate = document.getElementById("cal");

const output =document.getElementById("output")

function cal(){
    console.log ({BirthYear})
    if (BirthYear.value > 0 && BirthYear.value < CurrentYear ){
     const val = CurrentYear - BirthYear.value
     output.textContent = val
    } else {
        alert ("Input Year")
    }
    }
    calculate.addEventListener("click", cal)
