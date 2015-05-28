

// function checkPhone() {

//     var phone = document.getElementById('txtPhone');
//     var filter = ^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$;

//     if (!filter.test(phone.value)) {
//     alert('Please provide a valid email address');
//     phone.focus;
//     return false;
//  }

function checkPhone(phoneField){
        var reg = ^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$;

        if (reg.test(phoneField.value) == false) 
        {
            alert('Invalid phone');
            return false;
        }

        return true;

}