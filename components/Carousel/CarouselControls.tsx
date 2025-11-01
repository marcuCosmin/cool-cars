import {
  ChevronLeft,
  ChevronRight,
  PauseCircle,
  PlayCircle,
} from "react-bootstrap-icons"

type CarouselControlsProps = {
  itemWidth: number
  onSlideLeft: () => void
  onSlideRight: () => void
  isAutoSliding: boolean
  setIsAutoSliding: (isAutoSliding: boolean) => void
}

export const CarouselControls = ({
  itemWidth,
  onSlideLeft,
  onSlideRight,
  isAutoSliding,
  setIsAutoSliding,
}: CarouselControlsProps) => {
  const buttonsClassName =
    "p-2 text-primary hover:text-white duration-300 transition-colors"
  const onAutoSlideToggle = () => setIsAutoSliding(!isAutoSliding)

  return (
    <div
      className={`flex items-center duration-300 transition-opacity ${itemWidth ? "opacity-100" : "opacity-0"}`}
    >
      <button
        type="button"
        className={buttonsClassName}
        aria-label="Slide left"
        onClick={onSlideLeft}
      >
        <ChevronLeft size={40} />
      </button>
      <button
        type="button"
        className={buttonsClassName}
        onClick={onAutoSlideToggle}
        aria-label={isAutoSliding ? "Pause auto sliding" : "Play auto sliding"}
      >
        {isAutoSliding ? (
          <PauseCircle
            size={40}
            aria-hidden="true"
          />
        ) : (
          <PlayCircle
            size={40}
            aria-hidden="true"
          />
        )}
      </button>
      <button
        type="button"
        className={buttonsClassName}
        aria-label="Slide right"
        onClick={onSlideRight}
      >
        <ChevronRight size={40} />
      </button>
    </div>
  )
}
