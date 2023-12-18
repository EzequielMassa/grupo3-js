import { User } from "../classes/user.class.js";

export const createAdminUser = () =>{
    const adminUser = new User({email: "admin@admin.com", password: "admin83i", role: "admin"})
    const users = localStorage.getItem("users")

    if (!users || users?.length == 0) {
        localStorage.setItem("users", JSON.stringify([adminUser]))
    }
}
