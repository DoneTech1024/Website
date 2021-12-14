//import codpic from './images/Coding _Monochromatic.png';
function Home() {
  return (
<div>
    <div className="container-fluid intro">
        <div className="row align-item-center text-white">
            <div className="col-md-6 ">
                <h4 className="display-2">welcome to donetech <br/>a software company</h4>
                <button className="rounded-pill border-primary">GET STARTED</button>
            </div>
            <div className="col-md-6">
                <img src="images/Coding _Monochromatic.png"className="text-end" alt="video illustration" height="250" width="250" srcset=""/>
                <h4>learn how to code with us </h4>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row" >
            <h3 className="fw-bold text-center text-underline">Trusted by the following companies</h3>
            <div className="heading-line mb-5">
            </div>
        </div>
       </div>
    <div className="container">
        <div className="row">
            <div className="col-md-3 text-center">
                <img src="images/google-symbol.png " height="60px" width="60" alt="goole" srcset=""/>
                <h4>google</h4>
            </div>
            <div className="col-md-3 text-center">
                <img src="images/amazon-pay.png" height="60px" width="60" alt="amazon" srcset=""/>
                <h4>amazon</h4>
            </div>
            <div className="col-md-3 text-center">
                <img src="images/microsoft.png" height="60px" width="60" alt="microsoft" srcset=""/>
                <h4>microsoft</h4>
            </div>
            <div className="col-md-3 text-center">
                <img src="images/facebook.png " height="60px" width="60" alt="facebook" srcset=""/>
                <h4>facebook</h4>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Home;
