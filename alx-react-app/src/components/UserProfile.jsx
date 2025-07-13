const UserProfile = (props)=> {
    return (
        <div>
            <h2>{props.name}</h2>
            <h2>Age: {props.age}</h2>
            <h2>Bio: {props.bio}</h2>
        </div>
    )
}

export default UserProfile;