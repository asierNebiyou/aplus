export default function News() {
  const news = [
    {
      title: "Education for Tomorrow's Leaders",
      date: 'June 22, 2020',
      author: 'Colorlib',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image: '/images/img_1.jpg',
    },
    {
      title: 'Enroll Your Kids This Summer to get 30% off',
      date: 'June 22, 2020',
      author: 'Colorlib',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image: '/images/img_2.jpg',
    },
  ];

  return (
    <section className="site-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center">
            <h2 className="section-heading">School News</h2>
            <p className="lead">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div className="row">
          {news.map((item, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="block-11">
                <div className="block-11-img">
                  <img src={item.image} alt={item.title} className="img-fluid" />
                </div>
                <div className="block-11-content">
                  <h3>{item.title}</h3>
                  <p className="mb-0">
                    {item.date} <span className="mx-2">•</span> {item.author}
                  </p>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}