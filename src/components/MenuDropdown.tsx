import { Button, Group, HoverCard, Stack, Text, ThemeIcon, useMantineTheme } from "@mantine/core"
import { IconCode, IconEye } from "@tabler/icons"
import React from "react"

export const MenuDropdown = () => {
    const theme = useMantineTheme();
    return <HoverCard shadow="lg" withArrow transition="pop">
        <HoverCard.Target>
            <Button>Designers</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown sx={{ padding: 24, border: "none" }}>
            <Stack spacing={20}>
                <Group spacing={16}>
                    <ThemeIcon size={48} variant="light" color="orange">
                        <IconEye />
                    </ThemeIcon>
                    <Stack spacing={0}>
                        <Text color="gray.8" weight={600} sx={t => ({ fontFamily: t.headings.fontFamily })}>Designer Search</Text>
                        <Text size={'sm'} color="dimmed">Find, contact and hire designers</Text>
                    </Stack>
                </Group>
                <Group spacing={16}>
                    <ThemeIcon size={48} variant="light" color="red">
                        <IconCode color={theme.colors.red[6]} />
                    </ThemeIcon>
                    <Stack spacing={0}>
                        <Text color="gray.8" weight={600} sx={t => ({ fontFamily: t.headings.fontFamily })}>Programming for all</Text>
                        <Text size={'sm'} color="dimmed">Find, contact and hire designers</Text>
                    </Stack>
                </Group>
            </Stack>

        </HoverCard.Dropdown>
    </HoverCard>
}