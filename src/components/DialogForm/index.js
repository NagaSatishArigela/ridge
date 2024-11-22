import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/styles.css";
import axios from "axios";

function DialogForm(props) {
  const { pdfUrl, setIsPDF, page, srd } = props;
  const form = useRef();
  const [send, setSend] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  console.log(page, "pa");
  const sendEmail = (e) => {
    e.preventDefault();

    let name = e.target[0].value;
    let email = e.target[1].value;
    let number = e.target[2].value;
    let note = e.target[3].value;
    let templateId = "template_xev4rbc";
    // if(page === 'Tranquil') {
    //     templateId = 'template_xev4rbc';
    // }
    var formdata = new FormData();
    formdata.append("phonefax", number);
    // formdata.append("rep_id", "donald");
    // formdata.append("channel_id", "Helpdesk");
    formdata.append("channel_id", "Download_Brochure");
    formdata.append("subject", "Lead from Download_Brochure");
    // formdata.append("email", "donald@gmail.com");
    let lead;
    if (page === "Tranquil") {
      lead = "Ridge Homes Tranquil Valley";
    } else if (page === "Kshetra") {
      lead = "Ridge Homes Kshetra";
    } else if (page === "Sunrise") {
      lead = "Ridge Homes Sunrise City";
    } else {
      lead = "Lead from Website";
    }
    formdata.append("email", email);
    formdata.append("f_name", name);
    formdata.append("Message", `${page} Brochure`);
    const api_key = "qHzq2IAp6Fyr2ztLLqyuv3ty3t";
    const api_key2 = "9a18874a712cc3d4e63c6f34df1587d1";
    const app_name = "wLNpB";
    const url = `https://paramantra.us/paramantra/API/genLead_v2.php?API_Key=${api_key}&action=${app_name}&customername=${name}&customerPhone=${number}&customeremail=${email}&leadNotes=${note}&leadProject=${encodeURIComponent(
      lead
    )}&channel=${page}`;
    const url2 = `https://app.sell.do/api/leads/create?sell_do[form][lead][name]=${name}&sell_do[form][lead][email]=${email}&sell_do[form][lead][phone]=${number}&api_key=${api_key2}&sell_do[form][note][content]=${note}&sell_do[campaign][srd]=${srd};`;

    const headers_data = {
      "Content-Type": "application/json",

      "X-API-KEY": "qHzq2IAp6Fyr2ztLLqyuv3ty3t",

      Authorization:
        "Basic cUh6cTJJQXA2RnlyMnp0TExxeXV2M3R5M3Q6cUh6cTJJQXA2RnlyMnp0TExxeXV2M3R5M3Q=",

      "Access-Control-Allow-Origin": "*",

      Accept: "/",
    };

    axios
      .post(url, {}, { headers: headers_data })
      .then((response) => {
        console.log(response.data);
        // Process the response data here
      })
      .catch((error) => {
        console.error(error);
        // Handle the error here
      });
    console.log(form.current, "g");
    axios
      .post(url2)
      .then((response) => {
        console.log(response.data);
        // Process the response data here
      })
      .catch((error) => {
        console.error(error);
        // Handle the error here
      });
    emailjs
      .sendForm(
        "service_pn8vf29",
        templateId,
        form.current,
        "RIdumvJqbANv7cRbb"
      )
      .then(
        (result) => {
          if (result) {
            setSend(true);
            setIsPDF(false);
            document.getElementById("pdfDownoad").click();
            setTimeout(() => {
              setSend(false);
            }, 2000);
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
          document.getElementById("pdfDownoad").click();
        }
      );
  };
  return (
    <>
      <div className="overlay"></div>
      <div className="contact-form pop">
        <span
          className="fa fa-close popClose"
          onClick={() => setIsPDF(false)}
        ></span>
        <h3>Fill Below Details</h3>
        <a href={pdfUrl} download id="pdfDownoad"></a>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="phone" placeholder="Phone" required />
          <input
            type="pageName"
            name="pageName"
            value={page}
            placeholder="pageName"
            className="hide"
            required
          />
          {/* <button className='btn'>Send Message</button> */}
          <div style={{ display: "flex", alignItems: "start" }}>
            <input
              type="checkbox"
              id="consent"
              checked={isCheckboxChecked}
              onChange={(e) => setIsCheckboxChecked(e.target.checked)}
              style={{ width: "30%", margin: "2px 2px" }}
            />
            <label
              htmlFor="consent"
              style={{
                fontFamily: "sans-serif",
                fontSize: "12px",
                textAlign: "start",
              }}
            >
              I authorise Ridge Homes & its representatives to contact me with
              updates and notifications via Email/SMS/WhatsApp/Call. This will
              override DND/NDNC
            </label>
          </div>
          <input
            className="btn"
            type="submit"
            value="Download"
            disabled={!isCheckboxChecked}
            style={{
              backgroundColor: isCheckboxChecked ? "#DD9C3C" : "#d3d3d3",
              cursor: isCheckboxChecked ? "pointer" : "not-allowed",
            }}
          />
        </form>
      </div>
    </>
  );
}

export default DialogForm;
