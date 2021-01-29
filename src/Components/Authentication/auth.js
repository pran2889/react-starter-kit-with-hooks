import axiosinstance from "../../helper/axiosinstance";
class Auth {
    constructor() {
        this.authenticated = false;
    }
    login(loginData, cb) {
        axiosinstance()
            .post(`/api/accounts/login/`, JSON.stringify(loginData))
            .then((response) => {
                if (response) {
                    localStorage.setItem(`token`, response.data.token);
                    this.authenticated = true;
                    cb();
                }
            }, (error) => {
                this.authenticated = false;
            });
    }
    logout(cb) {
        localStorage.removeItem(`token`);
        this.authenticated = false;
        cb();
    }
    isAuthenticated() {
        if (!this.authenticated && localStorage.getItem(`token`) && localStorage.getItem(`token`) !== null) {
            this.authenticated = true;
        }
        return this.authenticated;
    }

    register(userInfo, cb) {
        axiosinstance()
            .post(``, JSON.stringify(userInfo))
            .then((response) => {
                if (response) {
                    cb();
                }
            }, (error) => {
                cb();
            });
    }
}
export default new Auth();