import { User } from "../types/user";
import BaseModel from "./baseModel";

class UserModel extends BaseModel<User> {
    protected url = '/admin/users'
}

const userModel = new UserModel()

export default userModel