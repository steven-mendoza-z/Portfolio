import Text from "../atomics/Text";

export function Tag({ label }) {
  return <Text className="tag" size="xxs" color="color-1">{label}</Text>;
}

export default Tag;
