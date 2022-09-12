import {
  Button,
  Card,
  Col,
  Grid,
  Image,
  Input,
  Link,
  Modal,
  Row,
  Text,
} from "@nextui-org/react";
import React, { useCallback, useEffect, useState } from "react";
import SearchIcon from "../assets/Searchicion";
import "./styles.css";
const Cards = () => {
  const inputRef = React.useRef(undefined);

  const [recepie, setRecepie] = useState(null);
  const [modalrecepie, setModalrecepie] = useState(null);
  const [catogery, setCatogery] = useState("non-veg");
  const [dishtitle, setDishtitle] = useState("chicken 65");
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState("curry");
  console.log(query);
  // let query = "pasta";
  useEffect(() => {
    const YOUR_APP_ID = "62154761";
    const YOUR_APP_KEY = "6a555d466bc6cd3b8d720e79f966808f";
    let url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": false,
        "Content-Type": "text/plain",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecepie(data.hits);
      });
  }, [query]);
  // const handler = (items) => {
  //   console.log(items);
  // };
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  // const onChangeInput = useCallback(
  //   (e) => {
  //     setQuery(e.target.value);
  //   },
  //   [query]
  // );
  return (
    <>
      <div className="headings">
        <h3>Catogery</h3>
        <div className="name" style={{ display: "flex" }}>
          <p>
            {catogery} - {query}
          </p>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <Input
              ref={inputRef}
              // onChange={onChangeInput}
              clearable
              placeholder="Pakoda,pasta,noodles"
            />
            <SearchIcon
              className="searchicon"
              fill="var(--nextui-colors-accents6)"
              size={16}
              onClick={() => {
                setQuery(inputRef.current.value);
              }}
            />
          </div>

          {/* <Button
            className="searchbutton"
            
          ></Button> */}
        </div>
      </div>
      <div className="cards">
        {recepie
          ? recepie.map((items) => {
              return (
                <div className="cardlists" onClick={() => console.log("jeelo")}>
                  {/* <Card
                    isPressable
                    isHoverable
                    onClick={handler}
                    css={{ mw: "300px" }}
                  >
                    <Card.Body>
                      <img src={items.recipe.image} className="recepieimage" />
                      <p className="cardtitle" style={{ marginBottom: "-4px" }}>
                        {items.recipe.label}
                      </p>
                    </Card.Body>
                  </Card> */}
                  <Card
                    isPressable
                    isHoverable
                    onClick={() => {
                      setVisible(true);
                      setModalrecepie(items);
                    }}
                  >
                    <Card.Header
                      css={{ position: "absolute", zIndex: 1, top: 5 }}
                    >
                      <Col>
                        <Text
                          className="recepielabel"
                          size={14}
                          weight="bold"
                          transform="uppercase"
                          color="#ffffffAA"
                        >
                          {items.recipe.cuisineType.toString() +
                            "(" +
                            items.recipe.dishType.toString() +
                            ")"}
                        </Text>
                        <Text
                          className="recepielabel"
                          size={12}
                          weight="bold"
                          transform="uppercase"
                          color="#dadada"
                        >
                          {items.recipe.dietLabels.toString()}
                        </Text>
                        <Text className="recepielabel" h4 color="white">
                          {items.recipe.label}
                        </Text>
                      </Col>
                    </Card.Header>
                    <Card.Image
                      src={items.recipe.image}
                      objectFit="cover"
                      width="100%"
                      height={340}
                      alt="Card image background"
                    />
                  </Card>
                  <div>
                    {modalrecepie ? (
                      <Modal
                        closeButton
                        blur
                        scroll
                        width="600px"
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                        open={visible}
                        onClose={closeHandler}
                        style={{ padding: "10px" }}
                      >
                        <Modal.Header>
                          <Text id="modal-title" size={18} weight="bold">
                            {modalrecepie.recipe.label}
                          </Text>

                          <br />
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            className="modalimage"
                            src={modalrecepie.recipe.image}
                            alt="image"
                          />
                          <p style={{ lineHeight: 1.6 }}>
                            <span>Dishtype:</span>{" "}
                            {modalrecepie.recipe.dishType.toString()}
                            <br />
                            <span>DietType:</span>{" "}
                            {modalrecepie.recipe.dietLabels.toString()}
                            <br />
                            <span>FoodType:</span>{" "}
                            {modalrecepie.recipe.cuisineType.toString()}
                            <br />
                            <span>Health:</span>{" "}
                            {modalrecepie.recipe.healthLabels.toString()}
                          </p>
                          <h4>Recepies</h4>
                          {modalrecepie.recipe.ingredientLines.map(
                            (ingrediants) => {
                              return <li>{ingrediants}</li>;
                            }
                          )}
                        </Modal.Body>
                      </Modal>
                    ) : null}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};
export default Cards;
