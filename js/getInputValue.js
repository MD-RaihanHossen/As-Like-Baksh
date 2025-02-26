// get value form input function 
const getValueFromInput = (id) =>{
    const getInput =  document.getElementById(id);
    const getValue = getInput.value;
    return getValue;
};


// get inner-text form text 
const getInnerTextFromText = (id) =>{
  const getElements = document.getElementById(id).innerText;
  const getInnerTextNm =   parseFloat(getElements)
  return getInnerTextNm;
};



// create function for click any buttons there.
const clickFunctionForBtn = (id) =>{
    const getValueFromMoneey = getValueFromInput('Email');
    const getValueFromPassword = getValueFromInput('password');

    // get inner text form main balance 
    const mainBalance = getInnerTextFromText('Main-Balance');
    if(id == 'Click Here'){
       if (parseInt(getValueFromPassword) === 1234) {
         const totalBalance = parseFloat(getValueFromMoneey) + mainBalance;
         console.log(totalBalance)
         document.getElementById('Main-Balance').innerText = totalBalance;
       }
       else{
        alert('your password is worng ')
       }

    }
    else{
        alert('please write word')
    }

};


