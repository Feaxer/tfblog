import { Box, Center, Text } from "@mantine/core";
import React from "react";

function getLineBreaks(node) {
    // we only deal with TextNodes
    if (!node || !node.parentNode || node.nodeType !== 3) return [];
    // our Range object form which we'll get the characters positions
    const range = document.createRange();
    // here we'll store all our lines
    const lines = [];
    // begin at the first char
    range.setStart(node, 0);
    // initial position
    let prevBottom = range.getBoundingClientRect().bottom;
    let str = node.textContent;
    let current = 1; // we already got index 0
    let lastFound = 0;
    let bottom = 0;
    // iterate over all characters
    while (current <= str.length) {
        // move our cursor
        range.setStart(node, current);
        if (current < str.length - 1) range.setEnd(node, current + 1);
        bottom = range.getBoundingClientRect().bottom;
        if (bottom > prevBottom) {
            // line break
            lines.push(
                str.substr(lastFound, current - lastFound) // text content
            );
            prevBottom = bottom;
            lastFound = current;
        }
        current++;
    }
    // push the last line
    lines.push(str.substr(lastFound));

    return lines;
}
export default function Moni() {
    const [lines, setLines] = React.useState<Array<string>>([]);
    const txt = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        let res = getLineBreaks(txt.current!.childNodes[0]);
        console.log({ res });
        setLines(res);
    }, []);

    let content: any = (
        <Text weight="semibold" size="xl" ref={txt}>
            "With a resource create an unlimited number of websites with a set of highly polished UI components"
        </Text>
    );
    if (lines.length) {
        content = lines.map((l) => (
            <Text weight="semibold" size="xl">
                {l}
            </Text>
        ));
    }
    return (
        <Center sx={{ minHeight: "100vh" }}>
            <Box sx={{ width: 250 }}>{content}</Box>
        </Center>
    );
}
