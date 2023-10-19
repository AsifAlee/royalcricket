import React from "react";
import "../styles/guide-popup.scss";

export const GuideTable = ({ tableData, table4 }) => {
  return (
    <table className="guide-table">
      {tableData.map((item, index) => (
        <tr>
          <td className="index border-bottom tc border-right">{index + 1}</td>
          <td className="text border-bottom">
            <p>{item.text}</p>
          </td>
          {table4 ? (
            <td className="text border-bottom">{item.target}</td>
          ) : null}
        </tr>
      ))}
    </table>
  );
};
