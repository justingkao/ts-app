import { useState } from 'react'
import Step1 from './Step1';
import Step2 from './Step2';

export default function MasterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [currentStep, setCurrentStep] = useState(1);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`Your registration detail: \n 
               Username: ${username} \n
               Password: ${password}`)
    }

    const handleNext = () => {
        let step = currentStep >= 1 ? 2 : currentStep + 1;
        setCurrentStep(step);
    }

    const handlePrev = () => {
        let step = currentStep <= 1 ? 1 : currentStep - 1;
        setCurrentStep(step);
    }

    const nextButton = () => {
        if (currentStep < 2) {
            return (
                <button
                    type="button"
                    onClick={handleNext}
                >Next</button>
            )
        } else {
            return null;
        }
    }

    const prevButton = () => {
        if (currentStep > 1) {
            return (
                <button
                    type="button"
                    onClick={handlePrev}
                >Previous</button>
            )
        } else {
            return null;
        }

    }

    return (
        <>
            <h1>A Wizard Form!</h1>
            <p>Step {currentStep} </p>

            <form onSubmit={handleSubmit}>
                <Step1
                    currentStep={currentStep}
                    username={username}
                    setUsername={setUsername}
                />
                <Step2
                    currentStep={currentStep}
                    password={password}
                    setPassword={setPassword}
                />
                {prevButton()}
                {nextButton()}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}