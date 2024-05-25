import styles from "../styles/Home.css";

function Home() {
    return (
        <><div>
            <div id="banner" className="carousel slide">
                <div className="carousel-inner ">
                    <div className="carousel-item active ">
                        <img
                            src="https://m.media-amazon.com/images/I/71S1dktV7GL._SX3000_.jpg"
                            className="d-block w-100"
                            style={{ height: "500px" }}
                            alt=""
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://m.media-amazon.com/images/I/71ZkQ3dlDkL._SX3000_.jpg"
                            className="d-block w-100 "
                            style={{ height: "500px" }}
                            alt=""
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://m.media-amazon.com/images/I/61H5eE1o-PL._SX3000_.jpg"
                            className="d-block w-100"
                            style={{ height: "500px" }}
                            alt=""
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#banner"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#banner"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
                
            </div>
            <div className="offers container-fluid py-3">
                <div className="offer ">
                    <h5>Up to 40% off & code: BEAUTY</h5>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/beauty/BUW23/AUG/1606893_BuW23_AE_GW_DQC_CL_UnderAED9_372x232_EN._SY116_CB598728776_.jpg"></img>
                        <p>Make up</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/beauty/BUW23/AUG/1606893_BuW23_AE_GW_DQC_CL_UnderAED29_372x232_EN._SY116_CB598728776_.jpg"></img>
                        <p>Skin care</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/beauty/BUW23/AUG/1606893_BuW23_AE_GW_DQC_CL_UnderAED49_372x232_EN._SY116_CB598728776_.jpg"></img>
                        <p>Hair care</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/beauty/BUW23/AUG/1606893_BuW23_AE_GW_DQC_CL_UnderAED99_372x232_EN._SY116_CB598728776_.jpg"></img>
                        <p>Perfumes</p>
                    </div>
                </div>
                <div className="offer ">
                    <h5>Deals on Women's Clothing | Up to 70% off</h5>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/UAE-hq/2024/img/Apparel/XCM_CUTTLE_1701180_3649139_372x232_2X_en_AE._SY116_CB580637777_.jpg"></img>
                        <p>Tops</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/UAE-hq/2024/img/Apparel/XCM_CUTTLE_1701180_3649138_372x232_2X_en_AE._SY116_CB580637777_.jpg"></img>
                        <p>Dresses</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/UAE-hq/2024/img/Apparel/XCM_CUTTLE_1701180_3649133_372x232_2X_en_AE._SY116_CB580637777_.jpg"></img>
                        <p>Abayas</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/UAE-hq/2024/img/Apparel/XCM_CUTTLE_1701180_3649164_372x232_2X_en_AE._SY116_CB580637777_.jpg"></img>
                        <p>Pants</p>
                    </div>
                </div>
                <div className="offer ">
                    <h5 >Just landed for men | Wide Selection</h5>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/UAE-hq/2023/img/Apparel/XCM_CUTTLE_1628686_3403345_372x232_2X_en_AE._SY116_CB596162454_.jpg"></img>
                        <p>Watches</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/UAE-hq/2023/img/Apparel/XCM_CUTTLE_1628686_3403342_372x232_2X_en_AE._SY116_CB596162454_.jpg"></img>
                        <p>Sportswares</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/UAE-hq/2023/img/Apparel/XCM_CUTTLE_1628686_3403330_372x232_2X_en_AE._SY116_CB596162454_.jpg"></img>
                        <p>Sunglasses</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/UAE-hq/2023/img/Apparel/XCM_CUTTLE_1628686_3403346_372x232_2X_en_AE._SY116_CB596162454_.jpg"></img>
                        <p>Shoes</p>
                    </div>
                </div>
                <div className="offer offer-big ">
                    <h5>Luxury perfumes | Up to 50% off</h5>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/kindle/journeys/NDdkMGRmOWYt/NDdkMGRmOWYt-YTFjNjJjMzct-w379._SY304_CB412107902_.jpg"></img>
                    </div>
                    
                </div>
                <div className="offer ">
                    <h5>Save up to 20% on laptops</h5>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/electronics/store/avb2022/DQC_MQC/dqc.laptop._SY116_CB615905125_.jpg"></img>
                        <p>All laptops</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/electronics/store/avb2022/DQC_MQC/4.2-in-1._SY116_CB609072655_.jpg"></img>
                        <p>2 in 1</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/electronics/store/avb2022/DQC_MQC/dqc.tablet._SY116_CB615905125_.jpg"></img>
                        <p>Tablets</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/electronics/store/avb2022/DQC_MQC/2.Gaming._SY116_CB609072655_.jpg"></img>
                        <p>Gaming</p>
                    </div>
                </div>
                <div className="offer ">
                    <h5>New arrivals in Electronics</h5>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/UAE-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1615422_3332322_372x232_2X_en_AE._SY116_CB597933578_.jpg"></img>
                        <p>Audio</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/UAE-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1615422_3332323_372x232_2X_en_AE._SY116_CB597933578_.jpg"></img>
                        <p>Mobile Accessories</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/UAE-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1615422_3332324_372x232_2X_en_AE._SY116_CB597933578_.jpg"></img>
                        <p>Video games</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/UAE-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1615422_3332325_372x232_2X_en_AE._SY116_CB597933578_.jpg"></img>
                        <p>PC Accessories</p>
                    </div>
                </div>
                <div className="offer ">
                    <h5>The photography store</h5>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/electronics/store/kamja/WebQC/2021/Cameras/Feb_DSLRs_1x._SY116_CB659040029_.jpg"></img>
                        <p>DSLRs</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/electronics/store/kamja/WebQC/2021/Cameras/Feb_Action_1x._SY116_CB659040029_.jpg"></img>
                        <p>Action Cameras</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/electronics/store/kamja/WebQC/2021/Cameras/Feb_Instant_1x._SY116_CB659040029_.jpg"></img>
                        <p>Instant Cameras</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/electronics/store/kamja/WebQC/2021/Cameras/Feb_Lenses_1x._SY116_CB659040029_.jpg"></img>
                        <p>Lenses</p>
                    </div>
                </div>
                <div className="offer offer-big">
                    <h5>Save up to 50% with coupons</h5>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/39/3P/XCM_Manual_1307560_BAU_AE_GW_DC_3P_Coupon_260x260_a385738a-cd95-4032-969e-82141c97f3a2._SY304_CB659989200_.jpg"></img>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;
