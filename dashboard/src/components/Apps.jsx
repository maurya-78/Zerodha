import React from "react";

const Apps = () => {
  const apps = [
    {
      icon: "📊",
      title: "Market Charts",
      description: "View detailed stock charts and market trends.",
    },
    {
      icon: "📈",
      title: "Market Scanner",
      description: "Find stocks based on price and market movements.",
    },
    {
      icon: "📰",
      title: "Market News",
      description: "Stay updated with the latest market news.",
    },
    {
      icon: "🧮",
      title: "Calculator",
      description: "Calculate brokerage, profit and investment values.",
    },
    {
      icon: "🔔",
      title: "Alerts",
      description: "Create alerts for your favourite stocks.",
    },
    {
      icon: "📉",
      title: "Portfolio Analytics",
      description: "Analyze your holdings, returns and performance.",
    },
  ];

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1200px",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <div style={{ marginBottom: "35px" }}>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "500",
            color: "#424242",
            margin: "0 0 8px",
          }}
        >
          Apps
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#777",
            margin: 0,
          }}
        >
          Explore tools to manage and analyze your investments.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "22px",
        }}
      >
        {apps.map((app, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
              border: "1px solid #e5e5e5",
              borderRadius: "6px",
              padding: "28px",
              minHeight: "210px",
              boxSizing: "border-box",
              transition: "box-shadow 0.2s ease, transform 0.2s ease",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f7f7f7",
                borderRadius: "8px",
                fontSize: "25px",
                marginBottom: "20px",
              }}
            >
              {app.icon}
            </div>

            <h3
              style={{
                margin: "0 0 10px",
                fontSize: "19px",
                fontWeight: "500",
                color: "#424242",
              }}
            >
              {app.title}
            </h3>

            <p
              style={{
                margin: "0 0 24px",
                color: "#777",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              {app.description}
            </p>

            <button
              type="button"
              style={{
                border: "none",
                background: "transparent",
                color: "#387ed1",
                fontSize: "14px",
                padding: 0,
                cursor: "pointer",
              }}
            >
              Open →
            </button>
          </div>
        ))}
      </div>

      <style>
        {`
          @media (max-width: 900px) {
            .apps-responsive-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }

          @media (max-width: 600px) {
            .apps-responsive-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Apps;