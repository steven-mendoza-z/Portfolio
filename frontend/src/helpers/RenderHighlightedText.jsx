import Text from "../components/atomics/Text";

export default function renderHighlightedText(text, className = "text-highlight-1 text-semibold") {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <Text as="span" key={i} className={className}>
          {part.slice(2, -2)}
        </Text>
      );
    }
    return <Text as="span" key={i}>{part}</Text>;
  });
}
