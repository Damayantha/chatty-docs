import type { MDXComponents } from "mdx/types";
import { Note, Warning, Tip, Info } from "@/components/mdx/Callout";
import { Card, CardGroup } from "@/components/mdx/Card";
import { Accordion, AccordionGroup } from "@/components/mdx/Accordion";
import { CodeGroup } from "@/components/mdx/CodeGroup";
import { ParamField, ResponseField } from "@/components/mdx/ParamField";
import { Expandable } from "@/components/mdx/Expandable";
import { RequestExample, ResponseExample } from "@/components/mdx/Example";
import { Frame } from "@/components/mdx/Frame";
import { ApiEndpointBadge } from "@/components/mdx/ApiEndpointBadge";
import { WordPressSettingsMockup } from "@/components/mdx/WordPressSettingsMockup";
import { Mermaid } from "@/components/mdx/Mermaid";
import { Children, isValidElement } from "react";

function MDXPre({ children, ...props }: React.ComponentPropsWithoutRef<"pre">) {
  const child = Children.toArray(children)[0];
  if (isValidElement<{ className?: string; children?: React.ReactNode }>(child)) {
    const className = child.props.className ?? "";
    if (className.includes("language-mermaid")) {
      const source = String(child.props.children ?? "").trim();
      return <Mermaid chart={source} />;
    }
  }
  return <pre {...props}>{children}</pre>;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Note,
    Warning,
    Tip,
    Info,
    Card,
    CardGroup,
    Accordion,
    AccordionGroup,
    CodeGroup,
    ParamField,
    ResponseField,
    Expandable,
    RequestExample,
    ResponseExample,
    Frame,
    ApiEndpointBadge,
    WordPressSettingsMockup,
    Mermaid,
    pre: MDXPre,
    ...components,
  };
}
