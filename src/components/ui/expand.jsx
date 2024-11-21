"use client";

import React from "react";
import {
  Expandable,
  ExpandableCard,
  ExpandableCardContent,
  ExpandableTrigger,
} from "@/components/ui/expandable";
import { Button } from "@/components/ui/button";
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
      {({ isExpanded, toggleExpand }) => (
        <>
          <ExpandableTrigger>
            <ExpandableCard
              className={`w-full relative ${isExpanded ? "z-10" : "z-0"}`}
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
                  <Button
                    onClick={toggleExpand}
                    className={`mb-2 px-4 py-2  text-white rounded  transition-colors justify-center items-center ${
                      !isExpanded ? "mt-0" : "mt-10"
                    }`}
                  >
                    {isExpanded ? "Show Less" : "More Info"}
                  </Button>
                </div>
              </ExpandableCardContent>
            </ExpandableCard>
          </ExpandableTrigger>
        </>
      )}
    </Expandable>
  );
}
