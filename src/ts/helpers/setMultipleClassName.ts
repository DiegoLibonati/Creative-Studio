export const setMultipleClassName = (
  arr: NodeList,
  color: string,
  property: string,
  backgroundColor: string
): void => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i] as HTMLElement;

    element.style.color = color;
    element.style.setProperty(property, backgroundColor);
  }
};
