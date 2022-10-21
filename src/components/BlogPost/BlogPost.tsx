import { createPolymorphicComponent, DefaultProps, Paper, useComponentDefaultProps } from "@mantine/core";
import useStyles from "./BlogPost.styles";
import React from "react";

export interface BlogPostProps extends DefaultProps<never> {
    title: string;
    variant?: "shadow" | "border" | "simple";
    children: React.ReactNode;
}

const defaultProps: Partial<BlogPostProps> = {
    variant: "border",
};

export const _BlogPost = React.forwardRef<HTMLDivElement, BlogPostProps>((props, ref) => {
    const { variant, children, className } = useComponentDefaultProps("BlogPost", defaultProps, props);
    const { classes, cx } = useStyles();

    return (
        <Paper className={cx(classes.root, className)} p="md" withBorder={variant === "border"} shadow={variant === "shadow" ? "sm" : undefined} ref={ref}>
            {children}
        </Paper>
    );
}) as any;

_BlogPost.displayName = "@theme/blocks/BlogPost";

export const BlogPost = createPolymorphicComponent<"div", BlogPostProps>(_BlogPost);
