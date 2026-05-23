import { useRef } from "react";
import PoliticianCard from "./PoliticianCard";

export default function CardStack({ politicians, isDark, onSelect }) {
  const scrollerRef = useRef(null);
  const dragState = useRef({ active: false, startX: 0, scrollLeft: 0 });

  function handlePointerDown(event) {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    dragState.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: scroller.scrollLeft,
    };
    scroller.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event) {
    const scroller = scrollerRef.current;
    if (!scroller || !dragState.current.active) return;

    const delta = event.clientX - dragState.current.startX;
    scroller.scrollLeft = dragState.current.scrollLeft - delta;
  }

  function handlePointerUp(event) {
    const scroller = scrollerRef.current;
    dragState.current.active = false;

    if (scroller?.hasPointerCapture(event.pointerId)) {
      scroller.releasePointerCapture(event.pointerId);
    }
  }

  if (politicians.length === 0) {
    return (
      <div
        className={`rounded-[2rem] p-10 text-3xl font-black ${
          isDark ? "bg-white/10" : "bg-black/10"
        }`}
      >
        No portfolios match this filter.
      </div>
    );
  }

  return (
    <div
      ref={scrollerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className="no-scrollbar flex cursor-grab touch-pan-x gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-8 pt-2 active:cursor-grabbing"
    >
      {politicians.map((politician, index) => (
        <div
          key={politician.id}
          className="min-w-[82vw] scroll-ml-4 snap-center sm:min-w-[420px] lg:min-w-[460px]"
          style={{ transform: `translateY(${index % 2 === 0 ? 0 : 24}px)` }}
        >
          <PoliticianCard
            politician={politician}
            isDark={isDark}
            onSelect={onSelect}
          />
        </div>
      ))}
    </div>
  );
}
