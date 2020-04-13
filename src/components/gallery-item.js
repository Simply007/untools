import React from "react"
import { Link } from "gatsby"
import style from "./gallery-item.module.css"
import Tag from "../components/tag"

const GalleryItem = ({data}) => {
  let categoryTag = data.elements.category.value[0].name.toLowerCase().split(' ').join('-');
  return (
    <Link to={`/${data.elements.url_slug.value}`} key={data.id} className={style.item}>
        <div>
            <img src={`${data.elements.icon.value[0].url}`} alt=""></img>
            <h2>{data.elements.name.value}</h2>
            <Tag categoryStyle={categoryTag} category={data.elements.category.value[0].name.toUpperCase()}></Tag>
            <p>{data.elements.when_useful.value}</p>
        </div>
    </Link>
  )
};
  
export default GalleryItem