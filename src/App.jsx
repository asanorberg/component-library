import { useState } from "react";
import "./App.css";
import Button from "./Components/Buttons";
import Alert from "./Components/Alerts";
import Badge from "./Components/Badges";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper mx-auto sm:w-full md:w-fit lg:w-fit rounded-[0.5rem] sm:mt-6 sm:mb-6 shadow-md md:shadow-xl bg-white space-y-4">
      <div className="header flex-col  w-full rounded-t-[0.5rem] bg-purple-100 border-b border-b-purple-300 py-8 pl-8 text-purple-800">
        <h1 className="text-2xl font-bold">Component Library</h1>
        <h2 className="flex text-purple-800 opacity-60 text-sm space-x-2">
          <span>React</span>
          <span>|</span>
          <span>Vite</span>
          <span>|</span>
          <span>Tailwind</span>
        </h2>
      </div>

      <div className="main px-8">
        <div className="buttons flex-col border-b border-b-purple-300">
          <h2 className="headline mb-4 ">Buttons</h2>

          <h2 className="text-xs mb-2">Primary</h2>
          <div className="buttons-primary grid grid-cols-3 sm:flex gap-4 items-baseline mb-8">
            <Button color="primary" size="xs">
              Extra small
            </Button>
            <Button color="primary" size="sm">
              Small
            </Button>
            <Button size="md" color="primary">
              Base
            </Button>
            <Button size="lg" color="primary">
              Large
            </Button>
            <Button size="xl" color="primary">
              Extra large
            </Button>
            <Button size="xl" color="primary" disabled>
              Disabled
            </Button>
          </div>

          <h2 className="text-xs mb-2">Secondary</h2>
          <div className="buttons-secondary grid grid-cols-3  sm:flex gap-4 items-baseline mb-8">
            <Button size="xs" color="secondary">
              Extra small
            </Button>
            <Button size="sm" color="secondary">
              Small
            </Button>
            <Button size="md" color="secondary">
              Base
            </Button>
            <Button size="lg" color="secondary">
              Large
            </Button>
            <Button size="xl" color="secondary">
              Extra large
            </Button>
            <Button size="xl" color="secondary" disabled>
              Disabled
            </Button>
          </div>
          <h2 className="text-xs mb-2">Text</h2>

          <div className="buttons-text grid grid-cols-3 sm:flex gap-4 items-baseline mb-8">
            <Button size="xs" color="textbutton">
              Extra small
            </Button>
            <Button size="sm" color="textbutton">
              Small
            </Button>
            <Button size="md" color="textbutton">
              Base
            </Button>
            <Button size="lg" color="textbutton">
              Large
            </Button>
            <Button size="xl" color="textbutton">
              Extra large
            </Button>
            <Button size="xl" color="textbutton" disabled>
              Disabled
            </Button>
          </div>
        </div>

        <div className="alerts border-b border-b-purple-300 mt-8">
          <h2 className="headline">Alerts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-6 mb-10">
            <Alert color="theme" icon="infoCircle" />
            <Alert color="warning" icon="exclamationCircle" />
            <Alert color="success" icon="check" />
          </div>
        </div>

        <div className="badges  border-b border-b-purple-300 mt-8">
          <h2 className="headline">Badges</h2>
          <div className="grid grid-cols-3 sm:flex gap-8 my-6 mb-10">
            <Badge color="theme" icon="eye">
              View more
            </Badge>
            <Badge color="dark" icon="clock">
              Dark badge
            </Badge>
            <Badge color="red" icon="fail">
              Warning{" "}
            </Badge>
            <Badge color="green" icon="check">
              Success{" "}
            </Badge>
            <Badge color="theme" icon="none">
              Badge no icon
            </Badge>
          </div>
        </div>

        <div className="cards">
          <h2 className="headline">Cards</h2>
          <div className="grid md:grid-cols-2 md:flex gap-8 my-6 mb-10">
            <Card
              imgSrc="./src/assets/image-1.png"
              href="#"
              imgAlt="A cat looking cute"
            >
              <h4 className="font-bold text-xl">First headline</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                beatae molestiae iusto sit et cupiditate quidem.
              </p>
            </Card>

            <Card
              imgSrc="./src/assets/image-2.jpg"
              href="#"
              imgAlt="A cat looking cute"
            >
              <h4 className="font-bold text-xl">Second headline</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                beatae molestiae iusto sit et cupiditate quidem.
              </p>
            </Card>
          </div>
        </div>
      </div>

      <div className="footer flex-col w-full rounded-b-[0.5rem] bg-purple-100 py-8 pl-8 text-purple-600 mb-20">
        <h2 className="flex justify-center text-xs">Coded by</h2>
        <h2 className="flex justify-center text-xs font-semibold">Åsa N</h2>
      </div>
    </div>
  );
}

export default App;
