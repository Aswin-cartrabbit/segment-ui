import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";

const TagsInput = ({ data, setData }: any) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: { key: string; preventDefault: () => void }) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      setData([...data, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveTag = (index: number) => {
    setData(data.filter((_: any, i: number) => i !== index));
  };

  return (
    <div className="flex items-centr">
      {data.map(
        (
          tag:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined,
          index: number
        ) => (
          <div
            key={index}
            className="flex items-center bg-orange-100 text-[#F27052] rounded-lg px-2 py-0.5 mr-2"
          >
            <span>{tag}</span>
            <button
              type="button"
              className="ml-2"
              onClick={() => handleRemoveTag(index)}
            >
              &times;
            </button>
          </div>
        )
      )}
      <div className="flex  items-center border border-gray-300 rounded-md p-0">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow focus:outline-[#F27052] border-none text-sm p-1 rounded-md"
          placeholder=""
        />
      </div>
    </div>
  );
};

export default TagsInput;
