import React, {useState} from "react";

function Cart({addedWatches}){

    let [count, setCount] = useState(1)

    function handleCount(e){
        if(e.target.textContent === "+"){
            setCount(count+=1);
        }else{
            if(count>0){
            setCount(count-=1)
            }
        }
    }

    return (
        <div id="cart-div">
            <div id="cart-list">
                {addedWatches.map((watch)=>{
                    return (<div className="cart-item" key={watch.id}>
                        <section className="cart-image">
                            <img src={watch.image} alt="cart item" />
                        </section>
                        <p className="cart-details">
                            {watch.name} <br />
                            {watch.price} <br />
                        </p>
                        <button onClick={handleCount}>-</button>{count} <button onClick={handleCount}>+</button>
                    </div>);
                })}
            </div>
        </div>
    );

}

export default Cart;