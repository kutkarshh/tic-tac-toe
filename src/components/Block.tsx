import React from "react";

interface BlockProps {
    value?: "X" | "O" | null;
    onClick?: () => void;
}

const blockBg = {
    X: 'red',
    O: 'blue',
};

const Block: React.FC<BlockProps> = (props) => {
    const { value, onClick } = props;
    const blockClass = value ? `block ${blockBg[value]}` : "block";

    return (
        <div onClick={onClick} className={blockClass}>
            <h2>{value}</h2>
        </div>
    );
};

export default Block;
