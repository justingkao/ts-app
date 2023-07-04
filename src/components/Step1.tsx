import React from 'react';

export default function Step1(props: any) {
    const { currentStep, username, setUsername } = props;
    if (currentStep !== 1) {
        return null;
    }

    return (
        <div>
            <label htmlFor="username">User Name</label>
            <input
                type="text"
                id="username"
                name="username"
                value={username}
                placeholder='Enter user name'
                onChange={e => setUsername(e.target.value)}
            />
        </div>
    );

}
