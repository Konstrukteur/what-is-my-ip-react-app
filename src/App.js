import { useState, useEffect } from "react";
import { publicIpv4 } from "public-ip";
import Map from "./components/Map";

// console.log(await publicIp()); // Falls back to IPv4
// //=> 'fe80::200:f8ff:fe21:67cf'

// console.log(await publicIpv6());
// //=> 'fe80::200:f8ff:fe21:67cf'

// console.log(await publicIpv4());
// //=> '46.5.21.123'

function App() {
  const [ip, setIp] = useState();
  const [position, setPosition] = useState();

  useEffect(() => {
    try {
      publicIpv4().then((response) => {
        setIp(response);
      });
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    try {
      fetch(`https://ipapi.co/${ip}/json/`).then((response) =>
        response.json().then((position) => {
          setPosition(position);
        })
      );
    } catch (error) {
      console.error(error.message);
    }
  }, [ip]);

  return (
    <div className='App'>
      {position ? (
        <Map position={position} setIp={setIp} />
      ) : (
        "acquiring position ..."
      )}
    </div>
  );
}

export default App;
