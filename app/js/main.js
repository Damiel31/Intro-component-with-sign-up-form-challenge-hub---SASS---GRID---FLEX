function btnClaimFreeTrial() {

    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const emailAddress = document.getElementById('emailAddress').value
    const password = document.getElementById('password').value

    const userCredentials = [firstName, lastName, emailAddress, password]

    let mailformat = /\S+@\S+\.\S+/

    for (let index = 0; index < userCredentials.length; index++) {

        switch (index) {
            case 0:
                if (userCredentials[index] === '') {
                    document.getElementById('errorMessageFirstName').style.display = 'block'
                    document.getElementById('firstName').classList.add('inputErrorMessageIcon')
                } else {
                    document.getElementById('errorMessageFirstName').style.display = 'none'
                    document.getElementById('firstName').classList.remove('inputErrorMessageIcon')

                }
                break;

            case 1:
                if (userCredentials[index] === '') {
                    document.getElementById('errorMessageLastName').style.display = 'block'
                    document.getElementById('lastName').classList.add('inputErrorMessageIcon')
                } else {
                    document.getElementById('errorMessageLastName').style.display = 'none'
                    document.getElementById('lastName').classList.remove('inputErrorMessageIcon')
                }
                break;

            case 2:
                if (mailformat.test(userCredentials[index]) === false) {
                    document.getElementById('errorMessageEmail').style.display = 'block'
                    document.getElementById('emailAddress').classList.add('inputErrorMessageIcon')

                } else {
                    document.getElementById('errorMessageEmail').style.display = 'none'
                    document.getElementById('emailAddress').classList.remove('inputErrorMessageIcon')

                }
                break;

            case 3:
                if (userCredentials[index] === '') {
                    document.getElementById('errorMessagePassword').style.display = 'block'
                    document.getElementById('password').classList.add('inputErrorMessageIcon')
                    
                } else {
                    document.getElementById('errorMessagePassword').style.display = 'none'
                    document.getElementById('password').classList.remove('inputErrorMessageIcon')

                }
                break;
        }

    }
}