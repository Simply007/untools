import React  from "react"
import style from "./categoryTag.module.css"

const CategoryTag = ({node, categoryTag}) => {
    return (
        <button className={`${style.button} ${categoryTag}`} key={node.elements.category.value[0].name}>{node.elements.category.value[0].name}</button>
    )
}

export default CategoryTag