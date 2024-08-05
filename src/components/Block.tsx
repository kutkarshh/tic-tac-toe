import React from "react";

interface BlockProps {
    value?: string | null;
    onClick?: () => void;
}

const Block: React.FC<BlockProps> = (props) => {

    return (<div onClick={props.onClick} className="block"><h2>{props.value}</h2></div>)

}

export default Block