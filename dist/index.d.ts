/// <reference types="node" />
import { LinkProps } from "next/link";
import React from "react";
import { UrlObject } from "url";
interface Props extends Omit<LinkProps, "href"> {
    className?: string;
    children: React.ReactNode;
    href?: string | UrlObject;
    as?: any;
    locale?: string;
    [key: string]: any;
}
declare const Link: React.ForwardRefExoticComponent<Pick<Props, React.Key> & React.RefAttributes<HTMLAnchorElement>>;
export default Link;
