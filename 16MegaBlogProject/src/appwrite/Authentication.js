import { Client, Account, ID } from "appwrite";
import conf from '../EnvConfig/conf'

export class AuthenticationService {

    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const Promise = await this.account.create(ID.unique(), email, password, name)

            if (Promise) {
                // if the account is created 
                return this.loginAccount({ email, password })
            }
            else {
                return Promise
            }

        } catch (error) {
            console.log("Error : ", error);
        }

    }

    async loginAccount({ email, password }) {
        try {
            const Promise = await this.account.createEmailPasswordSession(email, password)
            return Promise
        } catch (error) {
            console.log("Error: ", error);
        }
    }


    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    async logoutAccount() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Error: ", error);
        }
    }
}


const authenticationServiceOBJ = new AuthenticationService()
export default authenticationServiceOBJ;
