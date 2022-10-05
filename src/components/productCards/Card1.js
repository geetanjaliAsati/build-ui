import React, {useEffect, useState} from 'react'
import "./card.css";

const Card1 = (props) => {
    const [card1, setCard1] = useState([]);
    const cardArray = [];
    function increCount() {
        props.setCount(props.count + 1);
    }
    useEffect(
        () => {
            fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json').then(data => data.json()).then(res => {
                // for(item in res)
                console.log(res);
                for(let item in res) {
                    console.log(res[item], 'res items ***');
                    cardArray.push(res[item]);
                }
                setCard1(cardArray);
                
            })
        },
        []
    );
    // console.log(card1, " cards---->>");
   

   
    const cardItems = card1.map((cardele) => {
        return (
                          
                    <div className='card' style={{marginRight:"15px", borderRadius:"2px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",}}>
                            <img src={cardele.productImage} alt="" />
                            <div className='card-text'>
                                <h3>{cardele.productName}</h3>
                                <h3>{cardele.oldPrice}</h3>
                                <h3>{cardele.newPrice}</h3>
                            </div>
                            <div className='cart-btn' >
                                <button onClick={increCount} style={{backgroundColor:"#23A6F0", width:"100%",border:"1px solid #23A6F0", padding:"10px", color:"white",textTransform:"uppercase",fontSize:"1em",letterSpacing:"2px",bottom:"0px"}}>
                                    add to cart
                                    </button>
                            </div>
                    </div>
        )
    });
    
  return (
    <div>
        
        <h2>Products</h2>
        <div className='container'style={{width:"100%"}}>
            {
                cardItems
            }
        </div>
    </div>
  )
}

export default Card1
