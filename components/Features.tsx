import {
  LightningBoltIcon,
  PuzzleIcon,
  CogIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Design Patterns",
    icon: PuzzleIcon,
  },
  {
    name: " React Patterns",
    icon: () => <img src="/react.svg" height="24" width="24" />,
  },
  {
    name: "Rendering Patterns",
    icon: CogIcon,
  },
  {
    name: "Performance Patterns",
    icon: LightningBoltIcon,
  },
];

function Features() {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 my-12">
        {features.map(({ icon: Icon, ...feature }, i) => (
          <div
            className="flex items-center space-x-4"
            key={feature.name.split(" ").join("-")}
          >
            <div>
              <Icon
                className="block w-8 h-8"
                style={{ height: 24, width: 24 }}
                aria-hidden="true"
              />
            </div>
            <div>
              <div className="my-0 font-small dark:text-white">
                {feature.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Features;
