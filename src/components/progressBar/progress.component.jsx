import React from 'react'
import { Line } from 'rc-progress';

const ProgressComponent = () => {
  return (
    <>
      <div className="w-auto">
        <Line percent={90} strokeWidth={1} strokeColor="#4d4dff" />
      </div>
    </>
  );
}

export default ProgressComponent