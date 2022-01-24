import axios from "axios";

interface weatherProps {
  city: string;
  setJsonData: React.Dispatch<React.SetStateAction<{}>>;
}

// export const weatherAPI = ({ city, setJsonData }: weatherProps) => {
//   axios({
//     url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=edaed1f8daf554f7dffaf1c906a651ac`,
//   }).then((response) => setJsonData(response.data));
// };
export const weatherAPI = ({ city, setJsonData }: weatherProps) => {
  axios({
    url: `https://api.openweathermap.org/data/2.5/onecall?lat=35.6895&lon=139.6917&appid=edaed1f8daf554f7dffaf1c906a651ac`,
  }).then((response) => setJsonData(response.data));
};

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}