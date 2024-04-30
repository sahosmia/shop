  export const upFadeVariants = {
    initial: { opacity: 0, y:100  },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        type:"spring",
        duration: .5,
      },
    },
  };
  export const downFadeVariants = {
    initial: { opacity: 0, y:-100  },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        type:"spring",
        duration: .5,
      },
    },
  };