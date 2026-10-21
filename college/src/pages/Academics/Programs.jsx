const Programs = () => {

  const programs = [
    {
      title: "B.Tech Computer Science & Engineering",
      description:
        "Undergraduate program covering programming, software engineering, databases, networks, artificial intelligence and modern computing technologies."
    },
    {
      title: "M.Tech",
      description:
        "Advanced postgraduate education with opportunities for specialization, research and technological innovation."
    },
    {
      title: "Ph.D.",
      description:
        "Research-oriented program focused on advanced study and development of innovative solutions."
    }
  ];

  return (
    <div className="inner-page">

      <section className="page-banner">
        <div className="container">

          <p>ACADEMICS</p>

          <h1>Programs</h1>

        </div>
      </section>


      <section className="content-section container">

        <div className="info-grid">

          {programs.map((program, index) => (

            <div className="info-card" key={index}>

              <h2>{program.title}</h2>

              <p>{program.description}</p>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default Programs;