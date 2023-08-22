import { useState } from "react";

export default function App() {
  return (
    <div>
      <TextExpander collapsedNumWords={10}>
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
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
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
  buttonColor = "#ff6622",
  expanded,
  className,
  children,
  collapsedNumWords,
}) {
  const [exp, setExp] = useState(expanded);
  const [expButtonText, setExpButtonText] = useState("Show more");
  const [collButtonText, setCollButtonText] = useState("Show less");
  const [collNumWords, setCollNumWords] = useState(10);
  const [btnColor, setBtnColor] = useState("#0000FF");

  return (
    <div className="className">
      <Text collapsedNumWords={collNumWords} children={children} exp={exp} />{" "}
      <Button
        onSetExp={setExp}
        exp={exp}
        expandButtonText={expandButtonText}
        collapseButtonText={collapseButtonText}
        collapsedNumWords={collapsedNumWords}
        collNumWords={collNumWords}
        onSetCollapseNumWords={setCollNumWords}
        collButtonText={collButtonText}
        expButtonText={expButtonText}
        // btnColor={collapsedNumWords === 20 && setBtnColor(buttonColor)}
      />
    </div>
  );
}

function Text({ collapsedNumWords, children, exp }) {
  return (
    <>{exp ? children : children.split(" ", collapsedNumWords).join(" ")}</>
  );
}

function Button({
  onSetExp,
  exp,
  expandButtonText,
  collapseButtonText,
  buttonColor,
  collapsedNumWords,
  onSetCollapseNumWords,
  collButtonText,
  expButtonText,
  // btnColor,
}) {
  const handleExpand = (exp) => onSetExp(!exp);
  const handleCollapse = (exp) => onSetExp(exp);

  const btnStyle = {
    background: "none",
    border: "none",
    padding: 0,
    // buttonColor: btnColor,
  };
  return (
    <>
      {exp ? (
        <button style={btnStyle} onClick={() => handleCollapse()}>
          {collButtonText}
        </button>
      ) : (
        <button
          style={{ buttonColor: buttonColor }}
          onClick={() => handleExpand()}
        >
          ...{expButtonText}
        </button>
      )}
    </>
  );
}
