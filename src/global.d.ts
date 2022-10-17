import * as React from "@types/react";

declare global {
    interface FunctionComponent<P = {}> {
        (props: PropsWithChildren<P>, context?: any): ReactElement<
            any,
            any
        > | null;
    }
}
