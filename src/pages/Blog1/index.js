import React from "react";
import blog1 from '../../assets/images/ridge blog1.jpg';
import WhatsAppLink from "../../components/WhatsappLink";
import '../../components/Styles/styles.css';


function Blog1() {
  return (
     <>
     <div className="top-header">
        <div className="container-m">
          <ul>
            <li>
                <a href='tel:7775857777'><i className="fa fa-phone"></i> +91 7775857777</a>
            </li>
            <li>
            <a href='mailto:info@ridgehomes.in'><i className="fa fa-envelope"></i> info@ridgehomes.in</a>
            
            </li>
          </ul>
          {/* <label><img src={Elivation} /></label> */}
        </div>
      </div>
     <div className="blogs">
      <div className="container-m">
        <img src={blog1} alt="blog" />
        <h3>Overall Market</h3>
        <p>
        Initially limited to Hyderabad's downtown, real estate activity expanded as the city experienced a boom, but it also did so with more vigour in the then-new neighbourhoods along the adjacent suburbs. The real estate market expanded from Jubilee Hills to Madhapur, then to Kondapur, Gachibowli, Miyapur, Nizampet, and finally to Gopanpally, Nallagandla, Manikonda, and Narsingi. Open land, plots, and even flats became in high demand in Hyderabad's neighbouring districts as a result of a cascade impact on the property market. 

        </p>
        <p>
        The most recent evaluation by Knight Frank India demonstrates the rising demand for real estate in Hyderabad's neighbouring areas. The survey, which included four districts in Hyderabad's residential market—Hyderabad, Medchal-Malkajgiri, Rangareddy, and Sangareddy—shows strong development in the areas' real estate transactions.
 </p>
 <p>
 According to the report, at the district level, home sales and housing plot registrations in the Medchal-Malkajgiri district were registered at 44%, followed by Rangareddy district at 38%, and Hyderabad district at 14% of all registrations. In terms of year-over-year comparison, the Hyderabad district's housing plot registrations, which were 14% in August of last year, remained at that level in August 2022 as well. However, during the same period (August 2021 to August 2022), registrations increased from 39% to 44% in the Medchal-Malkajgiri area.

 </p>
 <p>Looking at the data for the Rangareddy district reveals that the registration rate for property sales dropped somewhat from 41% in August 2021 to 38% in August 2022. In the meantime, Hyderabad registered 5,181 residential units in August 2022, up 20% month-over-month, according to Knight Frank India (MoM). 
</p>
<p>Ashada Maasam, which is seen as less auspicious for new projects, caused a fall in demand and registrations the previous month, which was reversed in August 2022. The overall amount of real estate transactions in August 2022 was Rs 2,658 crore, representing an increase of 26% MoM. The city has recorded sales of 46,078 residential units at a total of Rs 22,680 crore since the year's beginning. Additionally, demand for residential units in the range of Rs 25 lakh to Rs 50 lakh accounted for 55% of all sales in August 2022, up from a share of 37% in August 2021.
</p>
<p>
The Hyderabad residential market is still seeing strong demand patterns despite the effects of external factors like rising interest rates and prices. As long as consumers are attracted to  housing plots supported by job security, rising household incomes, and savings, we anticipate housing demand to stay stable.
</p>
        </div>
       </div>
       
       <WhatsAppLink />
     </>
  );
}

export default Blog1;
