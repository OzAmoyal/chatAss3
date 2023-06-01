function Notification({notification}) {
   if(notification>0){
    return (
      <span className="badge text-bg-secondary notification">{notification}</span>
    )
    }else{
        return null;
        }
}
export default Notification;
