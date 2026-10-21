import {
  Search,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const TopBar = () => {
  return (
    <div className="topbar">

      <div className="container topbar-container">

        {/* LEFT SIDE */}
        <div className="topbar-left">

          <span>
            <MapPin size={14} />
            College Campus
          </span>

          <span>
            <Mail size={14} />
            cse@college.edu
          </span>

          <span>
            <Phone size={14} />
            +91 12345 67890
          </span>

        </div>

        {/* RIGHT SIDE */}
        <div className="topbar-right">

          <button>
            English
          </button>

          <button>
            हिन्दी
          </button>

          <button className="search-button">
            <Search size={15} />
            Search
          </button>

        </div>

      </div>

    </div>
  );
};

export default TopBar;