
document.getElementById('logIn-btn').addEventListener('click', () => {
//     event.preventDefault;
    const getValueFromEmail = getValueFromInput('Email');
    const getValueFromPassword = getValueFromInput('password');
   if(getValueFromEmail === 'raihan' && parseFloat(getValueFromPassword) === 1234){
    window.location.href = 'index2.html'
   }

    
});


// there click here btn function
