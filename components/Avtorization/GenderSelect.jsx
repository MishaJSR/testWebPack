import React, {useEffect} from "react";


const GenderSelect = (props) => {

    const options = props.genderMass.map((text, index) => {
        return <option key={index}>{text}</option>
    });

    return options
}
export default GenderSelect