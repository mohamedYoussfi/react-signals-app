import {effect, signal} from "@preact/signals-react";
import {ProductModel} from "../model/product.model.ts";
import Product from "../compnents/Product.tsx";



export class Store {
    products = signal<ProductModel[]>(this.loadState());
    sequence  : number;

    loadState(){
        const data = localStorage.getItem("my-store");
        console.log(data);
        if(data===undefined){
            const prods = [
                {id : 1, name : "Computer", price : 4500, selected : false},
                {id : 2, name : "Printer", price : 2300, selected : true},
                {id : 3, name : "Smart phone", price : 1200, selected : true},
            ];
            this.sequence=prods.length;
            return prods;
        } else {
            const prods = JSON.parse(data);
            this.sequence=prods.length;
            return prods;
        }
    }
    constructor() {
        effect(()=>{
            //console.log("count : "+this.products.value.length)
            localStorage.setItem("my-store",JSON.stringify(this.products.value));
        });
    }

    select(product : Product){
        const prods=this.products.value.map(p=>(p.id==product.id)
            ?{...p, selected : !product.selected}
            :p
        );
        this.products.value=[...prods];
    }

    delete(product: ProductModel) {
        const prods = this.products.value.filter(p=>p.id!==product.id);
        this.products.value=[...prods];
    }

    saveProduct(product : ProductModel) {
        const prod = {...product, id : ++this.sequence}
        this.products.value = [...this.products.value, prod];
    }
}
export const store = new Store();