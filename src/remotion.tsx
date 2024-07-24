import { registerRoot } from "remotion";
import { RemotionDemo } from "./compositions/Demo";
import "./styles.css"; // Import the Tailwind styles

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <RemotionDemo />
    </>
  );
};

registerRoot(RemotionRoot);
