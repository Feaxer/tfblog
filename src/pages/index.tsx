import { Box, Center } from "@mantine/core";
import * as React from "react";
import { Author } from "../components/Author";
import { ResponsiveContainer } from "../components/ResponsiveContainer";

export default function IndexPage() {
    return (
        <>
            <ResponsiveContainer sx={{}}>
                <Center py={24}>
                    <Author name="Alice" href="#" avatar="/static/faces/2.jpg" date="May 22, 2022" />
                </Center>
                <Box></Box>
            </ResponsiveContainer>
        </>
    );
}
