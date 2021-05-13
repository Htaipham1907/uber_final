import './StaticPage.scss';
import Header from '../../part/Header/Header';
import Footer from '../../part/Footer/Footer';

const StaticPage = () => {
    return (
        <>
            <Header></Header>
            <section className="body-content">
                <div className="tutor-content">
                    <div className="columns-col1">
                        <h1>How Uber Work</h1>
                        <p>On-demand transportation technology is our core service,
                        and the app that connects driver-partners and riders is
                        what makes it all possible. Here’s how it works, step by
                        step:
        </p>
                    </div>
                    <div className="columns-col2">
                        <div className="item1">
                            <h5>Step 1: A rider opens the app</h5>
                            <p>The rider enters their destination into the Where to?
                            box on the top of the screen; taps each ride
                            option to see the wait time, car sizes, and price;
            then confirms their pickup location and taps Request.</p>
                        </div>
                        <div className="item2">
                            <h5>Step 2: The rider is matched with a driver</h5>
                            <p>
                                A nearby driver sees and chooses to accept the rider’s trip request.
                                The rider is automatically notified
                                when the driver’s vehicle is about a minute away
          </p>
                        </div>
                        <div className="item3">
                            <h5>Step 3: The driver picks up the rider</h5>
                            <p>The driver and the rider verify each other’s names and the destination.
                            Then the driver starts the ride.
          </p>
                        </div>
                        <div className="item4">
                            <h5>Step 4: The driver takes the rider to the destination</h5>
                            <p>
                                The app gives the driver the option to access turn-by-turn directions, so the driver can focus on getting
                                there and the rider can focus on enjoying a comfortable ride.
          </p>
                        </div>
                        <div className="item5">
                            <h5>Step 5: The driver and rider leave ratings and reviews</h5>
                            <p>
                                At the end of each trip, drivers and riders can rate each other from 1 to 5 stars. Riders can also give
                                the driver compliments. In cities where tipping is available, they can also add a little extra to show their
                                gratitude.
          </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default StaticPage;
