import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useZoomModal } from "@/context/ZoomModalContext";

export default function About() {
  const { openZoomModal } = useZoomModal();
  const { ref: counterRef, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.3, // start when 30% of element is visible
  });
  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 mb-5">
            <h2
              className="line-bottom mb-4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              About Us
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="aos-init aos-animate"
              style={{
                maxWidth: "800px",
                fontSize: "16px",
                lineHeight: "1.7",
                fontWeight: 400,
                color: "#333",
                fontFamily: '"Georgia", serif',
                whiteSpace: "pre-line",
              }}
            >
              Hi, I’m Fikir Yacob. {"\n\n"}
              I’m a Real Estate Agent, Project Consultant, and the founder of A+
              Tutoring—a business born out of personal experience, deep
              reflection, and a commitment to the next generation. I grew up in
              Denver, Colorado, attending some of the best public schools in the
              state.On paper, I was doing well—mostly A’s, a few B’s—but something
              felt off. Like many kids from immigrant families, I was navigating
              school largely on my own. My parents, hardworking Ethiopian
              immigrants, didn’t have the time, knowledge, or resources to
              support me academically the way they wanted to. They gave
              everything they could—and I’m endlessly grateful—but there were
              still gaps in my learning that went unnoticed for years. I didn’t
              fully understand how much support I needed until I got to college.{" "}
              {"\n\n"}
              In large classrooms filled with 25–30 students, it’s easy to fall
              behind quietly. You try to absorb everything, go home, do your
              homework, guess your way through the parts you don’t understand,
              and repeat. Asking questions feels intimidating, and the learning
              gaps silently grow. Mine started in 2nd grade—and they followed me
              for years. What I really needed was someone who to sit down beside
              me, explain things at my pace, and help me build a strong
              foundation. But personalized tutoring wasn’t affordable, and most
              tutoring centers just handed out worksheets without much care or
              customization. {"\n\n"}
              Still, I pushed through. In 2022, I graduated from the University
              of Colorado Boulder with a degree in Economics. It wasn’t easy,
              but it taught me resilience. Years later, I watched my younger
              brother go through the same struggles thing I did. He’s bright and
              capable, but he just needed someone who truly supported him. I
              found him a tutor, trained that tutor myself—and the
              transformation was incredible. His confidence soared. His grades
              improved. His teachers noticed. {"\n\n"}
              And that’s when something clicked. There are so many kids like
              him. Like me. Like my peers. Kids with dreams and potential—but no
              one to walk beside them. That’s why I started A+ Tutoring: to make
              academic support personal, affordable, and accessible empowering
              for kids from families like mine. Our mission is simple: Every
              child deserves to feel seen, supported, and confident in their
              learning journey. {"\n\n"}
              Because when we invest in kids today, we’re shaping the leaders,
              thinkers, and dreamers of tomorrow.
            </p>

            {/* <ul
              className="list-unstyled ul-check mb-5 primary aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <li>Separated they live</li>
              <li>Bookmarksgrove right at the coast</li>
              <li>large language ocean</li>
            </ul> */}

          </div>
          <div
            className="col-lg-6 aos-init aos-animate " style={{ marginTop: "50px" }}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="bg-1"></div>

            <img
              src="images/about.jpeg"
              alt="Image"
              className="img-fluid rounded"
            />

            <div className="row count-numbers mb-5 " ref={counterRef} style={{ marginTop: "50px" }}>
              <div
                className="col-4 col-lg-4 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <span className="counter d-block">
                  {inView && <CountUp end={4500} duration={2} />}
                  <span>+</span>
                </span>
                <span className="caption-2">Sessions</span>
              </div>
              <div
                className="col-4 col-lg-4 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span className="counter d-block">
                  {inView && <CountUp end={20} duration={2} />}
                  <span>+</span>
                </span>
                <span className="caption-2">Teachers</span>
              </div>
              <div
                className="col-4 col-lg-4 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="counter d-block">
                  {inView && <CountUp end={86} duration={2} />}
                  <span>%</span>
                </span>
                <span className="caption-2">Retention Rate</span>
              </div>
            </div>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="aos-init aos-animate"
            >
              <a
                onClick={openZoomModal}
                className="btn btn-primary"
                style={{
                  padding: "15px 30px",
                  borderRadius: "30px",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  letterSpacing: "0.05rem",
                  
                }}
              >
                Get a Free Trial
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
