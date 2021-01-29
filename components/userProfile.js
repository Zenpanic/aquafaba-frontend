import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {

    const { user, isAuthenticated, isLoading } = useAuth0;

    if (isLoading) {
        return <div className='userProfile'>Loading...</div>
    }

    return (

        isAuthenticated && (
            <div classname='userProfile'>
                <p>Hello {user.name}!</p>
            </div>
        )
    );
};

export default Profile;