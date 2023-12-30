// CreateNewGraphPage.js

import React from "react";

const CreateNewGraphPage = () => {
  return (
    <div className="create-new-graph-page">
      <h2 className="page-title">Create New Graph</h2>
      <form className="graph-form">
        <label htmlFor="graph-title">Graph Title</label>
        <input type="text" id="graph-title" name="graph-title" required />

        <label htmlFor="graph-description">Graph Description</label>
        <textarea
          id="graph-description"
          name="graph-description"
          rows="4"
          required
        />

        <label htmlFor="upload-papers">
          Upload Papers or Select from Favorites/Collections
        </label>
        <input type="file" id="upload-papers" name="upload-papers" multiple />

        <label htmlFor="graph-settings">Configure Graph Settings</label>
        {/* Add input fields for layout, colors, etc. */}
        {/* For example: */}
        <input type="text" id="layout" name="layout" placeholder="Layout" />
        <input type="text" id="colors" name="colors" placeholder="Colors" />

        {/* Add a preview section */}
        <div className="preview-section">
          <h3>Graph Visualization Preview</h3>
          {/* Add a placeholder or use an actual graph visualization preview */}
          <div className="graph-preview"></div>
        </div>

        <button type="submit">Create Graph</button>
      </form>
    </div>
  );
};

export default CreateNewGraphPage;
