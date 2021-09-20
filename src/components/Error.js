const Error = (state)=>{
    var error = {};
if(!state.fullname){
    error.fullname = "enter your name"
}
if(!state.address){
    error.address = "enter your address"
}
if(!state.code){
    error.code = "enter zip-code"
} else if(state.code.length<6){
    error.code = "enter valid zip code"
}
if(!state.phone){
    error.phone = "enter contact number"
} else if(! /^[6-9][0-9]{9}$/.test(state.phone)){
error.phone = "enter valid 10 digit number"
}
if(!state.email){
    error.email = "enter email address"
} else if(! /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(state.email)){
    error.email = "mention valid email address"
}

return error
}

export default Error;

