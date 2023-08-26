import ThanksImg from "../assets/thanks.png"

function Thanks() {
   
    return (
      <>
     
          <img src={ThanksImg} />
          <h1>Thank You!</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
       
      </>
    );
  }

  export default Thanks