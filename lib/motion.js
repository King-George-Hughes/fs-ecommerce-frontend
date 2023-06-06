const cartVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 },
};

const cartVariantParent = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.1 },
  },
};

export { cartVariantParent, cartVariant };
