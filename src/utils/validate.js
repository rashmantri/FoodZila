
const checkValidData = (name ,email , password ) =>{
    const isNameValid = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name)
    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email)
    const isPasswordValid =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
    
    if(!isNameValid ) return "Name is not Valid!"
    if(!isEmailValid) return "Email Id is not Valid!"
    if(!isPasswordValid) return "Password is not Valid!"
    

    return null
}

export default checkValidData