import FoodDisplayer from "./components/food-displayer";
import FoodDisplayerContainer from "./components/food-displayer-container";

export default async function Home() {
  return (
    <div>
      <div>
        <FoodDisplayer />
      </div>
      <div></div>
    </div>
  );
}
