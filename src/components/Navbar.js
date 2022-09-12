import { Navbar, Text, Input, Button, Link } from "@nextui-org/react";
import { useEffect, useState } from "react";
import SearchIcon from "../assets/Searchicion";

const AppNavbar = ({ setQuery, setRecepie, query }) => {
  const YOUR_APP_ID = "62154761";
  const YOUR_APP_KEY = "6a555d466bc6cd3b8d720e79f966808f";

  // const getRecepie = () => {
  //   let url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setRecepie(data.hits);
  //     });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    // getRecepie();
  };
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setRecepie(data.hits);
  //     });
  //   console.log(recepie);
  // }, [query]);

  return (
    <>
      <Navbar variant="static">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            FoodReceipes
          </Text>
          <Navbar.Content hideIn="xs">
            {/* <Navbar.Link href="#">Features</Navbar.Link>
            <Navbar.Link isActive href="#">
              Customers
            </Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Company</Navbar.Link> */}
          </Navbar.Content>
        </Navbar.Brand>

        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <form onSubmit={handleSubmit}>
              {/* <Input
                onClick={getRecepie}
                clearable
                contentLeft={
                  <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
                }
                contentLeftStyling={false}
                css={{
                  w: "100%",
                  "@xsMax": {
                    mw: "300px",
                  },
                  "& .nextui-input-content--left": {
                    h: "100%",
                    ml: "$4",
                    dflex: "center",
                  },
                }}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
              /> */}
            </form>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </>
  );
};

export default AppNavbar;
