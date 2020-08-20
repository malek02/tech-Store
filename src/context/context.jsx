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
       
        email: '',
        password: '',
        login: false,
        emailcart: [], dataeamil: [],
        Total: 0
    }
    componentDidMount() {
        this.productLsit(items);


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

        const featuredList = productfinal.filter(pro => (pro.featured === true));

        const ProductList = productfinal.filter(item => (item.featured === false));
        this.setState({
            productfina: productfinal,
            featuredList: featuredList,
            ProductList, Cart: this.getStoreg(),
            cartitem: this.storeGet(),

        })


    }
    deletItem = (e) => {
        localStorage.removeItem('cart');
      
        this.setState({ Cart: [], Total: 0 })
    }

    addToCart = (e) => {

        let tempCart = [...this.state.Cart];
        let tempProducts = [...this.state.productfina];
        let tempItem = tempCart.find(item => item.id === e);

        if (!tempItem) {
            tempItem = tempProducts.find(item => item.id === e);

            let Total = tempItem.price;

            let tempitem = { ...tempItem, count: 1, Total };

            tempCart = [...tempCart, tempitem];

        }
        else {
            tempItem.count++;
            tempItem.Total = tempItem.price * tempItem.count;
        }
        this.setState({
            Cart: tempCart,
            
        }, () => {
            this.addtotal();
            this.asyncStore();
            this.OpenCart();
        })
    }

    hadelSidebar = (e) => {
        this.setState({ sidebaropen: !this.state.sidebaropen })
    }
    asyncStore = () => {
        localStorage.setItem("cart", JSON.stringify(this.state.Cart));
        localStorage.setItem("store", JSON.stringify(this.state.cartitem));

    }

    getTotal = () => {

        let tempTotal=0;
        let cartdata=0;
        this.state.Cart.forEach(item => { tempTotal += item.Total;
            cartdata += item.count })
        
        return {tempTotal, cartdata}
    }

    addtotal = () => {
        let Total = this.getTotal();

       this.setState({Total:Total.tempTotal,
        cartitem:Total.cartdata})
        
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
    eamilGet = () => {
        let eamilstor;
        if (localStorage.getItem('emaildata')) {
            eamilstor = JSON.parse(localStorage.getItem('emaildata'))
        }
        else {

            eamilstor = null;
        }
        return eamilstor;
    }
    handelSubmit = (e) => {
        e.preventDefault()

        let tempemail = [...this.state.dataeamil];
        console.log('1', tempemail);
        let tempItemm = tempemail.find(item => item === this.state.email);
        console.log('2', tempItemm);

        if (!tempItemm) {

            tempemail = [...tempemail, this.state.email];

            this.setState({ dataeamil: tempemail })

            console.log('3', tempemail)
            localStorage.setItem("emaildata", JSON.stringify(tempemail))
        }
        else {
            this.setState({ login: true })
        }

        this.setState({
            dataeamil: this.eamilGet()
        })


    }
    handelchange1 = (e) => {


        this.setState({ email: e.target.value });

    }

    handelchange2 = (e) => {
        this.setState({ password: e.target.value });

    }

    deletCart = (e) => {
        
        let tempItem = [...this.state.Cart];

        tempItem = tempItem.filter(item => item.id !== e);
        this.setState({ Cart: tempItem},
            () => {
                this.addtotal();
                this.asyncStore();
               
                
            })
    }

    render() {
        console.log("****", this.state.Cart);
        console.log("$", this.state.Total);

        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handelsidebar: this.hadelSidebar,
                    handelSidecard: this.handelSidecard,
                    addToCart: this.addToCart,
                    deletItem: this.deletItem,
                    handelSubmit: this.handelSubmit,
                    handelchange2: this.handelchange2,
                    handelchange1: this.handelchange1,
                    deletCart: this.deletCart

                }}>
                {this.props.children}
            </ProductContext.Provider>)

    }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvieder, ProductConsumer };