import AboutStyles from '../styles/About.module.css';

const About = () => {
    return (
        <>
            <div class={AboutStyles.container}>
                <h1>About Us</h1>
                <div class={AboutStyles.aboutContent}>
                    <div class={AboutStyles.img}>
                        <div>
                            <img src="https://mobirise.com/extensions/shopamp/assets/images/hannah-morgan-39891-unsplash-696x464.jpg"  class={AboutStyles.image} />
                        </div>
                        <div class={AboutStyles.imgcontent}>
                            <h4>Prices</h4>
                            <h3>Best Prices</h3>
                            <p>In our store, you would find the best prices in the city. 
                            Every month we provide our customers with discounts and sales on certain categories of goods.
                            </p>
                            <p><a>Learn more</a></p>
                        </div>
                    </div>
                    <div class={AboutStyles.img}>
                        <div>
                            <img src="https://mobirise.com/extensions/shopamp/assets/images/lauren-fleischmann-469994-unsplash-696x464.jpg"  class={AboutStyles.image} />
                        </div>
                        <div class={AboutStyles.imgcontent}>
                            <h4>Trends</h4>
                            <h3>Newest Trends</h3>
                            <p>We always follow trends and try to collect the latest and most fashionable clothes in our shop. 
                                We have magazines, in which you can check out styles and colors.
                            </p>
                            <p><a>Learn more</a></p>
                        </div>
                    </div>
                    <div class={AboutStyles.img}>
                        <div>
                            <img src="https://mobirise.com/extensions/shopamp/assets/images/priscilla-du-preez-228220-unsplash-696x464.jpg"  class={AboutStyles.image} />
                        </div>
                        <div class={AboutStyles.imgcontent}>
                        <h4>Collections</h4>  
                        <h3>Previous Collections</h3>
                        <p>It's possible to buy the best pieces of clothes from previous collections with huge discounts. 
                            Every Saturday we provide our customers with sales.
                        </p>
                        <p><a>Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
