import {UserTypes} from "../enums/user-types";

export interface User {
    contactNumber: string,
    email: string
    password: string
    role: UserTypes,
    userImage: string,
    username: string
}