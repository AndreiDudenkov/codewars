function validatePIN (pin) {
    if (pin.match(/^([0-9]{4}|[0-9]{6})$/)) {
        console.log(true)
    } else {
        console.log(false)
    }
   }

   validatePIN('12344')

