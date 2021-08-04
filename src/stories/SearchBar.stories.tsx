import React, { useEffect, useState } from "react";

import SearchBar from "../components/SearchBar/SearchBar";

export default {
  component: SearchBar,
  title: "SearchBar",
};

interface IShip {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: number;
  length: number;
  max_atmosphering_speed: number;
  crew: string;
  passengers: number;
  cargo_capacity: number;
  consumables: string;
  hyperdrive_rating: number;
  MGLT: number;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

const ShipCard: React.FC<{ ship: IShip }> = ({ ship }) => {
  return (
    <div
      style={{
        height: "6rem",
        width: "24rem",
        backgroundColor: "whitesmoke",
        margin: "1rem",
        padding: "10px",
        border: "2px solid",
        borderRadius: "10px",
      }}
    >
      <h3 style={{ margin: 0 }}>{ship.name}</h3>
      <ol style={{ margin: 0 }}>
        Manufacturer: <small>{ship.manufacturer}</small>
      </ol>
      <ol style={{ margin: 0 }}>
        Model: <small>{ship.model}</small>
      </ol>
      <ol style={{ margin: 0 }}>
        Cargo Capacity: <small>{ship.cargo_capacity}</small>
      </ol>
    </div>
  );
};

const Basic = (args) => {
  const [state, setState] = useState<IShip[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchStarShips = async () => {
      const response = await (
        await fetch("https://swapi.dev/api/starships")
      ).json();
      //@ts-ignore
      setState(response.results);
    };

    fetchStarShips();
  }, []);

  console.log(state);

  return (
    <div>
      <SearchBar
        {...args}
        value={search}
        onChange={(input) => setSearch(input.trim())}
        onCancelSearch={() => setSearch("")}
      />
      {state.length < 1 ? <h1>Loading Star Wars Ships...</h1> : null}
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
        {state
          .filter(
            (ship) =>
              ship.name.toLowerCase().includes(search.toLowerCase()) ||
              ship.manufacturer.toLowerCase().includes(search.toLowerCase()) ||
              ship.model.toLowerCase().includes(search.toLowerCase())
          )
          .map((s) => (
            <ShipCard key={s.name} ship={s} />
          ))}
      </div>
    </div>
  );
};

const OnClickSearch = (args) => {
  const [state, setState] = useState<IShip[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchStarShips = async () => {
      const response = await (
        await fetch("https://swapi.dev/api/starships")
      ).json();
      //@ts-ignore
      setState(response.results);
    };

    fetchStarShips();
  }, []);

  console.log(state);

  return (
    <div>
      <SearchBar
        {...args}
        value={search}
        onRequestSearch={(input) => setSearch(input.trim())}
        onCancelSearch={() => setSearch("")}
      />
      {state.length < 1 ? <h1>Loading Star Wars Ships...</h1> : null}
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
        {state
          .filter(
            (ship) =>
              ship.name.toLowerCase().includes(search.toLowerCase()) ||
              ship.manufacturer.toLowerCase().includes(search.toLowerCase()) ||
              ship.model.toLowerCase().includes(search.toLowerCase())
          )
          .map((s) => (
            <ShipCard key={s.name} ship={s} />
          ))}
      </div>
    </div>
  );
};

export const Default = Basic.bind({});
export const OptionalClickToSearch = OnClickSearch.bind({});
export const IconPlacement = Basic.bind({});

const defaultProps = {
  searchButtonOrder: 2,
  clearButtonOrder: 3,
};

const placementProps = {
  searchButtonOrder: {
    control: { type: "range", min: 0, max: 3, step: 1 },
  },
  clearButtonOrder: {
    control: { type: "range", min: 0, max: 3, step: 1 },
  },
};

OptionalClickToSearch.args = {
  ...defaultProps,
  onRequestSearch: "Function to search on click",
};

OptionalClickToSearch.argTypes = {
  onRequestSearch: {
    description: "Function to search on click",
  },
  ...placementProps,
};

IconPlacement.args = defaultProps;

IconPlacement.argTypes = placementProps;