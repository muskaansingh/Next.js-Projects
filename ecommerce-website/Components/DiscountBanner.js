import DiscountBannerStyles from "../styles/DiscountBanner.module.css";

const DiscountBanner = () => {
    return (
        <>
            <div class={DiscountBannerStyles.discount}>
                <div class={DiscountBannerStyles.overlay}>
                    <h2>WE ARE GLAD TO SEE YOU</h2>
                    <h1>SALE TO -70% LAST 2 DAYS</h1>
                    <a href="#">Watch Now</a>
                </div>
            </div>
        </>
    )
}

export default DiscountBanner;
