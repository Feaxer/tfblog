const ComponentStab = `
import { createPolymorphicComponent, DefaultProps, useComponentDefaultProps } from "@mantine/core";
import React from "react";

export interface #COMPONENT_NAME#Props extends DefaultProps<never> {
    
}

const defaultProps: Partial<#COMPONENT_NAME#Props> = {

};

export const _#COMPONENT_NAME# = React.forwardRef<HTMLDivElement, #COMPONENT_NAME#Props>((props, ref) => {
    const { children } = useComponentDefaultProps("#COMPONENT_NAME#", defaultProps, props);

    return (
        <div className={cx(classes.root, className)} ref={ref}>
            {children}
        </div>
    );
}) as any;

_#COMPONENT_NAME#.displayName = "@theme/blocks/#COMPONENT_NAME#";

export const #COMPONENT_NAME# = createPolymorphicComponent<"div", #COMPONENT_NAME#Props>(_#COMPONENT_NAME#);
`;
