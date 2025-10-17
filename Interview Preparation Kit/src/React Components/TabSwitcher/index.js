import React, { useState } from "react";
import "./style.css";

// Sample tab data
const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function TabSwitcher() {
  // TODO: Set up state to track the active tab
  const [activeId, setActiveId] = useState("home");

  const handleTabs = (id) => {
    const content = tabs
      .filter((data) => data.id === id)
      .map((data) => data?.content);
    return content[0];
  };

  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>

      {/* Tab buttons */}
      <div className="tab-buttons">
        {/* TODO: Render buttons for each tab */}
        {/* Use data-testid={`tab-button-${tab.id}`} for each button */}
        {tabs.map((tab) => (
          <button
            className={tab.id === activeId ? "active" : ""}
            key={`tab-button-${tab.id}`}
            data-testid={`tab-button-${tab.id}`}
            onClick={() => setActiveId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="tab-content" data-testid="tab-content">
        {/* TODO: Show content of the currently active tab */}
        <p>{handleTabs(activeId)}</p>
      </div>
    </div>
  );
}
