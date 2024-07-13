import style from './Services.module.css';
import imgWebsite from './website.png';
import imgDashboard from './dashboard.png';
import Button from './Button';


function Services() {
    
    function landingPageService(){
        console.log('Landing page service selected – we will contact you shortly!')
    }

    function dashboardService(){
        console.log('Dashboard Analytics service selected – we will contact you shortly!')
    }


    return (
        <section className={style.divContent}>
            <h2>Select the Services</h2>
            <legend>Available Services:</legend>

            <div className={style.serviceOptions}>
                <div className={style.serviceItem}>
                    <img className={style.options} src={imgWebsite} alt="Website Service" />
                    <Button btnDescription={"Landing Page"} event={landingPageService}/>
                    
                </div>

                <div className={style.serviceItem}>
                    <img className={style.options} src={imgDashboard} alt="Dashboard Service" />
                    <Button btnDescription={"BI Dashboard"} event={dashboardService}/>
                </div>
            </div>
        </section>
    );
}

export default Services;
