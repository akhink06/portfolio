"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RadialOrbitalTimeline({
  timelineData,
}) {
  const [expandedItems, setExpandedItems] = useState({});
  const [viewMode, setViewMode] = useState("orbital");
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState({});
  const [centerOffset, setCenterOffset] = useState({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState(null);
  
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const nodeRefs = useRef({});

  const handleContainerClick = (e) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index, total) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 250; // Increased radius for better spacing
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId) => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId) => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "completed":
        return "text-white bg-black border-white";
      case "in-progress":
        return "text-black bg-white border-black";
      case "pending":
        return "text-white bg-black/40 border-white/50";
      default:
        return "text-white bg-black/40 border-white/50";
    }
  };

  if (!timelineData || timelineData.length === 0) return null;

  return (
    <div
      className="w-full h-[600px] flex md:h-[800px] flex-col items-center justify-center bg-transparent overflow-hidden relative z-10"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Center glowing core */}
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-white/30 via-white/80 to-white/30 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-white/40 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-white/20 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md"></div>
          </div>

          {/* Orbital path track */}
          <div className="absolute w-[500px] h-[500px] rounded-full border border-white/10 border-dashed"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-none"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-14 h-14 rounded-full flex flex-col items-center justify-center
                  ${
                    isExpanded
                      ? "bg-white text-black"
                      : isRelated
                      ? "glass-panel text-white"
                      : "bg-[#050505] text-white"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-white shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                      : isRelated
                      ? "border-white animate-pulse"
                      : "border-white/20"
                  }
                  transition-all duration-300 transform hover:scale-110 hover:border-white/50
                  ${isExpanded ? "scale-125 hover:scale-125" : ""}
                `}
                >
                  {Icon && <Icon size={20} strokeWidth={isExpanded ? 2 : 1.5} />}
                </div>

                <div
                  className={`
                  absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-sm font-ui tracking-widest uppercase
                  transition-all duration-300
                  ${isExpanded ? "text-white scale-110 drop-shadow-md" : "text-white/60"}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-24 left-1/2 -translate-x-1/2 w-72 md:w-80 bg-[#050505]/95 backdrop-blur-xl border-white/20 shadow-2xl shadow-white/5 overflow-visible">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-t from-white/50 to-transparent"></div>
                    <CardHeader className="pb-3 border-b border-white/10 mb-2">
                      <div className="flex justify-between items-center">
                        <Badge
                          className={`px-3 py-1 font-mono text-[10px] tracking-widest ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === "completed"
                            ? "EXPERT"
                            : item.status === "in-progress"
                            ? "ADVANCED"
                            : "PROFICIENT"}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mt-3 font-hero tracking-wide">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm font-light text-white/70">
                      <p className="leading-relaxed mb-4">{item.content}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tools?.map((tool, i) => (
                           <span key={i} className="text-[10px] font-mono uppercase bg-white/10 text-white/90 px-2 py-1 rounded border border-white/5">
                             {tool}
                           </span>
                        ))}
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="flex justify-between items-center text-xs mb-2">
                          <span className="flex items-center text-white/50 font-mono uppercase tracking-widest">
                            <Zap size={12} className="mr-2 text-white/80" />
                            Proficiency
                          </span>
                          <span className="font-mono text-white/80">{item.energy}%</span>
                        </div>
                        <div className="w-full h-[2px] bg-white/10 overflow-hidden mt-1">
                          <div
                            className="h-full bg-white shadow-[0_0_10px_#fff]"
                            style={{ width: `${item.energy}%`, transition: 'width 1s ease-out' }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds && item.relatedIds.length > 0 && (
                        <div className="mt-5 pt-4 border-t border-white/10">
                          <div className="flex items-center mb-3">
                            <Link size={12} className="text-white/50 mr-2" />
                            <h4 className="text-[10px] uppercase tracking-widest font-mono text-white/50">
                              Synergetic Skills
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              if(!relatedItem) return null;
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-7 px-3 py-0 text-[10px] rounded-full font-mono uppercase border-white/20 bg-transparent hover:bg-white hover:text-black transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem.title}
                                  <ArrowRight
                                    size={10}
                                    className="ml-1 opacity-70"
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
