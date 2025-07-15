import "./TintTable.css";

export default function TintTable() {
  return (
    <div className="tint-table-container">
      <table className="tint-table">
        <thead>
          <tr>
            <th>Tint Type</th>
            <th>Description</th>
            <th>Visible Light Transmission (VLT)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Light Tint</td>
            <td>Subtle, legal everywhere</td>
            <td>~50%</td>
          </tr>
          <tr>
            <td>Medium Tint</td>
            <td>Balanced privacy and style</td>
            <td>~35%</td>
          </tr>
          <tr>
            <td>Dark Tint</td>
            <td>Maximum privacy, may vary by law</td>
            <td>~20%</td>
          </tr>
          <tr>
            <td>Ceramic/Carbon</td>
            <td>High-performance, heat-rejecting films</td>
            <td>~15%–70% (varied)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
