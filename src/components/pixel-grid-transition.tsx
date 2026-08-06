import { useEffect, useRef } from "react";
import { splitmix32 } from "../utilities/prng";

interface PixelGridTransitionProps {
  /** Color to transition to
   * in hex (#abcdef) form
   */
  inColor: string;
  /** Color to transition from
   *  in hex (#abcdef) form
   */
  outColor: string;
  /** Optional. If you want a top-down absorption,
   * you may either flip the inColor and outColor arguments
   * or keep the order, but set this to true
   *
   * Should not change over the course of its lifecycle
   * because it's not included as a dep inside this component's useEffect
   */
  inverted?: boolean;
}

function PixelGridTransition({
  inColor,
  outColor,
  inverted = false,
}: PixelGridTransitionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Number of pixels in the vertical stack
  const pixelVerticalCount = 6;
  const cellSize = 60;
  const height = cellSize * pixelVerticalCount;
  const cellsProbabilityDistribution = useRef<number[][]>([]);

  // Will be used for calculating normalized weighted cell value below
  // Y_2 = 1; Y_1 = 0; X_2 = 2; X_1 = 1 / pixelVerticalCount
  const slope = 1 / (2 - 1 / pixelVerticalCount);
  const yIntercept = 1 - slope * 2;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Returns the visibility of the canvas (boolean)
    // and its clamped visibility in the viewport
    const getCanvasViewportStatus = () => {
      if (!canvas) return;
      const windowHeight = window.innerHeight;
      const rectTop = canvas.getBoundingClientRect().top;
      const calc = (rectTop + height) / (windowHeight + height);
      //   return Math.max(Math.min(1, calc), 0);
      return {
        isVisible: calc >= 0 && calc < 1,
        result: Math.max(Math.min(1, calc), 0),
      };
    };

    const drawGrid = () => {
      if (!ctx) return;
      ctx.lineWidth = 1;
      ctx.strokeStyle = inColor;
      ctx.beginPath();
      for (let i: number = 0; i < canvas.width / cellSize; i++) {
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, height);
      }

      for (let i: number = 0; i < pixelVerticalCount; i++) {
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(canvas.width, i * cellSize);
      }
      ctx.stroke();
    };

    const initializeCellRandomWeights = () => {
      if (!ctx) return;
      // Function to generate a number -> [0, 1)
      // Instantiated here so that the random pattern stays the same
      // otherwise calling prng() directly would cause new random numbers to be generated
      // every time this this function is called
      // 42 refers to seed, iykyk
      const prng = splitmix32(42);
      ctx.clearRect(0, 0, canvas.width, height);

      // Iterates column-by-column (i and j swapped)
      // so that random numbers are generated per column from left to right
      // so that adjusting the screen width won't change the pattern of rows below the first row
      for (let j: number = 0; j <= Math.floor(canvas.width / cellSize); j++) {
        for (let i: number = 0; i < pixelVerticalCount; i++) {
          cellsProbabilityDistribution.current[i] =
            cellsProbabilityDistribution.current[i] ?? [];
          cellsProbabilityDistribution.current[i][j] = prng();

          //   FOR DEBUGGING PURPOSES
          //   ctx.beginPath();
          //   ctx.font = "bold 12px Arial";
          //   ctx.fillStyle = "red";
          //   ctx.textAlign = "center";
          //   ctx.textBaseline = "middle";
          //   ctx.fillText(
          //     cellsProbabilityDistribution.current[i][j].toFixed(2),
          //     j * cellSize + cellSize / 2,
          //     i * cellSize + cellSize / 2,
          //   );
        }
      }
    };

    // Paints a outColor to transparent overlay over the grid (inColor)
    // so that it blends seemlessly with the outColor background
    const drawOverlay = () => {
      if (!ctx) return;
      const gradient = ctx.createLinearGradient(0, 0, 0, height / 2);
      gradient.addColorStop(0, outColor + "FF");
      gradient.addColorStop(1, outColor + "00");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, height);
    };

    const drawActivatedCells = () => {
      if (!canvas) return;
      const { isVisible, result: threshold } = getCanvasViewportStatus()!;
      // So it does not draw the grid when the canvas is not visible
      if (threshold === undefined || !isVisible) return;
      for (let i: number = 0; i < pixelVerticalCount; i++) {
        const bias = (i + 1) / pixelVerticalCount;
        for (let j: number = 0; j <= Math.floor(canvas.width / cellSize); j++) {
          const weightedCell =
            cellsProbabilityDistribution.current[i][j] + bias;
          // Line calculations above used here
          const normalizedWeightedCell = slope * weightedCell + yIntercept;
          if (
            (!inverted && normalizedWeightedCell > threshold) ||
            (inverted && normalizedWeightedCell <= threshold)
          ) {
            ctx.fillStyle = inColor;
            ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
          }
        }
      }
    };

    const renderTransition = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, height);

      // RTX ON
      drawGrid();
      drawOverlay();

      drawActivatedCells();
    };

    // Optimization trickz
    let ticking = false;
    const scrollAndFire = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        renderTransition();
        ticking = false;
      });
    };

    const resizeAndRerender = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      initializeCellRandomWeights();
      renderTransition();
    };

    resizeAndRerender();
    window.addEventListener("scroll", scrollAndFire);
    window.addEventListener("resize", resizeAndRerender);
    return () => {
      window.removeEventListener("scroll", scrollAndFire);
      window.removeEventListener("resize", resizeAndRerender);
    };
    // outColor changes with inColor
    // so I decided not to include it here
    // 'inverted' is assumed static for the component's lifetime, not included as a dep
  }, [inColor]);

  return (
    <canvas
      ref={canvasRef}
      height={height}
      style={{ backgroundColor: outColor }}
    />
  );
}

export default PixelGridTransition;
