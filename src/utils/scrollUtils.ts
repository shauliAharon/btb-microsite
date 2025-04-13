export const scrollToSection = (sectionId: string, offset: number = 0) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const scrollToElement = (element: HTMLElement, offset: number = 0) => {
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export const handleScroll = (
  sectionId: string,
  isMobile: boolean = window.innerWidth <= 768
) => {
  const headerHeight = isMobile ? 100 : 200;
  scrollToSection(sectionId, headerHeight);
};
