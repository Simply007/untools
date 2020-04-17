import React  from "react"
import style from "./categoryTag.module.css"

class CategoryTag extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Tag name',
            selected: false,
        };
        this.selected = this.selected.bind(this);
    }

    selected(e){ 
        console.log(e.target)
        this.setState({ 
            selected: e.target.value 
        })
    }

    render(){
        return(
            <button onClick={this.selected} value={this.state.selected} className={`${style.button} ${this.props.name.toLowerCase().split(' ').join('-')}`} key={this.props.name} disabled={this.state.selected}>{this.props.name}</button>
        )
    }
}

export default CategoryTag