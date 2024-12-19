export const validateEmailAndPassword=(email,password)=>
{
        const emailTest=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        const passwordTest=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

        if (!emailTest ) return "Email is not valid";
        if (!passwordTest ) return "Password is not valid";

        return


}