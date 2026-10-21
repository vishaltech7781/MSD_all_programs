import {
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
} from "lucide-react";

const events = [
  {
    image: "/images/hero-2.jpg",
    day: "12",
    month: "SEP",
    year: "2026",
    title: "Artificial Intelligence & Machine Learning Workshop",
    description:
      "A hands-on technical workshop introducing students to modern AI and machine learning technologies.",
    time: "10:00 AM - 4:00 PM",
    location: "CSE Seminar Hall",
  },
  {
    image: "/images/hero-3.jpg",
    day: "18",
    month: "SEP",
    year: "2026",
    title: "National Level Coding Hackathon",
    description:
      "Students will collaborate, compete and build innovative solutions for real-world problems.",
    time: "9:00 AM - 6:00 PM",
    location: "Computer Lab Complex",
  },
  {
    image: "/images/campus.jpg",
    day: "25",
    month: "SEP",
    year: "2026",
    title: "Technology & Innovation Symposium",
    description:
      "An academic gathering featuring talks, presentations and discussions on emerging technologies.",
    time: "10:00 AM - 5:00 PM",
    location: "Main Auditorium",
  },
];

const Events = () => {
  return (
    <section className="events-section">

      <div className="container">

        {/* SECTION HEADER */}

        <div className="section-heading events-heading">

          <div>
            <span className="section-label">
              WHAT'S HAPPENING
            </span>

            <h2>
              Upcoming Events
            </h2>
          </div>

          <a
            href="#"
            className="view-all-link"
          >
            View All Events
            <ArrowRight size={16} />
          </a>

        </div>


        {/* EVENTS GRID */}

        <div className="events-grid">

          {events.map((event, index) => (

            <article
              className="event-card"
              key={index}
            >

              {/* IMAGE */}

              <div className="event-image">

                <img
                  src={event.image}
                  alt={event.title}
                />

                {/* DATE */}

                <div className="event-date">

                  <strong>
                    {event.day}
                  </strong>

                  <span>
                    {event.month}
                  </span>

                  <small>
                    {event.year}
                  </small>

                </div>

              </div>


              {/* CONTENT */}

              <div className="event-content">

                <h3>
                  {event.title}
                </h3>

                <p>
                  {event.description}
                </p>


                {/* EVENT META */}

                <div className="event-meta">

                  <div>
                    <Clock size={14} />

                    <span>
                      {event.time}
                    </span>
                  </div>

                  <div>
                    <MapPin size={14} />

                    <span>
                      {event.location}
                    </span>
                  </div>

                </div>


                <a
                  href="#"
                  className="event-link"
                >
                  Event Details

                  <ArrowRight size={15} />

                </a>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Events;
