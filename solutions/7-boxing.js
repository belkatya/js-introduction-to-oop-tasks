// BEGIN
export default (...args) => {
    const initialSum = args.reduce((acc, num) => acc + num, 0);
  
    const magic = (...nextArgs) => {
      const nextSum = nextArgs.reduce((acc, num) => acc + num, 0);
      const newSum = initialSum + nextSum;
      const nextMagic = (...furtherArgs) => {
        const furtherSum = furtherArgs.reduce((acc, num) => acc + num, 0);
        return magic(nextSum + furtherSum);
      };
      nextMagic.valueOf = () => newSum;
      return nextMagic;
    };
  
    magic.valueOf = () => initialSum;
    return magic;
  };
// END
