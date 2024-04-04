import React from 'react';
import '../Styles/styles.css';



function WhatsAppLink(props) {
    const { whatsappLink } = props;

   

  return (
    <section className="banner banner-whatsapp">
        {/* <a href={whatsappLink ? whatsappLink : "https://wa.link/yl20ri"} className="whatsapp-link"><i class="fa fa-whatsapp"></i></a> */}
        <a href={whatsappLink ? whatsappLink : "https://wa.link/jpe2jv"} className="whatsapp-link"><i class="fa fa-whatsapp"></i></a>
    </section>
  );
}

export default WhatsAppLink;
