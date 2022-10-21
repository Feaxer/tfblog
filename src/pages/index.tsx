import { Center, Stack, Image, useMantineTheme, createStyles, Container, Box, Badge, Overlay, Text, Group, ThemeIcon, ActionIcon } from "@mantine/core";
import * as React from "react";
import { ResponsiveContainer } from "../components/ResponsiveContainer";
import styled from "@emotion/styled";
import { IconHeart } from "@tabler/icons";

const Wrap = styled.div`
    max-width: 410px;
`;
const Card = styled.div`
    position: relative;
`;
const Img = styled(Image)`
    .mantine-Image-image {
        aspect-ratio: 16 / 9;
        border-radius: ${({ theme }) => theme.radius.md}px;
    }
`;
const useStyles = createStyles((theme) => ({
    wrap: {
        maxWidth: 410,
    },
    card: {
        position: "relative",
    },
    content: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 210,
        paddingBlock: 12,
        paddingInline: 16,
    },
    image: {
        ".mantine-Image-image": {
            aspectRatio: "7/5",
            borderRadius: theme.radius.md,
        },
    },
}));

const SBadge = styled(Badge)`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateY(0%) translateX(-50%);
    outline: 4px solid ${({ theme }) => theme.colors.gray[9]};
    z-index: 210;
    border-radius: 0 0 4px 4px !important;
`;

export default function IndexPage() {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const post = {
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    };
    return (
        <>
            <Center sx={(theme) => ({ minHeight: "100vh", background: theme.colors.gray[9] })}>
                <Wrap>
                    <Stack>
                        <Card>
                            <Overlay radius="md" gradient={`linear-gradient(0deg, black, transparent)`} opacity={0.8} />
                            <Img src={post.img} />
                            <SBadge variant="filled" radius="sm" size="lg">
                                Javascript
                            </SBadge>
                            <Box className={classes.content}>
                                <Group align="center">
                                    <Image
                                        width={60}
                                        radius={100}
                                        height={60}
                                        src="/static/faces/1.jpg"
                                        sx={{
                                            ".mantine-Image-image": {
                                                border: "4px solid rgba(255, 255, 255, 0.2)",
                                            },
                                        }}
                                    />
                                    <Box>
                                        <Text sx={{ lineHeight: 1 }} weight={600} size="lg" color="white">
                                            Design trends 2022
                                        </Text>
                                        <Group spacing={6}>
                                            <Text size="md" color="gray.5">
                                                Alice
                                            </Text>
                                            <Text size="xl" color="dimmed">
                                                ·
                                            </Text>
                                            <Text size="md" color="gray.5">NOV 21</Text>
                                        </Group>
                                    </Box>
                                    <ActionIcon color="white" variant="light" size="lg" ml={"auto"}>
                                        <IconHeart />
                                    </ActionIcon>
                                </Group>
                            </Box>
                        </Card>
                    </Stack>
                </Wrap>
            </Center>
        </>
    );
}
