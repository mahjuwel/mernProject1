class ApiURL{
    static BaseURL="http://localhost:5000/api/v1/";
    static createLogin=this.BaseURL+"AppUserLogin";
    static AppUserList(){ 
           
        return this.BaseURL+"AppUserList";
    };
}
export default ApiURL;