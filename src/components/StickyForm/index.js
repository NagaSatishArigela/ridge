import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import call from "../../assets/images/call-receive-svgrepo-com.svg";
import info from "../../assets/images/info-square-svgrepo-com.svg";
import UnlockModal from "../unlockModal";
import FormApi from "../../api/form-api";
import emailjs from "@emailjs/browser";
import axios from "axios";

const StickyForm = () => {
  const location = useLocation(); // assuming your route will have :page as a param
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [showForm, setShowForm] = useState(false);
  const form = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const getPageName = (path) => {
    const pathSegments = path.split("/").filter(Boolean);
    return pathSegments.length > 0 && pathSegments[0] === "blog"
      ? pathSegments[0]
      : pathSegments[pathSegments.length - 1];
  };

  const openModal = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pageName = getPageName(location.pathname);
    console.log(pageName, "testing pageName");
    let payload = {
      parameters: [
        {
          name: "name",
          value: formData.name,
        },
      ],
      broadcast_name: "Default",
      template_name: "default_template",
    };
    // Close the modal after form submission
    switch (pageName) {
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
      case "contactus":
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
      default:
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
    console.log(form.current, 'current')
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
            // setSend(true);
            // setTimeout(() => {
            //   setSend(false);
            // }, 2000);
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
    formdata.append("channel_id", pageName);
    formdata.append("subject", "Lead from Website");
    let lead;
    if (pageName === "tranquilvalley") {
      lead = "Ridge Homes Tranquil Valley";
    } else if (pageName === "kshetra") {
      lead = "Ridge Homes Kshetra";
    } else if (pageName === "sunrisecity") {
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
    )}&channel=${pageName}`;

    const url2 = `https://app.sell.do/api/leads/create?sell_do[form][lead][name]=${formData.name}&sell_do[form][lead][email]=${formData.email}&sell_do[form][lead][phone]=${formData.phone}&api_key=${api_key2}&sell_do[form][note][content]=${formData.message}&sell_do[campaign][srd]=66470c55735daf1c2ba4514d`;

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
    setFormData({
      name: "",
      phone: "",
      email: "",
    });
    form.current.reset();
    setShowForm(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="sticky-form" ref={form}>
        <div className="sticky-container">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            style={{ marginRight: "10px" }}
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            style={{ marginRight: "10px" }}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            style={{ marginRight: "10px" }}
          />
          <input
            type="pageName"
            name="pageName"
            value={getPageName(location.pathname)}
            placeholder="pageName"
            className="hide"
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#FFA500",
              color: "white",
              border: "none",
              padding: "5px 10px",
            }}
          >
            SEND
          </button>
        </div>
      </form>
      <div className="sticky-icons">
        <a
          href="tel:919000888152"
          style={{ textDecoration: "none", color: "white" }}
        >
          {/* <img src={call} alt="Call" /> */}
          <h4>CALL NOW</h4>
        </a>
        <div onClick={openModal}>
          {/* <img src={info} alt="Info" /> */}
          <h4>ENQUIRY</h4>
        </div>
        {/* <a href="https://wa.me/1234567890">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a> */}
      </div>
      {showForm && (
        <UnlockModal
          isOpen={showForm}
          onClose={closeModal}
          page={getPageName(location.pathname)}
          srd="66470be4735dafb67e848e32"
        />
      )}
    </>
  );
};

export default StickyForm;
