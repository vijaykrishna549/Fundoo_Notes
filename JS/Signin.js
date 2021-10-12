window.addEventListener('DOMContentLoaded', function () {
    let regexEmail = RegExp('^[a-z]{2,}[@][a-z]{2,5}[.][a-z]{3}$');
    let regexPass = RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!#]*)[a-zA-Z0-9@!#*]{8,}$');



    let Email = document.getElementById('email');
    let Password = document.getElementById('password');
    const button = document.getElementById('button');
    const ehelper = document.getElementById('wemail')
    const passhelper = document.getElementById('wpass')

    let c;
    let d;

    let field1 = false;
    let field2 = false;




    Email.addEventListener('change', function () {
        c = Email.value;
    })

    Password.addEventListener('change', function () {
        d = Password.value;
    })


    button.addEventListener('click', function () {
        let isEmailValid = regexEmail.test(c)
        if (isEmailValid == false) {
            Email.style.border = "2px solid red"
            ehelper.style.display = "inline"
            ehelper.style.color = "red"

        }
        else if (isEmailValid == true) {
            field1 = true;
            Email.style.border = "1px solid green"
            ehelper.style.display = "none"
        }

        let isPasswordValid = regexPass.test(d)
        if (isPasswordValid == false) {
            Password.style.border = "2px solid red"
            passhelper.style.display = "inline"
            passhelper.style.color = "red"
        }
        else if (isPasswordValid == true) {
            field2 = true;
            Password.style.border = "1px solid green"
            passhelper.style.display = "none"
        }
        console.log("helloo")

        if ((field1 = true) && (field2 = true)) {

            console.log("signin")
            let obj1 =
            {
                "email": c,
                "password": d
            }
            console.log(obj1)
            requirejs(['../service/userservices.js'], (methods) => {

                console.log(methods)
                console.log('hii')
                methods.signin(obj1).then(function (response) {
                    console.log(response)
                    console.log(response.status)
                    // if (response.status == 200) {
                    //     window.location = "http://localhost:5500/Pages/Dashboard.html"
                    // }
                    localStorage.setItem('token', response.data.id)
                })

            });
        }

    })







})