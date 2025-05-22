import React from "react";

const Profile = React.memo(function Profile({
    firstname,
    lastname,
}: {
    firstname: string;
    lastname: string;
}) {
    console.log("Rendered Profile Component");
    return (
        <div>
            <h2>Profile</h2>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
        </div>
    );
});

export default Profile;
