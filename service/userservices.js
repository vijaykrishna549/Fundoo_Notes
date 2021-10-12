define([''], function () {

    var methods = {};
    methods.signin = async function (obj1) {
        console.log('hey')
        console.log(obj1)
        console.log("abcd", obj1)
        let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', obj1);
        // let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', obj)
        // console.log(response)
        return response;
    }
    
    return methods;

    

    
})