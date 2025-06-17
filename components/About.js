import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useZoomModal } from "@/context/ZoomModalContext";

export default function About() {
 const { openZoomModal } = useZoomModal();
  const { ref: counterRef, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.3,    // start when 30% of element is visible
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
              Growing up, I always wished I had a tutor. Someone who understood
              me, who could help me build confidence — especially in classrooms
              where I was often the only student of color. My parents simply
              didn’t know where to find the right support. Years later, I
              watched my siblings face the same challenges. They had so much
              potential, but needed more attention than the system could offer.
              {"\n\n"}
              That’s when I knew: I had to build the thing we didn’t have.
              Affordable tutoring that empowers students and reminds them that
              they belong.
              {"\n\n"}
              Along the way, I saw another need — parents in the diaspora trying
              to keep their children connected to their language and culture.
              That’s why we offer Amharic and Tigrinya classes, so our kids can
              thrive in school while staying close to their roots.
              {"\n\n"}
              And we plan to grow — in languages, subjects, and impact.
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

            <div className="row count-numbers mb-5 " ref={counterRef}>
 <div
                className="col-4 col-lg-4 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <span className="counter d-block" >
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
          <div
            className="col-lg-6 aos-init aos-animate mt-5"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="bg-1"></div>
            
           
              <img
                src="images/school.jpg"
                alt="Image"
                className="img-fluid rounded"
              />
            
          </div>
        </div>
      </div>
    </div>
  );
}
