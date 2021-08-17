const dateOfBirth = document.querySelector("#date-of-birth");

const luckyNumber = document.querySelector("#lucky-number");

const checkButton = document.querySelector("#check-number");

const outputDisplay = document.querySelector("#output-display");


// ------------------------------------------------------

function compareValue(sum,luckyNumber)
{

if(sum % luckyNumber.value === 0 )
{

    showMessage("Hurray!!! Your Birthday Is Lucky");

}
else
{

    showMessage("your birthday is not lucky");
}


}


function checkBirthdayDateIsLucky ()
{

const dob = dateOfBirth.value;

const sum = calculateSum(dob);

if(sum && luckyNumber.value)
{

compareValue(sum,luckyNumber);

}

else
{
    showMessage("Please enter both your Date Of Birth and Your Lucky Number to proceed");
}

}

function calculateSum (dob)
{

    dob = dob.replaceAll("-"," ");

    // storing the replaced dob in the dob variable

    let sum = 0;
    for(let i=0 ; i<dob.length; i++)
    {

        sum = sum + Number(dob.charAt(i));

        //number is a one method of data Type conversion, which converts any data type to number


    }
   
    return sum;

}


function showMessage (show)
{

outputDisplay.innerText = show;

}

checkButton.addEventListener('click',checkBirthdayDateIsLucky);