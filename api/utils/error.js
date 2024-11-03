//handle short password error
//this is manual error ,it is created by us
export const errorhandler =(statusCode,message)=>{
    const error = new Error(message);
    error.statusCode = statusCode;
    return error;
};