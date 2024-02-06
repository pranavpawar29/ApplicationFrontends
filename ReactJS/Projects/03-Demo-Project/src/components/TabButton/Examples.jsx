import { useState } from "react";
import { EXAMPLES, TABS_ARRAY } from "../../data";
import TabButton from "../TabButton/TabButton";
import Section from "../Section";
import Tabs from "./Tabs";

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    let tabContent = !selectedTopic ? <p>Please select a topic.</p> : (
        <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>
    )

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs 
                //ButtonsContainer="menu"
                buttons={
                TABS_ARRAY.map((tab) =>
                    <TabButton key={tab.key} isSelected={selectedTopic === tab.key} onClick={() => handleSelect(tab.key)}>{tab.value}</TabButton>
                )}>
                {tabContent}
            </Tabs>
        </Section>
    );
}





{/* <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
<TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
<TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
<TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton> */}
