import { Content, NodeType } from "../../models/richText";

type PreparationProps = {
  data: Content[];
};

type ItemProps = { content: string; type: NodeType; key: string };

const Preparation = ({ data }: PreparationProps) => {
  const renderItem = ({ content, type, key }: ItemProps) => {
    if (type === "heading-6") {
      return <h6 className="text-xl font-semibold text-zinc-600 my-1" key={key}>{content}</h6>;
    }

    return <p className="text-lg font-medium text-zinc-500 mb-2" key={key}>{content}</p>;
  };

  return (
    <section className="flex flex-col py-8">
      <h3 className="text-2xl font-semibold text-slate-700 mb-2">Method:</h3>
      {data.map(({ nodeType, content }, index) =>
        renderItem({
          key: `rt-${index}-${nodeType}`,
          content: content[0].value,
          type: nodeType,
        })
      )}
    </section>
  );
};

export default Preparation;
