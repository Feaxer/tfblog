import { Box, Center, Text } from "@mantine/core";
import React from "react";
import { BlogPost } from "../components/BlogPost";
import { ResponsiveContainer } from "../components/ResponsiveContainer";

export default function Moni() {
    return (
        <ResponsiveContainer sx={{background: "#f2f2f2" , paddingBlock: 32}}>
            <BlogPost variant="shadow" title="How to create a website">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, nostrum! Magni aspernatur sint pariatur? A consectetur est sed aspernatur
                voluptatem, minus nobis reiciendis illo soluta exercitationem. Nulla illum harum nemo.
            </BlogPost>
        </ResponsiveContainer>
    );
}
