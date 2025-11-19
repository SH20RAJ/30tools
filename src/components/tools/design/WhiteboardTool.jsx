"use client";

export default function WhiteboardTool() {
  return (
    <>
      {/* SEO Content - Hidden but accessible to search engines */}
      <div className="sr-only">
        <h1>Free Online Whiteboard - Draw, Sketch & Collaborate | 30tools</h1>
        <p>
          Free unlimited online whiteboard for drawing, sketching, brainstorming
          and collaboration. No registration required - start creating
          instantly! Professional whiteboard with unlimited drawing space,
          multiple tools, and export capabilities.
        </p>
        <h2>Whiteboard Features</h2>
        <ul>
          <li>
            Drawing Tools: Pen, eraser, shapes, and lines with customizable
            brush sizes
          </li>
          <li>
            Color Palette: Predefined colors plus custom color picker for
            unlimited options
          </li>
          <li>Export Options: Download your creations as PNG or JPG files</li>
          <li>
            Undo/Redo: Full history support with unlimited undo and redo actions
          </li>
          <li>Unlimited drawing space</li>
          <li>Multiple drawing tools</li>
          <li>No registration required</li>
        </ul>
        <h2>Perfect For</h2>
        <ul>
          <li>
            Brainstorming: Visualize ideas, create mind maps, and organize
            thoughts
          </li>
          <li>
            Education: Explain concepts, solve problems, and create visual
            learning materials
          </li>
          <li>
            Design Sketching: Quick wireframes, UI mockups, and creative
            sketches
          </li>
          <li>Meeting notes and collaboration</li>
          <li>Mind mapping and planning</li>
        </ul>
        <p>
          Keywords: online whiteboard, free whiteboard, drawing board, sketch
          pad, digital whiteboard, collaborative whiteboard, whiteboard online
          free, drawing tool online, brainstorming tool, digital canvas
        </p>
      </div>

      <iframe
        src="https://excalidraw.com"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          border: "none",
          zIndex: 999999,
        }}
        allowFullScreen
        title="30tools Whiteboard - Powered by Excalidraw"
      />
    </>
  );
}
