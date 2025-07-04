import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
    try{
        
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error){
        console.log(error);
    }
};
export const comparePassword = async(password, hashedPassword) => {
    try {
        console.log("ComparePassword =>", { password, hashedPassword }); // ✅ Debug
        const result = await bcrypt.compare(password, hashedPassword);
        console.log("Compare Result =>", result); // ✅ Debug
        return result;
    } catch (err) {
        console.error("Error in comparePassword", err); // ✅ Debug
        throw err;
    }
};
