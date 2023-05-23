import Users from '../models/users.js'
const createUser=async(username,password,displayName,profilePic)=>{
    const user=new Users({
        username,
        password,
        displayName,
        profilePic
    })
    await user.save()
    return user
}