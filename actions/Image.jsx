import React from "react";

const Image = ({sendUrl}) => {
return (
    <div
        style={{
            backgroundImage: `url(${sendUrl})`
        }}
    />
)
}

export default Image