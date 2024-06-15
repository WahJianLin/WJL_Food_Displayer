import Image from "next/image";
import FoodDisplayer from "./components/food-displayer";

export default async function Home() {
  return (
    <div>
      <div>
        <FoodDisplayer></FoodDisplayer>
      </div>
      <div></div>
    </div>
  );
}
