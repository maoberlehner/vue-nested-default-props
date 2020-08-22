export function calcAspectRatio(aspectRatio, { width, height }) {
  if (!width && !height) throw new Error(`You must provide either width or height!`);
  if (width && height) return { width, height };

  const [aspectWidth, aspectHeight] = aspectRatio.split(`/`).map(x => parseInt(x, 10));

  if (width) return { width, height: Math.round(aspectHeight / aspectWidth * width) };

  return { width: Math.round(aspectWidth / aspectHeight * height), height };
}
