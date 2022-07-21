import "./App.css";
import TweetComponent from "./components/Tweet/Tweet";
import { ANAKIN_IMAGE, RAY_IMAGE } from "./constants/const-img";

function App() {
  return (
    <TweetComponent
      author={{
        name: "Anakin skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader",
      }}
      content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
      image={RAY_IMAGE}
      date={"26 лют."}
    />
  );
}

export default App;
