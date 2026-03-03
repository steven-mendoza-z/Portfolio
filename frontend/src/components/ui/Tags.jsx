import Tag from "./Tag";
import RowWrapper from "./RowWrapper";

export function Tags({ tags }) {
  return (
    <RowWrapper gap={5}>
      {tags.map(tag => (
        <Tag key={tag} label={tag} />
      ))}
    </RowWrapper>
  );
}
export default Tags;
