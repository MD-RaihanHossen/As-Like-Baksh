// get value form input function 
const getValueFromInput = (id) => {
    const getInput = document.getElementById(id);
    const getValue = getInput.value;
    return getValue;
};


// get inner-text form text 
const getInnerTextFromText = (id) => {
    const getElements = document.getElementById(id).innerText;
    const getInnerTextNm = parseFloat(getElements)
    return getInnerTextNm;
};



// there is a function start for add and minus moneey on main balance 
const clickFunctionForBtn = (id) => {
    // for add moneey
    const getValueFromMoneey = getValueFromInput('Email');
    const getValueFromPassword = getValueFromInput('password');

    // for withdrow moneey
    const emailWithdrow = getValueFromInput('Email-withdrow');
    const passwordWithdrow = getValueFromInput('password-withdrow');


    // get inner text form main balance 
    const mainBalance = getInnerTextFromText('Main-Balance');
    if (id == 'Click Here' || id == 'Withdrow') {
        if (parseInt(getValueFromPassword) || parseInt(passwordWithdrow) === 1234 ) {
            if (id == 'Click Here') {
                const totalBalance = parseFloat(getValueFromMoneey) + mainBalance;
                document.getElementById('Main-Balance').innerText = totalBalance;
            }
            else if(id == 'Withdrow') {
                const totalBalances = mainBalance - parseFloat(emailWithdrow);
                document.getElementById('Main-Balance').innerText = totalBalances;
            }

            //  clear input all filde
            document.getElementById('Email').value = '';
            document.getElementById('password').value = '';
            document.getElementById('Email-withdrow').value = '';
            document.getElementById('password-withdrow').value = '';
        }

        else {
            alert('your password is worng ')
        }

    }
    else {
        alert('please write word')
    }

};



// there is a function end for muinus moneey on main balance 




// there hava change btn options start here 

// common function for hide sub containers here
const hidefunctions = (id) => {
    document.getElementById('diposite-main-Container').classList.add('hide-container');
    document.getElementById('withdow-main-Container').classList.add('hide-container');

    // which one is clicked that one only show;
    document.getElementById(id).classList.remove('hide-container');

};


// i will write function daligation li deluyar vai;
document.getElementsByClassName('btn-subcontainer')[0].addEventListener('click', (event) => {
    if (event.target.innerText == 'Withdrow') {
        hidefunctions('withdow-main-Container')
    }
    else if (event.target.innerText == 'Diposit') {
        hidefunctions('diposite-main-Container')
    }
    else if (event.target.innerText == 'History') {

    }
    else {
        alert('please click Buttton')
    }
});


// there hava change btn options end here 