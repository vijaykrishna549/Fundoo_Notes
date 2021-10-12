
// var requirejs = require("requirejs");
// const signup = requirejs('../service/userservice.js')

// var fs = requirejs("fs");
// console.log(fs);
window.addEventListener('DOMContentLoaded', function() {
    let regexName = RegExp('^[A-Z]{1}[a-z]{2,}$');
    let regexLName = RegExp('^[A-Z]{1}[a-z]{2,}$');
    let regexEmail = RegExp('^[a-z]{2,}[@][a-z]{2,5}[.][a-z]{3}$');
    let regexPass = RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!#]*)[a-zA-Z0-9@!#*]{8,}$');


    const fName = document.getElementById('first_name');
    const lName = document.getElementById('last_name');
    let Email = document.getElementById('email');
    let Password = document.getElementById('password');
    let Confirm = document.getElementById('cpassword')

    const button = document.getElementById('button');
    const helper = document.getElementById('hname')
    const ehelper= document.getElementById('wemail')
    const passhelper = document.getElementById('wpass')
    let first_name;
    let a;
    let b;
    let c;
    let d;
    let e;


    let field1 = false;
    let field2 = false;
    let field3 = false;
    let field4 = false;
    let field5 = false;

    
    fName.addEventListener('change', function () {
         a = fName.value;
        console.log(a)        
    })

    lName.addEventListener('change', function () {
        b = lName.value;
    })

    Email.addEventListener('change', function () {
        c = Email.value;
    })

    Password.addEventListener('change', function () {
        d = Password.value;
    })

    Confirm.addEventListener('change', function () {
        e = Confirm.value;
    })


    button.addEventListener('click', function () {
        let isfNameValid = regexName.test(a)
        if(isfNameValid == false) {
        fName.style.border = "1px solid red"
        helper.style.display = "inline"
        helper.style.color = "red"
        }
        else if (isfNameValid == true) {
        field1 = true;
        fName.style.border = "1px solid green"
        helper.style.display = "none"
        }

        console.log("Field 1" + field1)
        console.log(isfNameValid)

        let islNameValid = regexLName.test(b)
        if(islNameValid == false) {
        lName.style.border = "1px solid red"
        helper.style.display = "inline"
        helper.style.color = "red"
        }
        else if (islNameValid == true) {
        field2 = true;
        lName.style.border = "1px solid green"
        helper.style.display = "none"
        }

        console.log("Field 2" + field2)
        console.log(islNameValid)

        let isEmailValid = regexEmail.test(c)
        if(isEmailValid == false) {
        Email.style.border = "1px solid red"
        ehelper.style.display = "inline"
        ehelper.style.color = "red"
        }
        else if (isEmailValid == true) {
        field3 = true;
        Email.style.border = "1px solid green"
        ehelper.style.display = "none"
        }
        console.log("Field 3" + field3)

        console.log(isEmailValid)

        let isPasswordValid = regexPass.test(d)
        if(isPasswordValid == false) {
        Password.style.border = "1px solid red"
        passhelper.style.display = "inline"
        passhelper.style.color = "red"
        }
        else if (isPasswordValid == true) {
        field4 = true;
        Password.style.border = "1px solid green"
        passhelper.style.display = "none"
        }
        console.log("Field 4" + field4)
        console.log(isPasswordValid)


        let isConfPasswordValid = regexPass.test(e)
        if(isConfPasswordValid == false) {
        Confirm.style.border = "1px solid red"
        passhelper.style.display = "inline"
        passhelper.style.color = "red"
        }
        else if (isConfPasswordValid == true) {
        field5 = true;
        Confirm.style.border = "1px solid green"
        passhelper.style.display = "none"
    
       }
       console.log("Field 5" + field5)

       console.log(isConfPasswordValid)

       
    if((field1 = true) && (field2 =true) && (field3 =true) && (field4 =true) && (field5 =true ) ){
        //  if(field1 ==false && field2 ==false && field3 ==false && field4 == false && field5 ==false){
        
            
        let obj =
        {
         "firstName": a,
            "lastName": b,
            "service": "advance",
            "email": c,
            "password" : d 
        }
        console.log(obj)
        requirejs(['../service/userservice.js'], (methods)=>{
            // e.signup(obj);
            console.log(methods)
            console.log('hii')
            methods.signup(obj).then(function(response){
                console.log(response)
                console.log(response.status)
                if(response.status == 200){
                    window.location = "http://localhost:5500/Pages/Signin.html"
                }
                localStorage.setItem('token', response.data.id)
            })

            // debugger;
    
    
        } );
    }
    })


})
