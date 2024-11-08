import React from "react";
import blog3 from '../../assets/images/ridge blog1.png';
import WhatsAppLink from "../../components/WhatsappLink";
import '../../components/Styles/styles.css';
import { FaEnvelope, FaPhone } from "react-icons/fa";


function Blog3() {
  return (
     <>
     <div className="top-header">
        <div className="container-m">
          <ul>
            <li>
                <a href='tel:7775857777'><FaPhone/> +91 7775857777</a>
            </li>
            <li>
            <a href='mailto:info@ridgehomes.in'><FaEnvelope/> info@ridgehomes.in</a>
            
            </li>
          </ul>
          {/* <label><img src={Elivation} /></label> */}
        </div>
      </div>
     <div className="blogs">
      <div className="container-m">
        <img src={blog3} alt="blog" />
        <h3>Focused in south Hyderabad - Airport, Maheswaram, Pharmacity
</h3>
        <p>
        The southern half of the city's real estate market has just begun to pick up, particularly in the neighbourhoods of Jalpally, Pahadishareef, Mamidpally, Balapur, and Mallapur, which are closer to the RGI International Airport and have had consistent expansion. Since there are large expanses of open land available here, the developers are subdividing these land parcels into plots to accommodate the preferences of families who either want to buy plots now with the intention of building a house later or seek to invest in them for a larger return. Villas are being built by a few developers and builders and are being sold to people looking to purchase ready-to-move-in houses.
     </p>
        <p>
        A realtor from Jalpally named Syed Saifuddin said the region is significant because it is close to the Rajiv Gandhi International Airport and the PVNR Expressway, which links the city's southern and western regions with its central business district. "After slowing down in recent years due to Covid, real estate activity has increased here. People are increasingly investing with the intention of profiting when they eventually sell their residences, the man said.

        </p>
        <p>
        The location is closer to the older areas of the city, which attracts NRIs interested in investing in land, and most of the initiatives are HMDA authorised, according to local real estate salespeople. Depending on where the site is located, the prices range from Rs 20,000 per square yard to Rs 32,000 per square yard.

        </p>
        <p>
        Another realtor, Mohd Abdul Sohail, made the observation that the Jalpally neighbourhood is located away from the Aramgarh-Chandrayangutta-LB Nagar main road. "There is no noise, and the area is serene and tranquil with neighbouring little bodies of water. Increasing groundwater levels and the availability of drinking water is an additional benefit, he noted. 

        </p>
        <p>
        Additionally, the government only recently unveiled an unique package of several hundred crores for undertaking numerous development projects in the Jalpally municipality. Many believe that this will lead to good infrastructure growth in this region in the near future.

        </p>
        </div>
       </div>
       
       <WhatsAppLink />
     </>
  );
}

export default Blog3;
