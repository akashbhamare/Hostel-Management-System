import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class Payments extends Component {
    render() {
       const style={
        textAlign:"center",
        color:"#fff",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        marginLeft:"30vw"
       }

       const loadScript = (src) => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
         
          script.onload = () => {
            resolve(true);
          };
      
          script.onerror = () => {
            resolve(false);
          };
          document.body.appendChild(script);
         
        });
      };
       
       const displayRazorpay = async () => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
      
        if (!res) {
          alert("you are offline... failed to load razorpay SDK");
          return;
        }

        var price = sessionStorage.getItem("hostelprice") * 100;
        console.log(price)
        var options = {
          key: "rzp_test_AvJJqDCDGHMYg8", // Enter the Key ID generated from the Dashboard
          amount: price, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "HOSTEL MANAGEMENT",
          description: "Room Booking Fees",
          
          
          //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          handler: function (response) {
            console.log(" handler called")

            alert(response.razorpay_payment_id);
            let hosteldetail = JSON.parse(sessionStorage.getItem("hosteldetail"));

            let obj = {
              roomId : hosteldetail.id,
                transactionId : response.razorpay_payment_id
            }

              console.log(obj);

            StudentService.makepayment(obj).then((response) =>{
              console.log("payment-success");
            }).catch((err) => {
              console.log(err)
              alert("Something went wrong")
          })
            
            
          },
          prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9999999999",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        const paymentObject = new window.Razorpay(options);
      paymentObject.open();
       
      };

    

        return (
            <div style={style}>
                <h1>Welcome Student</h1>
                <h2>Payments</h2>
                <p>click on the pay button to proceed</p>
             
                
                <button id='rzp-button1' onClick={displayRazorpay} style={{border:"none",backgroundColor:"green",fontWeight:"bold",color:"#fff",padding:"15px",borderRadius:"20px"}}>pay</button>
            </div>

           
        );

        
        
    }
}

export default Payments;