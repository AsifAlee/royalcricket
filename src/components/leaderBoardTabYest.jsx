import React, { useState } from "react";
import { LeaderBoardListItem } from "./leaderBoardListItem";
export const LeaderBoardTabYest = ({ data, estimatedRewards }) => {
  const [isSeeMore, setIsSeeMore] = useState(1);

  return (
    <div
      style={{
        marginLeft: 5,
        marginRight: 5,
        marginTop: "5vw",
      }}
    >
      {isSeeMore
        ? data
            .slice(0, 10)
            .map((item, index) => (
              <LeaderBoardListItem
                item={item}
                index={index + 1}
                rewardValue={estimatedRewards[index]}
              />
            ))
        : data.map((item, index) => (
            <LeaderBoardListItem item={item} index={index + 1} />
          ))}

      <div style={{ display: "flex", justifyContent: "center" }}>
        {data.length > 0 ? (
          isSeeMore ? (
            <button
              className="more-btn"
              onClick={() => setIsSeeMore(0)}
            ></button>
          ) : (
            <button
              className="less-btn"
              onClick={() => setIsSeeMore(1)}
            ></button>
          )
        ) : (
          <button className="no-data">No Data</button>
        )}
      </div>
    </div>
  );
};
