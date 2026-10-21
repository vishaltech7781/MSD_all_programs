const ResearchAreas = () => {

  const areas = [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Cyber Security",
    "Cloud Computing",
    "Computer Networks",
    "Blockchain Technology",
    "Internet of Things",
    "Software Engineering"
  ];

  return (
    <div className="inner-page">

      <section className="page-banner">
        <div className="container">

          <p>RESEARCH</p>

          <h1>Research Areas</h1>

        </div>
      </section>


      <section className="content-section container">

        <div className="research-grid">

          {areas.map((area, index) => (

            <div
              className="research-card"
              key={index}
            >

              <h3>{area}</h3>

              <p>
                Research and development activities in
                {` ${area}`}.
              </p>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default ResearchAreas;