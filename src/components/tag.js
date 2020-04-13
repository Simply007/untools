import React from "react"
import style from "./tag.module.css"

const Tag = ({ categoryStyle, category }) => {
    return (
        <span className={`${style.tag} ${categoryStyle}`}>{category}</span>
    )
};

export default Tag

// {node.elements.category.value[0].name.toUpperCase()}