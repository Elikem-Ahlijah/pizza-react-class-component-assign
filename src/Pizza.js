import {Component} from 'react';


class Pizza extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="col-md-3">
            <div className="thumbnail">
                <img src={this.props.img}/>
                    <div className="caption">
                        <h3>{this.props.title}</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente beatae ipsa reiciendis, accusamus asperiores numquam error eveniet explicabo quisquam porro iure dolores fuga, delectus quaerat exercitationem nulla, eligendi consequatur consectetur.</p>
                          
                    </div>
            </div>
        </div>
        )
    }
}

export default Pizza;