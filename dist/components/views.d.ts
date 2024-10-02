import React, { PropsWithChildren } from 'react';
interface BaseViewProps extends React.HTMLAttributes<HTMLDivElement> {
    renderWithFragment?: boolean;
}
interface ViewProps extends PropsWithChildren<BaseViewProps> {
    children: React.ReactNode;
}
export declare const AndroidView: ({ renderWithFragment, children, ...props }: ViewProps) => React.JSX.Element | null;
export declare const BrowserView: ({ renderWithFragment, children, ...props }: ViewProps) => React.JSX.Element | null;
export declare const IEView: ({ renderWithFragment, children, ...props }: ViewProps) => React.JSX.Element | null;
export declare const IOSView: ({ renderWithFragment, children, ...props }: ViewProps) => React.JSX.Element | null;
export declare const MobileView: ({ renderWithFragment, children, ...props }: ViewProps) => React.JSX.Element | null;
export declare const TabletView: ({ renderWithFragment, children, ...props }: ViewProps) => React.JSX.Element | null;
export declare const WinPhoneView: ({ renderWithFragment, children, ...props }: ViewProps) => React.JSX.Element | null;
interface MobileOnlyViewProps extends BaseViewProps {
    viewClassName: string;
}
export declare const MobileOnlyView: ({ renderWithFragment, children, viewClassName, style, ...props }: MobileOnlyViewProps) => React.JSX.Element | null;
export declare const SmartTVView: ({ renderWithFragment, children, ...props }: ViewProps) => React.JSX.Element | null;
export declare const ConsoleView: ({ renderWithFragment, children, ...props }: ViewProps) => React.JSX.Element | null;
export declare const WearableView: ({ renderWithFragment, children, ...props }: ViewProps) => React.JSX.Element | null;
interface CustomViewProps extends BaseViewProps {
    condition: boolean;
    viewClassName: string;
}
export declare const CustomView: ({ renderWithFragment, children, viewClassName, style, condition, ...props }: CustomViewProps) => React.JSX.Element | null;
export {};
