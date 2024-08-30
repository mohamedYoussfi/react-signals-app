import {computed} from "@preact/signals-react";
import {useStore} from "../store/useSore.ts";

export default function DashBoard(){
    const {store} = useStore();
    const selectedProudcts = computed(()=>
        store.products.value.filter(p=>p.selected).length);
    const totalPriceSelectedProducts = computed(()=>
        store.products.value
            .filter(p=>p.selected)
            .reduce((sum,product)=>sum+product.price,0)
    );
    return(
        <div className="p-3">
            <ul className="nav nav-pills">
                <li className="btn btn-outline-info p-3 m-1">
                    Selected Count: {selectedProudcts}
                </li>
                <li className="btn btn-outline-info p-3 m-1">
                    Total: {totalPriceSelectedProducts}
                </li>
            </ul>
        </div>
    );
}