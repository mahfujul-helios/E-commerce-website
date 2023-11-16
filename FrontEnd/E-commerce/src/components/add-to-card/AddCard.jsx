
import './addCard.css'
const AddCard = (cartItems) => {
    const allPrice=cartItems.cartItems;
    const quantity=cartItems.cartItems?.length 

    let total=0;
    
    
    for (const product of allPrice){
        total=total + product.product_details.price * product.quantity;
    }

    const shipping= total * 0.01
    const shippigF=parseFloat(shipping.toFixed(2))
    const tax= total * 0.02
    const taxF=parseFloat(tax.toFixed(2))
    const  grandT=total + shippigF + taxF
    const grandTF=parseFloat(grandT.toFixed(2))

  

    return (
        <div className='add-card'>
               <h2>Order Summary</h2>
                    <div>
                        <p>Quantity : {quantity}</p>
                        <p>Total Price : $ {total}</p>
                        <p>Shipping : $ {shippigF}</p>
                        <p>Tax : $ {taxF}</p>
                        <p>Grand Total: $ {grandTF} </p>
                    </div>
        </div>
    );
};

export default AddCard;