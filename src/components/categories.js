import React  from "react"
import style from "./categories.module.css"
import { Link } from "gatsby"

const CategoryTag = ({name, selected}) => {
    if (name === 'All'){
        return(
            <Link to={`/`}><button className={`${style.button} ${name.toLowerCase().split(' ').join('-')}`} disabled={false}>{name}</button></Link>
        )
    } else {
        return(
            <Link to={`/${name.toLowerCase().split(' ').join('-')}`}><button className={`${style.button} ${name.toLowerCase().split(' ').join('-')}`} disabled={false}>{name}</button></Link>
        )
    }
    
}

const Categories = ({data, selected}) => {

    const categoriesRaw = data.allKontentItemArticle.edges.map(({node}) => {
        return (
            <CategoryTag key={node.elements.category.value[0].name} name={node.elements.category.value[0].name} selected={selected}/>
          )
      });
    
      const categories = categoriesRaw.filter((elem, index) => {
        return categoriesRaw.findIndex((x) => {
          return x.key === elem.key;
        }) === index;
      });

      return (
        <>
            <CategoryTag key='All' name ='All' disabled={true} />
            {categories}
        </>
      )
}

export default Categories