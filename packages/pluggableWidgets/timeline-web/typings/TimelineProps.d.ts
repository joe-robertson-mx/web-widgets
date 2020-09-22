/**
 * This file was generated from Timeline.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties } from "react";
import {
    DynamicValue,
    ListValue,
    ListActionValue,
    ListAttributeValue,
    ListExpressionValue,
    ListWidgetValue,
    WebIcon
} from "mendix";

export type RenderModeEnum = "basic" | "custom";

export type GroupByKeyEnum = "day" | "month" | "year";

export interface TimelineContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    renderMode: RenderModeEnum;
    data: ListValue;
    eventTime: ListAttributeValue<Date>;
    title?: ListExpressionValue<string>;
    description?: ListExpressionValue<string>;
    time?: ListExpressionValue<string>;
    icon?: DynamicValue<WebIcon>;
    groupByKey: GroupByKeyEnum;
    showGroupDivider: boolean;
    onClick?: ListActionValue;
    customIcon?: ListWidgetValue;
    customGroupDivider?: ListWidgetValue;
    customTitle?: ListWidgetValue;
    customEventDateTime?: ListWidgetValue;
    customDescription?: ListWidgetValue;
}

export interface TimelinePreviewProps {
    class: string;
    style: string;
    renderMode: RenderModeEnum;
    data: {} | null;
    eventTime: string;
    title: string;
    description: string;
    time: string;
    icon: { type: "glyph"; iconClass: string } | { type: "image"; imageUrl: string } | null;
    groupByKey: GroupByKeyEnum;
    showGroupDivider: boolean;
    onClick: {} | null;
    customIcon: { widgetCount: number; renderer: ComponentType };
    customGroupDivider: { widgetCount: number; renderer: ComponentType };
    customTitle: { widgetCount: number; renderer: ComponentType };
    customEventDateTime: { widgetCount: number; renderer: ComponentType };
    customDescription: { widgetCount: number; renderer: ComponentType };
}
