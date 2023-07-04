import React from 'react';

export default function Step2(props: any) {
    const { currentStep, password, setPassword } = props;
    if (currentStep !== 2) {
        return null;
    }

    return (
        <div>
            <label htmlFor="password">Pass Word</label>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder='Enter your password'
                onChange={e => setPassword(e.target.value)}
            />
        </div>
    );

}
