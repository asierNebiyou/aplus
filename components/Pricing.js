export default function Pricing() {
  const plans = [
    {
      title: 'Infant',
      price: '$50.99/month',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      title: 'Toddler',
      price: '$99.99/month',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      title: 'Lad',
      price: '$199.99/month',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
  ];

  return (
    <section className="site-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center">
            <h2 className="section-heading">Pricing</h2>
            <p className="lead">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div className="row">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="block-12">
                <div className="block-12-img">
                  <img src={`/images/img_${index + 1}.jpg`} alt={plan.title} className="img-fluid" />
                </div>
                <div className="block-12-content">
                  <h3>{plan.title}</h3>
                  <p>{plan.text}</p>
                  <p className="price">{plan.price}</p>
                  <p>
                    <a href="#" className="btn btn-custom">
                      Get Started
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}