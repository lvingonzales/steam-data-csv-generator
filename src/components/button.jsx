import buttonStyles from "../styles/button.module.css"
import { useState } from "react"
export default function Button() {
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    }

    return(
        <>
            <div className={buttonStyles.wrapper}>
                <button onClick={handleClick}>Click Me!</button>
                {isLoading ? <p className={buttonStyles.text}>Loading...</p> : null}
            </div>
        </>
    ) 
}
