import BannerStyles from '../styles/Banner.module.css';

const Banner = () => {
    return (
        <>
            <div class={BannerStyles.bgimage}>
                <div class={BannerStyles.overlay}>

                </div>
                <div class={BannerStyles.title}>
                    <h2>Clothing <br/> Store</h2>
                    <h5>Clothing Website Template</h5>
                </div>
            </div>
        </>
    )
}

export default Banner;
