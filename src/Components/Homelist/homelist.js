import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./homelist.css";
import { context } from "../../app.js";
function Homelist() {
  let navigate = useNavigate();
  let all = useContext(context);
  // mapping my data
  useEffect(() => {
    
    let hotii = document.getElementById("hotelcont");
    axios
      .get("http://localhost:8800/Hotel")
      .then((res) => {
        if (res.data) {
          let data = res.data;

          // Display data function

          let displaydata = (items,success) => {
            if(success)
            {  let item = items.map((i) => {
              return `<div class='hotelli'>
<div class='bgimg'>
</div>
<div class='hoteldesc'>
<h2>${i.name}</h2>
<p>${i.address}</p>
<span class='bgg'>Free airport taxi</span>
<p><b>${i.Title}</b></p>
<p>${i.desc}</p>
<span class='gcolor'><b>fee Cancelation</b> </span>
<p class='gcolor'>you can cancel later,so lock in this green price today </p>
</div>
<div class='moredesc'>
<div class='adesc'>
${i.rating > 4 ? "<h3>Top Rated</h3>" : " <h3>Excellent</h3>"}

<span class='bgb'>${i.rating}</span>
</div>
<div class='price'>
<h2>${i.price}$</h2>
<p>include taxes and fee</p>
<button class="bgb aa"><b>See availability</b></button>
</div>
</div>
</div>`;
            });

            item = item.join("");
            hotii.innerHTML = item;          
          }
          else
          {
            console.log(items,success)
            hotii.innerHTML=items
          }
          };

          // searching the data
          if (all.search !== "") {
            // data contains res.data from API
            data = data.filter((e) => {

              if( e.name.toLowerCase() === all.search.toLowerCase())
              {
                return e
              }
              else {return false}
            })
            if(data.length===0)
            {
              console.log(data)
              displaydata(`<div><h1 style=color:#2773b0>No Result found for <span style="color:black; font-size:20px" >(${all.search})</span></h1><br/><p style=color:red><b>search for something else</b></p></div>`,false);
            }
            else displaydata(data,true)

          } else {
            displaydata(data,true);
          }
        } else {
          hotii.innerHTML = `<h1 style=text-align:center>Oops no data found :(</h1>`;
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <div className="homelist" id="hotelcont">
      {/* <div className='hotelli'>
      <div className='bgimg'>
      
      </div>
      <div className='hoteldesc'>
        <h2>Hotel Nameeeee!</h2>
        <p>distance</p>
        <span className='bgg'>Free airport taxi</span>
        <p><b>Studio apartment with air conditioning</b></p>
        <p>Entire studio . 1 bathroom 21m2 1 full bed</p>
        <span className='gcolor'><b>fee Cancelation</b> </span>
        <p className='gcolor'>you can cancel later,so lock in this green price today </p>
      </div>
      <div className='moredesc'>
        <div className='adesc'>
          <h3>Excellent</h3>
          <span className='bgb'>8.9</span>
        </div>
        <div className='price'>
          <h2>$112</h2>
          <p>include taxes and fee</p>
          <button className="bgb aa" ><b>See availability</b></button>
        </div>
      </div>
     </div> */}
    </div>
  );
}

export default Homelist;
