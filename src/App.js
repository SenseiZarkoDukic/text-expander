import { useState } from "react";

export default function App() {
  return (
    <div>
      <TextExpander collapsedNumWords={10} emoji="🚀">
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
        emoji="🛰️"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box" emoji="🌌">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  expandButtonText,
  collapseButtonText,
  buttonColor,
  expanded,
  className,
  children,
  collapsedNumWords,
  emoji,
}) {
  const [exp, setExp] = useState(expanded);
  const [expButtonText, setExpButtonText] = useState("Show more");
  const [collButtonText, setCollButtonText] = useState("Show less");
  const [collNumWords, setCollNumWords] = useState(collapsedNumWords);
  const [btnColor, setBtnColor] = useState("#0000FF");
  const [clName, setClName] = useState("");

  return (
    <div className={className ? className : clName}>
      <Text
        collNumWords={collNumWords}
        children={children}
        exp={exp}
        className={className}
        collapsedNumWords={collapsedNumWords}
      />{" "}
      <Button
        onSetExp={setExp}
        onSetExpBtnText={setExpButtonText}
        onSetCollBtnText={setCollButtonText}
        exp={exp}
        expandButtonText={expandButtonText}
        collapseButtonText={collapseButtonText}
        collapsedNumWords={collapsedNumWords}
        collNumWords={collNumWords}
        onSetCollapseNumWords={setCollNumWords}
        collButtonText={collButtonText}
        expButtonText={expButtonText}
        btnColor={btnColor}
        onSetBtnColor={setBtnColor}
        buttonColor={buttonColor}
      />
      {emoji}
    </div>
  );
}

function Text({ collNumWords, children, exp, className, collapsedNumWords }) {
  return (
    <>
      {exp
        ? children
        : children
            .split(
              " ",
              !collapsedNumWords ? (collapsedNumWords = 10) : collNumWords
            )
            .join(" ")}
    </>
  );
}

function Button({
  onSetExpBtnText,
  onSetCollBtnText,
  onSetExp,
  exp,
  expandButtonText,
  collapseButtonText,
  buttonColor,
  collapsedNumWords,
  onSetCollapseNumWords,
  collButtonText,
  expButtonText,
  btnColor,
  onSetBtnColor,
}) {
  const handleExpand = (exp) => onSetExp(!exp);
  const handleCollapse = (exp) => {
    onSetExp(exp);
  };

  const btnStyle = {
    background: "none",
    border: "none",
    padding: 0,
    color: collapsedNumWords === 20 ? buttonColor : btnColor,
    fontSize: "16px",
  };
  return (
    <>
      {exp ? (
        <button style={btnStyle} onClick={() => handleCollapse()}>
          {collapsedNumWords === 20 ? collapseButtonText : collButtonText}
        </button>
      ) : (
        <button style={btnStyle} onClick={() => handleExpand()}>
          ...
          {collapsedNumWords === 20 ? expandButtonText : expButtonText}
        </button>
      )}
    </>
  );
}
