import React from "react";
import { UserLeaderboardListItem } from "./user-leaderboard-listitem";
import { UserListItemTopper } from "./user-list-item-topper";

export const UserLeaderBoardToday = ({ data, topper }) => {
  //   const restWinners = data.map((item) => <UserLeaderboardListItem />);
  //     const toppers = topper.map((item) => <UserListItemTopper />);
  return (
    <>
      <div>
        {topper.map((item) => (
          <UserListItemTopper />
        ))}
      </div>
      <div>
        {data.map((item) => (
          <UserLeaderboardListItem />
        ))}
      </div>
    </>
  );
};
