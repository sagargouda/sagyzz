import {useDispatch, useSelector} from "react-redux";
import ItemList from "./ItemList";
import {clearItem} from "../utils/cartSlice";

function Cart(props) {
    const cartItems = useSelector((store) =>store.cart.items)
    const dispatch = useDispatch()
    function handleClearCart(){
        dispatch(clearItem())
    }
    return (
        <div className="tw-text-center tw-m-4 tw-p-4">
            <div className="tw-flex tw-justify-between tw-w-6/12  tw-m-auto">
                <h1 className="tw-text-5xl tw-font-bold">Cart</h1>
                <button className="button " onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className="tw-w-6/12 tw-m-auto tw-mt-10 tw-border-2 tw-my-2">
                {
                    cartItems.length === 0 && <h1>Add Items To watch your cart</h1>
                }
                <ItemList items={cartItems}/>
            </div>
        </div>
    );
}

export default Cart;