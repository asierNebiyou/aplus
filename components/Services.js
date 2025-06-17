export default function Services() {
  return (
    <div className="untree_co-section py-5">
      <div className="container">
        <div className="row g-4" >
          {[
            {
              price: "$159",
              title: "Starter Plan",
              desc: "8 sessions monthly, delivered twice a week, with weekly reports sent to parents.",
              color: "color-1",
            },
            {
              price: "$189",
              title: "Plus Plan",
              desc: "12 sessions monthly, delivered three times a week, with extra support and parent feedback.",
              color: "color-2",
            },
            {
              price: "$129",
              title: "Language Plan",
              desc: "Language for Beginners: Amharic or Tigrinya. Build roots through culture + connection.",
              color: "color-3",
            },
          ].map((s, idx) => (
            <div key={idx} className="col-12  col-lg-4" style={{marginBottom:'15px'}}>
              <div className={`block-v1 ${s.color} glass shadow-hover`} data-aos="fade-up" data-aos-delay={idx * 100}>
                <span className="price-badge">{s.price}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
