import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {

    const { logout } = useAuth0();

    return (
        <button onClick={() => logout({ returnTo: 'https://aquafaba-temple.vercel.app/' })}>
            Log Out
        </button>
    );
};

export default LogoutButton;