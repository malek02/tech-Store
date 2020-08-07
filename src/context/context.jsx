import React, {Component} from "react";




const ProductContext = React.createContext();
class ProductProvieder extends Component {
    state={
        sidebaropen:false,
        cartopen:false,
        cartitem:11
    }
hadelSidebar=(e)=>{
    this.setState({sidebaropen:!this.state.sidebaropen})
}
    render(){
        return(
<ProductContext.Provider
 value={{
    ...this.state,
    handelsidebar: this.hadelSidebar
    }}>
    {this.props.children}
</ProductContext.Provider>)

    }
}
const ProductConsumer = ProductContext.Consumer ;
export  { ProductProvieder, ProductConsumer };