import { Button, Flex } from "@mantine/core";
import React, { useEffect } from "react";

const MainScreen = () => {
  const [counter, setCounter] = React.useState(1);
  const [blank, setBlank] = React.useState([]);
  const [reference, setReference] = React.useState([]);
  const [sample, setSample] = React.useState([]);
  const [result, setResult] = React.useState([]);

  useEffect(() => {
    window.indexBridge.onData((event, data) => {
      switch (counter) {
        case 1:
          setBlank(data);
          break;
        case 2:
          setReference(data);
          break;
        case 3:
          setSample(data);
          break;
        case 4:
          setResult(data);
          break;
      }
      const prevCounter = counter;
      setCounter(prevCounter + 1);
    });
  }, []);

  const sendRequest = () => {
    window.indexBridge.sendRequest("req");
  };

  const handleRestart = () => {
    setCounter(1);
    setBlank([]);
    setReference([]);
    setSample([]);
    setResult([]);
  };
  return (
    <Flex gap={"xl"} p={"xl"} w={"100%"} justify={"center"}>
      <Button onClick={sendRequest} disabled={blank}>
        Blank
      </Button>
      <Button onClick={sendRequest} disabled={reference || !blank}>
        Reference
      </Button>
      <Button onClick={sendRequest} disabled={sample || !reference || !blank}>
        Sample
      </Button>
      <Flex direction={"column"} gap={"xl"} align={"center"}>
        {blank && <p>Blank value: {blank}</p>}
        {reference && <p>Reference value: {reference}</p>}
        {sample && <p>Sample value: {sample}</p>}
        {result && <p>Result value: {result}</p>}
        {result && <Button onClick={handleRestart}>Restart</Button>}
      </Flex>
    </Flex>
  );
};

export default MainScreen;
