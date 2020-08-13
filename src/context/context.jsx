import React, { Component } from "react";
import { items } from './productData';




const ProductContext = React.createContext();
class ProductProvieder extends Component {
    state = {
        sidebaropen: false,
        cartopen: false,
        cartitem: 0,
        productfina: [],
        featuredList: [],
        ProductList: [],
        Cart: [],
        reducer: null
    }
    componentDidMount() {
        this.productLsit(items);

        console.log('eeee', this.state.productfina);
    }
    handelSidecard = () => {
        this.setState({ cartopen: !this.state.cartopen })
    }
    OpenCart = () => {
        this.setState({ cartopen: true })
    }
    productLsit = (produit) => {
        const productfinal = produit.map(item => {
            const id = item.sys.id;
            const image = item.fields.image.fields.file.url;
            let list = { id, ...item.fields, image }
            return list;
        })
        console.log('dddd', productfinal)
        const featuredList = productfinal.filter(pro => (pro.featured === true));

        const ProductList = productfinal.filter(item => (item.featured === false));
        this.setState({
            productfina: productfinal,
            featuredList: featuredList,
            ProductList, Cart: this.getStoreg(),
            cartitem: this.storeGet()
        })


    }
    deletItem = (e) => {
        localStorage.removeItem('cart')
    }

    addToCart = (e) => {

        let tempCart = [...this.state.Cart];


        console.log("1", tempCart)
        let tempProducts = [...this.state.productfina];
        console.log("2", tempProducts)
        let tempItem = tempCart.find(item => item.id === e);
        console.log("3", tempItem)
        if (!tempItem) {
            tempItem = tempProducts.find(item => item.id === e);
            console.log("4", tempItem)
            let Total = tempItem.price;
            console.log("5", Total)
            let tempitem = { ...tempItem, count: 1, Total };
            console.log("6", tempitem)
            tempCart = [...tempCart, tempitem];
            console.log("7", tempCart)
        }
        else {
            tempItem.count++;
            tempItem.Total = tempItem.Total * tempItem.count;


        }
        this.setState({
            Cart: tempCart,
            cartitem: this.gettotal()
        })



        this.asyncStore(e);
        this.OpenCart(e);
    }
    hadelSidebar = (e) => {
        this.setState({ sidebaropen: !this.state.sidebaropen })
    }
    asyncStore = () => {
        localStorage.setItem("cart", JSON.stringify(this.state.Cart));
        localStorage.setItem("store", JSON.stringify(this.state.cartitem));

    }
    gettotal = () => {
        let cartitem = 0;

        this.state.Cart.forEach(item => { cartitem += item.count }
        )
        return cartitem
    }
    getStoreg = () => {
        let cartdata;

        if (localStorage.getItem('cart')) {
            cartdata = JSON.parse(localStorage.getItem('cart'));

        }
        else {
            cartdata = [];

        }
        return cartdata;

    }
    storeGet = () => {
        let storedata;
        if (localStorage.getItem('store')) {
            storedata = JSON.parse(localStorage.getItem('store'))
        }
        else {

            storedata = null;
        }
        return storedata;
    }
    render() {
        console.log("****", this.state.Cart);
        console.log("reduc", this.state.cartitem);

        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handelsidebar: this.hadelSidebar,
                    handelSidecard: this.handelSidecard,
                    addToCart: this.addToCart,
                    deletItem: this.deletItem
                }}>
                {this.props.children}
            </ProductContext.Provider>)

    }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvieder, ProductConsumer };