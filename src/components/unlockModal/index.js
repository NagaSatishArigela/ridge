import React, { useRef, useState, useEffect } from "react";
import "./index.css";
import FormApi from "../../api/form-api";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";

const UnlockModal = (props) => {
  const { isOpen, onClose, page, srd } = props;
  const [send, setSend] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPhoneTouched, setIsPhoneTouched] = useState(false);
  const form = useRef();

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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData, page, srd);
    let payload;
    // Close the modal after form submission
    switch (page) {
      case "Home":
        payload = {
          parameters: [
            {
              name: "name",
              value: formData.name,
            },
          ],
          broadcast_name: "Home",
          template_name: "home_page_enquiry",
        };
        break;
      case "sunrisecity":
        payload = {
          parameters: [
            {
              name: "name",
              value: formData.name,
            },
          ],
          broadcast_name: "Sunrise",
          template_name: "home_page_enquiry",
        };
        break;
      case "tranquilvalley":
        payload = {
          parameters: [
            {
              name: "name",
              value: formData.name,
            },
          ],
          broadcast_name: "Tranquil",
          template_name: "tranquilvalley_form",
        };
        break;
      case "kshetra":
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
      case "springcity":
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
    FormApi.whatsAppForm(payload, formData.phone)
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
          }
        },
        (error) => {
          console.log(error.text);
        }
      );

    var formdata = new FormData();
    formdata.append("phonefax", formData.phone);
    // formdata.append("rep_id", "donald");
    // formdata.append("channel_id", "Helpdesk");
    formdata.append("channel_id", page);
    formdata.append("subject", "Lead from Website");
    let lead;
    if (page === "tranquilvalley") {
      lead = "Ridge Homes Tranquil Valley";
    } else if (page === "kshetra") {
      lead = "Ridge Homes Kshetra";
    } else if (page === "sunrisecity") {
      lead = "Ridge Homes Sunrise City";
    } else {
      lead = "Lead from Website";
    }
    // formdata.append("email", "donald@gmail.com");
    formdata.append("email", formData.email);
    formdata.append("f_name", formData.name);
    // formdata.append("subject", "Lead from Google Campaign");
    // formdata.append("queryid", "45647");
    formdata.append("notes", formData.message);
    const api_key = "qHzq2IAp6Fyr2ztLLqyuv3ty3t";
    const api_key2 = "9a18874a712cc3d4e63c6f34df1587d1";
    const app_name = "wLNpB";
    const url = `https://paramantra.us/paramantra/API/genLead_v2.php?API_Key=${api_key}&action=${app_name}&customername=${
      formData.name
    }&customerPhone=${formData.phone}&customeremail=${
      formData.email
    }&leadNotes=${formData.message}&leadProject=${encodeURIComponent(
      lead
    )}&channel=${page}`;

    const url2 = `https://app.sell.do/api/leads/create?sell_do[form][lead][name]=${formData.name}&sell_do[form][lead][email]=${formData.email}&sell_do[form][lead][phone]=${formData.phone}&api_key=${api_key2}&sell_do[form][note][content]=${formData.message}&sell_do[campaign][srd]=${srd};`;

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

    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        {send && (
          <div className="toast">
            <FaCheckCircle/> Information Sent
          </div>
        )}
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit} className="form" ref={form}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => {
                setIsEmailTouched(true);
                handleChange(e);
              }}
              required
            />
            {emailError && <span className="error" style={{ color: 'red' }}>{emailError}</span>}
          </div>
          <div className="form-group">
            <label>Number:</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => {
                setIsPhoneTouched(true);
                if (e.target.value.length <= 10) {
                  handleChange(e);
                }
              }}
              required
            />
            {phoneError && <span className="error" style={{ color: 'red' }}>{phoneError}</span>}
            <input
              type="hidden"
              name="pageName"
              value={page ? page : "Home"}
              className="hide"
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
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
          <button
            type="submit"
            disabled={!isFormValid}
            style={{
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              backgroundColor: isFormValid ? "#DD9C3C" : "#d3d3d3",
              cursor: isFormValid ? "pointer" : "not-allowed",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UnlockModal;
