import React from "react";

const AttemptsList = ({ attempts, dropAttempt }) => {
    return attempts.map((item) => {
      return <div key={item.id} onClick={ () => dropAttempt(item.id) }>{`${item.attemptData} ${item.id}`}</div>;
    });
  };

  export default AttemptsList;