define([''], function () {

    var methods = {};
    methods.signup = async function (obj) {
        console.log('hey')
        console.log(obj)
        console.log("abcd", obj)
        let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', obj);
        // let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', obj)
        console.log(response)
        return response;

        
    }
    
    return methods;

    

    
})