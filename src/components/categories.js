import React  from "react"
import style from "./categories.module.css"
import { Link } from "gatsby"

const CategoryTag = ({name, disable}) => {

    console.log(`the state of disabled for ${name} is ${disable}`)
    if (name === 'All'){
        return (
            <Link to={`/`}><button className={`${style.button} ${name.toLowerCase().split(' ').join('-')}`} disabled={disable}>{name}</button></Link>
        )
    } 
    return (
        <Link to={`/${name.toLowerCase().split(' ').join('-')}`}><button className={`${style.button} ${name.toLowerCase().split(' ').join('-')}`} disabled={disable}>{name}</button></Link>
    )
}

const Categories = ({data, selected}) => {
    console.log(selected)

    const categoriesRaw = data.allKontentItemArticle.edges.map(({node}) => {
        if (node.elements.category.value[0].name === selected) {
            return (
                <CategoryTag key={node.elements.category.value[0].name} name={node.elements.category.value[0].name} disable={true}/>
                
            )
        } else {
            return (
                <CategoryTag key={node.elements.category.value[0].name} name={node.elements.category.value[0].name} disable={false}/>
              )
        }
      });
    
      const categories = categoriesRaw.filter((elem, index) => {
        return categoriesRaw.findIndex((x) => {
          return x.key === elem.key;
        }) === index;
      });

      if (selected === 'All') {
        return (
            <>
                <CategoryTag key='All' name='All' disable={true} />
                {categories}
            </>
          )
      }
      return (
        <>
            <CategoryTag key='All' name='All' />
            {categories}
        </>
      )
}

export default Categories