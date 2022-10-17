import React from "react";
import { Anchor, Box, Text, Group, Image, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    image: {
        border: 2,
        borderStyle: "solid",
        borderColor: theme.colors.red[5],
    },
}));

export interface AuthorProps {
    avatar: string;
    name: string;
    href: string;
    date: string;
}

export const Author = ({ avatar, name, href, date }: AuthorProps) => {
    const { classes } = useStyles();
    return (
        <Group spacing={4}>
            <Image src={avatar} width={50} height={50} radius={500} mr={8} classNames={{ image: classes.image }} />
            <Box>
                <Anchor href={href} weight="bold" color="dark" mb={-2}>
                    {name}
                </Anchor>
                <Text color="dimmed">{date}</Text>
            </Box>
        </Group>
    );
};

Author.Inline = ({ avatar, name, href, date }: AuthorProps) => {
    return <Group spacing={4}>
        <Image src={avatar} width={50} height={50} radius={500} mr={8} classNames={{ image: classes.image }} />
        <Box>
            <Anchor href={href} weight="bold" color="dark" mb={-2}>
                {name}
            </Anchor>
            <Text color="dimmed">{date}</Text>
        </Box>
    </Group>

}
