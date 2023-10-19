import React, { useState } from "react";
import { LeaderBoardListItem } from "./leaderBoardListItem";
import { UserListItemTopper } from "./user-list-item-topper";

export const LeaderBoardOverall = ({ data }) => {
  const [isSeeMore, setIsSeeMore] = useState(1);
  return (
    <>
      <div
        style={{
          marginLeft: 5,
          marginRight: 5,
          marginTop: "5vw",
          position: "relative",
        }}
      >
        {isSeeMore
          ? data.slice(0, 10)?.map((item, index) => {
              if (index < 3) {
                return <UserListItemTopper item={item} index={index + 1} />;
              } else {
                return (
                  <LeaderBoardListItem
                    item={item}
                    index={index + 1}
                    hideGem={true}
                  />
                );
              }
            })
          : data?.map((item, index) => (
              <LeaderBoardListItem
                item={item}
                index={index + 1}
                hideGem={true}
              />
            ))}
      </div>

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
    </>
  );
};
