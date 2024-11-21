"use client";

import React from "react";
import {
  Expandable,
  ExpandableCard,
  ExpandableCardContent,
  ExpandableTrigger,
} from "@/components/ui/expandable";

export default function ExpandableComponent({
  imageSrc,
  imageAlt,
  title,
  description,
  position,
  collapsedSize = { width: 330, height: 220 },
  expandedSize = { width: 500, height: 520 },
  collapsedImageSize = { width: "200px", height: "200px" },
  expandedImageSize = { width: "300px", height: "300px" },
  expandDirection = "both",
  expandBehavior = "replace",
  hoverToExpand = false,
  expandDelay = 500,
  collapseDelay = 700,
  onExpandStart,
  onExpandEnd,
  children,
}) {
  return (
    <Expandable
      expandDirection={expandDirection}
      expandBehavior={expandBehavior}
      onExpandStart={onExpandStart}
      onExpandEnd={onExpandEnd}
    >
      {({ isExpanded }) => (
        <ExpandableTrigger>
          <ExpandableCard
            className="w-full relative"
            collapsedSize={collapsedSize}
            expandedSize={expandedSize}
            hoverToExpand={hoverToExpand}
            expandDelay={expandDelay}
            collapseDelay={collapseDelay}
          >
            <ExpandableCardContent>
              <div className="flex flex-col items-center">
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt={imageAlt || "Expandable content"}
                    className="object-cover rounded-md mb-4"
                    style={{
                      width: isExpanded
                        ? expandedImageSize.width
                        : collapsedImageSize.width,
                      height: isExpanded
                        ? expandedImageSize.height
                        : collapsedImageSize.height,
                      transition: "width 0.3s, height 0.3s",
                    }}
                  />
                )}
                <div className="text-center">
                  {title && (
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  )}
                  {position && (
                    <p className="text-sm text-gray-500 mb-2">{position}</p>
                  )}
                  {isExpanded && (
                    <>
                      {description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {description}
                        </p>
                      )}
                      {children}
                    </>
                  )}
                </div>
              </div>
            </ExpandableCardContent>
          </ExpandableCard>
        </ExpandableTrigger>
      )}
    </Expandable>
  );
}
