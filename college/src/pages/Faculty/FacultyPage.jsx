import Faculty from "../../components/Sections/Faculty";

const FacultyPage = () => {
  return (
    <div className="faculty-page">

      {/* Page Header */}
      <section className="page-banner">
        <div className="container">
          <p>DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING</p>
          <h1>Faculty</h1>
          <span>
            Meet our experienced faculty members
          </span>
        </div>
      </section>

      {/* Existing Faculty Component */}
      <section className="faculty-page-content">
        <Faculty />
      </section>

    </div>
  );
};

export default FacultyPage;