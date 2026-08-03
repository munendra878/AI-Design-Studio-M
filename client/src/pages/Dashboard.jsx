import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import aiService from "../services/aiService";

import {
  Sparkles,
  Download,
  Folder,
  Image,
} from "lucide-react";

import "./dashboard.css";

export default function Dashboard() {
  const { user, isLoaded } = useUser();

  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (isLoaded && user) {
      fetchDesigns();
    }
  }, [isLoaded, user]);

const fetchDesigns = async () => {
  try {
    setLoading(true);

    console.log("Fetching designs for:", user.id);

    const res = await aiService.getUserDesigns(user.id);

    console.log("Full Response:", res);
    console.log("Response Data:", res.data);
    console.log("Designs:", res.data.designs);

    if (res.data.success) {
      setDesigns(res.data.designs || []);
    }
  } catch (err) {
    console.error("Dashboard Error:", err);
    console.error("Error Response:", err.response);
    console.error("Error Message:", err.message);

    setDesigns([]);
  } finally {
    setLoading(false);
  }
};

  if (!isLoaded) {
    return (
      <div className="dashboard-loading">
        Loading...
      </div>
    );
  }

const filteredDesigns = designs.filter((design) => {
  const text = [
    design.title,
    design.category,
    design.prompt,
    design.enhancedPrompt,
    design.details?.title,
    design.details?.theme,
    design.details?.style,
    design.details?.language,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return text.includes(search.toLowerCase().trim());
});

  return (
    <div className="dashboard">

      <Sidebar
        open={sidebarOpen}
         onClose={() => setSidebarOpen(false)}
         onMenuClick={() => setSidebarOpen(true)}
      />

      <div className="dashboard-main">

        <Topbar
          onMenuClick={() => setSidebarOpen(true)}
          onSearch={setSearch}
          
        />

        <div className="dashboard-body">

          <div className="dashboard-content">

            {/* Welcome Card */}

            <div className="dashboard-header">

              <div className="welcome-card">

                <div className="welcome-text">

                  <h1>
                    Welcome Back, {user?.firstName || "Creator"} 👋
                  </h1>

                  <p>
                    Create beautiful AI invitations, posters,
                    greeting cards and social media designs in seconds.
                  </p>

                  <Link to="/ai-generator">
                    <button className="create-ai-btn">
                      ✨ Create AI Design
                    </button>
                  </Link>

                </div>

              </div>

            </div>

            {/* Stats */}

            <div className="stats-grid">

              <div className="stat-card">

                <div className="icon purple">
                  <Image size={24} />
                </div>

                <h2>100+</h2>

                <p>Total Designs</p>

              </div>

              <div className="stat-card">

                <div className="icon green">
                  <Download size={24} />
                </div>

                <h2>100+</h2>

                <p>Downloads</p>

              </div>

              <div className="stat-card">

                <div className="icon orange">
                  <Sparkles size={24} />
                </div>

                <h2>limited</h2>

                <p>AI Credits</p>

              </div>

              <div className="stat-card">

                <div className="icon blue">
                  <Folder size={24} />
                </div>

                <h2>10+</h2>

                <p>Templates</p>

              </div>

            </div>

            {/* Recent Designs */}

            <div className="table-card">

              <div className="card-header">

                <h2>Recent Designs</h2>

                <Link to="/my-designs">
                  View All
                </Link>

              </div>

              {loading ? (

                <div className="loading-state">
                  Loading your designs...
                </div>

              ) : filteredDesigns.length === 0 ? (

  <div className="empty-state">

    <Image size={60} />

    <h3>No Matching Designs</h3>

    <p>
      No designs match your search.
    </p>

  </div>

) : (

  <div className="table-responsive">

    <table>

      <thead>

        <tr>

          <th>Title</th>

          <th>Category</th>

          <th>Date</th>

          <th>Status</th>

        </tr>

      </thead>

      <tbody>

        {filteredDesigns.slice(0, 5).map((design) => (

          <tr key={design._id}>

            <td>
              {design.title || "Untitled Design"}
            </td>

            <td>
              {design.category || "Invitation"}
            </td>

            <td>
              {new Date(design.createdAt).toLocaleDateString()}
            </td>

            <td>
              <span className="status">
                Completed
              </span>
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

)}

            </div>

          </div>

        </div>

        <Footer />

      </div>

    </div>
  );
}