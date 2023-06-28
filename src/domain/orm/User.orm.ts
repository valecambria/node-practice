import { userEntity } from "../entities/User.entity";
import { logError, logSucces } from "@/utils/logger";

//CRUD PETITIONS

/**
 * Method to obtain all users from collection "Users" in Mongo Server
 */
export const getAllUsers = async (): Promise<any[] | undefined> => {

    try {
        let userModel = userEntity();

        //Search all users
        return await userModel.find({isDeleted: false})
    } catch (error) {
        logError(`[ORM ERROR] Getting All Users -> ${error}`)
    }
}

//TODO 
//Get user by ID
//Get user by email
//Delete user by ID
//Create new user
//Update user by ID 