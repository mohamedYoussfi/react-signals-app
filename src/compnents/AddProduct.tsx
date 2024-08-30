import {useState} from "react";
import {ProductModel} from "../model/product.model.ts";
import {useStore} from "../store/useSore.ts";


export default function AddProduct(){
    const {store} = useStore();
    const [product,setProduct] = useState<ProductModel>(
        {id : 0, name : "", price : 0, selected :false}
    )
    function save(event){
        event.preventDefault();
        store.saveProduct(product);
    }
    return(
        <div className="p-3">
            <form onSubmit={save}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Selected</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text" className="form-control"
                                   onChange={(e) => setProduct({...product, name: e.target.value})}
                                   value={product.name}
                            />
                        </td>
                        <td>
                            <input type="text" className="form-control"
                                   onChange={(e) => setProduct({...product, price: parseFloat(e.target.value)})}
                                   value={product.price}
                            />
                        </td>
                        <td>
                            <input type="checkbox" className="form-check"
                                   onChange={(e) => setProduct({...product, selected: Boolean(e.target.value)})}
                                   checked={product.selected}
                            />
                        </td>
                        <td>
                            <button type="submit" className="btn btn-success">Save</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}