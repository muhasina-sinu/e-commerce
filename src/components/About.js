import '../styles/About.css'

function About() {
    return ( 
        <>
        <div className='about-wrapper container'>
           <h3> Welcome to Shopkart.</h3>
           <p> We aim to offer our customers a variety of the latest products. We’ve come a long way, so we know exactly which direction to take when supplying you with high quality yet budget-friendly products. We offer all of this while providing excellent customer service and friendly support.
            We always keep an eye on the latest trends and put our customers’ wishes first. That is why we have satisfied customers all over the world, and are thrilled to be a part of the industry.
            The interests of our customers are always top priority for us, so we hope you will enjoy our products as much as we enjoy making them available to you.

</p>
            <div className="about">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/39/launch/ourmission.png" ></img>
                <div>
                    <h4>Our Mission</h4>
                    <p>We aim to be Earth’s most customer centric company. Our mission is to continually raise the bar of the customer experience by using the internet and technology to help consumers find, discover and buy anything, and empower businesses and content creators to maximize their success.</p>
                </div>
            </div>
            <div className="about">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/39/launch/ourp.png"></img>
                <div>
                    <h4>Our Leadership Principles</h4>
                    <p>Our Leadership Principles aren't just a pretty inspirational wall hanging. These Principles work hard, just like we do. We use them, every day, whether they're discussing ideas for new projects, deciding on the best solution for a customer's problem, or interviewing candidates. It's just one of the things that makes us peculiar. </p>
                </div>
            </div>
        </div>

        </>
     );
}

export default About;