import { useState } from "react";

export default function Form( props ){

    const [ formData, setFormData ] = useState({
        searchterm: "",
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        props.pokemonsearch(formData.searchterm);
    }
    
    return (
        <fieldset>
            <legend>Search 'Em All ✅</legend>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="searchterm"
                onChange={handleChange}
                value={formData.searchterm}
                />
                <input type="submit" value="SEARCH" />
            </form>
        </fieldset>
    );
};