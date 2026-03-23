import {useState, useEffect} from 'react';

const ToggleComponent = () => {
    const [isDark, setDarkMode] = useState(false);

    const HandleToggleChange = () => {
        setDarkMode(isDark => !isDark);
    }

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            // Set Dark Mode
            root.setAttribute("data-theme", "dark");
        } else {
            // Unset Dark Mode
            root.removeAttribute("data-theme");
        }
    })

    return (
        <label class = "mode-toggle">
            <input 
            type = "checkbox" 
            id = "dark-mode-toggle"
            onChange = {HandleToggleChange}
            />
            <span class = "slider"></span>
        </label>
    )
}

export default ToggleComponent;
