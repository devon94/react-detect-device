import { isAndroid, isBrowser, isIE, isIOS, isMobile, isTablet, isWinPhone, isMobileOnly, isSmartTV, isConsole, isWearable } from '../lib/selectors'
import React, { Fragment, PropsWithChildren } from 'react'

interface BaseViewProps extends React.HTMLAttributes<HTMLDivElement> {
  renderWithFragment?: boolean
}

interface ViewProps extends PropsWithChildren<BaseViewProps> {
  children: React.ReactNode
}


export const AndroidView = ({ renderWithFragment, children, ...props }: ViewProps) => {
  return isAndroid ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null
}

export const BrowserView = ({ renderWithFragment, children, ...props }: ViewProps) => {
  return isBrowser ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null
}

export const IEView = ({ renderWithFragment, children, ...props }: ViewProps) => {
  return isIE ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null
}

export const IOSView = ({ renderWithFragment, children, ...props }: ViewProps) => {
  return isIOS ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null
}

export const MobileView = ({ renderWithFragment, children, ...props }: ViewProps) => {
  return isMobile ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null
}

export const TabletView = ({ renderWithFragment, children, ...props }: ViewProps) => {
  return isTablet ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null
}

export const WinPhoneView = ({ renderWithFragment, children, ...props }: ViewProps) => {
  return isWinPhone ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null
}

interface MobileOnlyViewProps extends BaseViewProps {
  viewClassName: string
}

export const MobileOnlyView = ({
  renderWithFragment,
  children,
  viewClassName,
  style,
  ...props
}: MobileOnlyViewProps) => {
  return isMobileOnly ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null
}

export const SmartTVView = ({ renderWithFragment, children, ...props }: ViewProps) => {
  return isSmartTV ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null
}

export const ConsoleView = ({ renderWithFragment, children, ...props }: ViewProps) => {
  return isConsole ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null
}

export const WearableView = ({ renderWithFragment, children, ...props }: ViewProps) => {
  return isWearable ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null
}

interface CustomViewProps extends BaseViewProps {
  condition: boolean
  viewClassName: string
}

export const CustomView = ({
  renderWithFragment,
  children,
  viewClassName,
  style,
  condition,
  ...props
}: CustomViewProps) => {
  return condition ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null
}
