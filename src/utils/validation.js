export const checkValidData = (email, password) => {
        const isEmailValid= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    
        if (!isEmailValid) return "Number is not valid";
        if (!isPasswordValid) return "Password must contain one Upper case and lower case netter, num, and symbol"
        return null;
} 