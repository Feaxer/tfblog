import { Box, createStyles, DefaultProps, MantineSize, useComponentDefaultProps } from "@mantine/core";
import React from "react";

export interface ResponsiveContainerStylesParams {
    sizes: Record<MantineSize, number>;
}
const useStyles = createStyles((theme, { sizes }: ResponsiveContainerStylesParams) => ({
    root: {
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        [theme.fn.largerThan("xs")]: {
            width: sizes.xs,
        },
        [theme.fn.largerThan("sm")]: {
            width: sizes.sm,
        },
        [theme.fn.largerThan("md")]: {
            width: sizes.md,
        },
        [theme.fn.largerThan("lg")]: {
            width: sizes.lg,
        },
        [theme.fn.largerThan("xl")]: {
            width: sizes.xl,
        },
    },
}));

export interface ResponsiveContainerProps extends DefaultProps, React.ComponentPropsWithRef<"div"> {
    sizes?: Record<MantineSize, number>;
}

const defaultProps: Partial<ResponsiveContainerProps> = {
    sizes: {
        xs: 540,
        sm: 720,
        md: 960,
        lg: 1140,
        xl: 1320,
    },
};

export const ResponsiveContainer = React.forwardRef<HTMLDivElement, ResponsiveContainerProps>((props, ref) => {
    const { className, sizes, unstyled, ...other } = useComponentDefaultProps("ResponsiveContainer", defaultProps, props);

    const { classes, cx } = useStyles({ sizes }, { unstyled, name: "ResponsiveContainer" });
    return <Box className={cx(className, classes.root)} ref={ref} {...other} />;
});
