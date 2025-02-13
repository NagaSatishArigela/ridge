import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/styles.css";
import FormApi from "../../api/form-api";
import axios from "axios";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

function HomeContactForm(props) {
  const { page, srd } = props;
  const form = useRef();
  const [send, setSend] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    pageName: page,
  });
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPhoneTouched, setIsPhoneTouched] = useState(false);

  useEffect(() => {
    const isEmailValid = formData.email.includes("@");
    const isPhoneValid = formData.phone.length === 10;
    const isFormFilled = formData.name && formData.email && formData.phone && formData.message;
    setIsFormValid(isEmailValid && isPhoneValid && isFormFilled && isCheckboxChecked);

    if (isEmailTouched) {
      setEmailError(isEmailValid ? "" : "Invalid email address");
    }
    if (isPhoneTouched) {
      setPhoneError(isPhoneValid ? "" : "Phone number must be 10 digits");
    }
  }, [formData, isCheckboxChecked, isEmailTouched, isPhoneTouched]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    let payload;
    let { name, email, phone: number, message: note } = formData;
    console.log(page, "c");
    switch (page) {
      case "Home":
        payload = {
          parameters: [
            {
              name: "name",
              value: e.target[0].value,
            },
          ],
          broadcast_name: "Home",
          template_name: "home_page_enquiry",
        };
        break;
      case "Sunrise":
        payload = {
          parameters: [
            {
              name: "name",
              value: e.target[0].value,
            },
          ],
          broadcast_name: "Sunrise",
          template_name: "home_page_enquiry",
        };
        break;
      case "Tranquil":
        payload = {
          parameters: [
            {
              name: "name",
              value: e.target[0].value,
            },
          ],
          broadcast_name: "Tranquil",
          template_name: "tranquilvalley_form",
        };
        break;
      case "Kshetra":
        payload = {
          parameters: [
            {
              name: "name",
              value: e.target[0].value,
            },
          ],
          broadcast_name: "Kshetra",
          template_name: "kshetra_form",
        };
        break;
      case "Spring City":
        payload = {
          parameters: [
            {
              name: "name",
              value: e.target[0].value,
            },
          ],
          broadcast_name: "Spring City",
          template_name: "home_page_enquiry",
        };
        break;
      case "Contact Us":
        payload = {
          parameters: [
            {
              name: "name",
              value: e.target[0].value,
            },
          ],
          broadcast_name: "Contact Us",
          template_name: "home_page_enquiry",
        };
        break;
    }

    FormApi.whatsAppForm(payload, number)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    let templateId = "template_rolhn2e";
    emailjs
      .sendForm(
        "service_pn8vf29",
        templateId,
        form.current,
        "RIdumvJqbANv7cRbb"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result) {
            setSend(true);
            setTimeout(() => {
              setSend(false);
            }, 2000);
            form.current.reset();
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
              pageName: page,
            });

            setEmailError("");
            setPhoneError("");
            setIsEmailTouched(false);
            setIsPhoneTouched(false);
            setIsCheckboxChecked(false);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    var formdata = new FormData();
    formdata.append("phonefax", number);
    formdata.append("channel_id", page);
    formdata.append("subject", "Lead from Website");
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
    formdata.append("notes", note);
    const api_key = "qHzq2IAp6Fyr2ztLLqyuv3ty3t";
    const api_key2 = "9a18874a712cc3d4e63c6f34df1587d1";
    const app_name = "wLNpB";
    console.log(formdata.project, "formD");
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
  };

  return (
    <>
      <div className="contact-form">
        <h3>Book Your Site Visit Now</h3>
        {send && (
          <div className="toast">
            <FaCheckCircle /> <span>Information Sent</span>
            <FaTimes onClick={() => setSend(false)} style={{ cursor: "pointer", marginLeft: "10px" }} />
          </div>
        )}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) => {
              setIsEmailTouched(true);
              handleChange(e);
            }}
          />
          {emailError && <span className="error" style={{color: 'red'}}>{emailError}</span>}
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            required
            value={formData.phone}
            onChange={(e) => {
              setIsPhoneTouched(true);
              if (e.target.value.length <= 10) {
                handleChange(e);
              }
            }}
          />
          {phoneError && <span className="error" style={{color: 'red'}}>{phoneError}</span>}
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          <input
            type="hidden"
            name="pageName"
            value={formData.pageName}
            readOnly
          />
          <div style={{ display: "flex", alignItems: "start" }}>
          <input
            type="checkbox"
            id="consent"
            checked={isCheckboxChecked}
            onChange={(e) => setIsCheckboxChecked(e.target.checked)}
            style={{ width: "30%", margin: "2px 2px"  }}
          />
          <label
            htmlFor="consent"
            style={{ fontFamily: "sans-serif", fontSize: "12px", textAlign: 'start' }}
          >
            I authorise Ridge Homes & its representatives to contact me with
            updates and notifications via Email/SMS/WhatsApp/Call. This will
            override DND/NDNC
          </label>
        </div>
          <input className="btn" type="submit"  disabled={!isFormValid} value="Send Message" style={{
            backgroundColor: isFormValid ? "#DD9C3C" : "#d3d3d3",
            cursor: isFormValid ? "pointer" : "not-allowed",
          }} />
        </form>
      </div>
    </>
  );
}

export default HomeContactForm;
