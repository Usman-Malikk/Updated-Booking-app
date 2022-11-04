import React from "react";
import "./singlepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faCar,
  faFaceDizzy,
  faLocation,
  faPlane,
  faTaxi,
  faTimeline,
  faUser,
  faClose,
  faArrowLeft,
  faArrowRight,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import {context} from "../../app.js"
import { useContext } from "react";
import { useParams } from "react-router-dom";
 





let Singlehotel = () => {

  let {id} =useParams()
  console.log(id,"heheheh")
  // close carousel
  let closecarousel = (check) => {
    let carousels = document.getElementById("infocarousel");
    check == "open"
      ? carousels.classList.remove("close")
      : carousels.classList.add("close");
  };
  var moving=0;
  let moveimg = (move)=>
  {
    moving+=move;
    
let item  = document.getElementById("imgcont");
if(moving<-1303*5)
{
  moving=0;
}
else if(moving>0)
{
  moving=-1303*5
}
console.log(moving)
item.style.transform = `translateX(${moving}px)`
  }
  let all = useContext(context) 
 
  return (
    
    <div className="hotinfo">

      <div className="infocarousel close" id="infocarousel">
        <div className="carousel">
          <div className="closeebtnn">
          <FontAwesomeIcon
              className="insightspan"
              icon={faCamera}
              ></FontAwesomeIcon>
          <span
            onClick={() => {
              closecarousel("close");
            }}
            >
            <FontAwesomeIcon
              className="insightspan"
              icon={faClose}
              ></FontAwesomeIcon>
          </span>
              </div>
<div className="imgseci">

  <span onClick={
    ()=>
    {
      moveimg(1304)
    }
  }> <FontAwesomeIcon
              className="insightspan"
              icon={faArrowLeft}
              ></FontAwesomeIcon></span>
  <span onClick={
    ()=>
    {
      moveimg(-1304)
    }
  }> <FontAwesomeIcon
              className="insightspan leftspan"
              icon={faArrowRight}
              ></FontAwesomeIcon></span>
  <div className="imgwrapper" id="imgwrapper">
<div className="imagcont" id="imgcont">

     <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        <img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <img src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <img src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
</div>
  </div>
</div>


        </div>

     
      </div>
      <div className="hoteldesc">
        <div className="infohead">
          <h1>Tower Street Apartements</h1>
          <button>Reserver or book now</button>
        </div>
        <p>
          {" "}
          <FontAwesomeIcon className="pic" icon={faLocation} /> 5 abc road ,old
          town 33-332 karakow,Poland
        </p>
        <h2>Excellent location -500m from center</h2>
        <p className="gg">
          {" "}
          book a stay over $114 at this property and get a free airport taxi
        </p>
      </div>
      <div
        className="imgsec"
        onClick={() => {
          closecarousel("open");
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          className="img"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="img"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="img"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="img"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="img"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="img"
          alt=""
        />
      </div>

      <div className="moreinfoo">
        <div className="leftinfooo">
          <h2>Stay in the heart of krakow</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            accusantium saepe, voluptate repudiandae quibusdam unde iure
            sapiente odio totam expedita aut id! Repellat accusantium dolores
            reiciendis similique ex nulla adipisci recusandae dolorum dolore
            tempora iure labore, neque voluptas ratione, illum minus. Totam
            itaque alias hic eius eveniet ipsa maiores at error qui, quam
            mollitia deserunt asperiores molestias iusto dicta, nobis voluptate
            corrupti vitae facilis voluptatum laborum? Libero adipisci placeat
            alias?
          </p>
        </div>
        <div className="rightinfoo">
          <h2>Perfect for a 9-night stay! </h2>
          <p>
            Lorem ips similique facilis corrupti distinctio sapiente quae
            praesentium iste? Sapiente.
          </p>
          <h1>$945 -9nights</h1>
          <button>Reserve or Book Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Singlehotel;
