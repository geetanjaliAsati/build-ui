import React,{useState} from 'react'
import "./footer.css";
const Footer = () => {
    const[userEmail, setUserEmail] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if(userEmail == '') {
            alert('Please enter a valid email');
            return;
        }
        fetch("https://perfect-ui-default-rtdb.asia-southeast1.firebasedatabase.app/message.json",
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userEmail: userEmail,
                
            }) 
        }
    )
        setUserEmail('');
    }
    function handleEmail(event) {
        setUserEmail(event.target.value);
    }
  return (
    <div className='footer-container'>
            <div>
                <h4>CompanyInfo</h4>
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
            </div>
            <div>
                <h4>CompanyInfo</h4>
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
            </div>
            <div>
                <h4>CompanyInfo</h4>
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
            </div>
            <div>
                <h4>CompanyInfo</h4>
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
            </div>
      
            <div>
            <h4>get in touch</h4>
            <form onSubmit={handleSubmit}>
                <input type="Email" value={userEmail} onChange={handleEmail} />
                <button>Subscribe</button>
            </form>
            </div>
    </div>
  )
}

export default Footer
