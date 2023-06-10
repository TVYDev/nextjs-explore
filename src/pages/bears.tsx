import { useState } from "react";

import useBearsStore from "@/stores/bearsStore";
import useCarsStore from "@/stores/carsStore";

const BearPage = () => {
  const [inputBy, setInputBy] = useState(1);
  const bears = useBearsStore.use.bears();
  const increaseBears = useBearsStore.use.increase();
  const { cars, increase: increaseCars } = useCarsStore();

  return (
    <>
      <input
        value={inputBy}
        onChange={(e) => setInputBy(parseInt(e.currentTarget.value))}
      />
      <div>@@@@@@@</div>
      <div>TOTAL Bear 🐻 = {bears}</div>
      <button onClick={() => increaseBears(inputBy)}>Add more bears</button>
      <div>==========</div>
      <div>TOTAL Cars 🚙 = {cars}</div>
      <button onClick={() => increaseCars(inputBy)}>Add more cars</button>
    </>
  );
};

export default BearPage;
