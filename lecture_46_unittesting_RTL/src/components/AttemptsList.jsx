import React from "react";

const AttemptsList = ({ attempts, dropAttempt }) => {
    return Array.isArray(attempts) && attempts.map((item) => {
      return <div key={item.id} onClick={ () => dropAttempt(item.id) }>{`${item.attemptData} ${item.id}`}</div>;
    });
  };

  export default AttemptsList;

  // проверка, что делать если не зашел массив