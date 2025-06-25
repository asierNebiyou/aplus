import { Percent, Translate, JournalCheck } from "react-bootstrap-icons";

export default function Offer() {
  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div
            className="col-lg-7 text-center aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <h2 className="line-bottom text-center mb-4">What We Offer</h2>
            <p>
              Every session is a personalized, one-on-one class, giving your
              child the focused attention they need to thrive. We keep you
              involved with weekly progress reports and work closely with their
              school teachers to ensure consistent support and success.
            </p>
          </div>
        </div>
        <div className="row">
          {[
            {
              icon: <Translate />,
              title: "English Class",
              desc:
                "Build strong reading, writing, and speaking skills to boost school performance and confidence.",
            },
            {
              icon: <Percent />,
              title: "Math Class",
              desc:
                "Master key math concepts with step-by-step help that makes problem-solving easier.",
            },
            {
              icon: <JournalCheck />,
              title: "Homework Assistance",
              desc:
                "Get daily support to complete assignments accurately and on time.",
            },
            {
              icon: "አ",
              title: "Amharic for Beginners",
              desc:
                "Learn to read, write, and speak Amharic confidently for school or family connection.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26}
                  height={26}
                  fill="#000"
                  viewBox="0 0 403.48 403.48"
                >
                  <path d="M277.271 0H46.176v403.48h311.129V80.035zm4.393 25.607 50.033 50.034h-50.033zM61.176 388.48V15h205.489v75.641h75.641v297.84z"></path>
                  <path d="M101.439 117.58h55.18V62.4h-55.18zm15-40.18h25.18v25.18h-25.18zM101.439 192.08h55.18V136.9h-55.18zm15-40.18h25.18v25.18h-25.18zM101.439 266.581h55.18V211.4h-55.18zm15-40.181h25.18v25.181h-25.18zM101.439 341.081h55.18v-55.18h-55.18zm15-40.18h25.18v25.18h-25.18zM177.835 326.081h114.688v15H177.835zM177.835 251.581h114.688v15H177.835zM177.835 177.08h114.688v15H177.835zM177.835 102.58h114.688v15H177.835z"></path>
                </svg>
              ),
              title: "SAT Prep",
              desc:
                "Improve your test-taking skills and raise your SAT score with proven strategies and practice.",
            },
            {
              icon: "ት",
              title: "Tigrinya for Beginners",
              desc:
                "Understand and speak Tigrinya fluently to stay connected with your culture and heritage.",
            },
          ].map((item, index) => (
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-4 d-flex"
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${(index % 3) * 100}`}
            >
              <div className="feature d-flex flex-column h-100 w-100">
                <span className={`icon-className color-${index + 1}`}>{item.icon}</span>
                <h3 style={{ fontWeight: "bolder" }}>{item.title}</h3>
                <p
                  className=" d-flex flex-column justify-content-between"
                  style={{ height: "150px" }}
                >
                  {item.desc}
                  <span className="d-block mt-3">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://scheduler.zoom.us/a-help-sitra/aplustutoringfreetrial"
                      className="btn btn-primary"
                      style={{
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "10px",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        letterSpacing: "0.03rem",
                      }}
                    >
                      Free Trial
                    </a>
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
