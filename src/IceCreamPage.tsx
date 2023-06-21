import React, { createContext, useContext, useState } from "react";

export type State = {
  iceCreamCount: number;
  coffeeCount: number;
};

export type IceCreamContextType = {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
};

const initialState: State = {
  iceCreamCount: 10,
  coffeeCount: 10,
};

const IceCreamContext = createContext<IceCreamContextType>({
  state: initialState,
  setState: () => {},
});

function IceCreamComponent() {
  const { state, setState } = useContext<IceCreamContextType>(IceCreamContext);

  return (
    <div>
      <span> Ice cream count </span>
      <span> {state.iceCreamCount} </span>
      <button
        onClick={() =>
          setState((prevState: State) => ({
            ...prevState,
            iceCreamCount: prevState.iceCreamCount - 1,
          }))
        }
      >
        {" "}
        Buy{" "}
      </button>
    </div>
  );
}

function CoffeeCreamComponent() {
  const { state, setState } = useContext<IceCreamContextType>(IceCreamContext);

  return (
    <div>
      <span> Coffee count </span>
      <span> {state.coffeeCount} </span>
      <button
        onClick={() =>
          setState((prevState: State) => ({
            ...prevState,
            coffeeCount: prevState.coffeeCount - 1,
          }))
        }
      >
        {" "}
        Buy{" "}
      </button>
    </div>
  );
}

export default function IceCreamPage() {
  const [state, setState] = useState<State>(initialState);

  return (
    <IceCreamContext.Provider value={{ state, setState }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          justifyContent: "space-between",
        }}
      >
        <IceCreamComponent />
        <CoffeeCreamComponent />
      </div>
    </IceCreamContext.Provider>
  );
}
