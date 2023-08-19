import React from "react";

const Child = ({ isLoggedIn, setIsLoggedIn }) => {

    function Submit(e) {
        e.preventDefault();
        setIsLoggedIn(true);
    }
    return (
        <div>
            {
                !isLoggedIn &&
                <form onSubmit={Submit}>
                    <label for="">Username:</label>
                    <input type="text" /> <br />
                    <label for="">Password:</label>
                    <input type="password" />
                    <button type="submit">Login</button>
                </form>
            }
            {
                isLoggedIn && <p>You are logged in!</p>
            }
        </div>
    )
}

export default Child;