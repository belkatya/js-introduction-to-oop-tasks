// BEGIN
export default (numer = 0, denom = 1) => {
    const createRational = (n, d) => {
        if (d === 0) {
            throw new Error("Denominator cannot be zero");
        }
        return {
            numer: n,
            denom: d,
            setNumer(newNumer) {
                this.numer = newNumer;
            },
            setDenom(newDenom) {
                if (newDenom === 0) {
                    throw new Error("Denominator cannot be zero");
                }
                this.denom = newDenom;
            },
            getNumer() {
                return this.numer;
            },
            getDenom() {
                return this.denom;
            },
            toString() {
                return `${this.numer}/${this.denom}`;
            },
            add(rational2) {
                const newNumer = (this.numer * rational2.denom) + (this.denom * rational2.numer);
                const newDenom = this.denom * rational2.denom;
                return createRational(newNumer, newDenom);
            },
        };
    };
    if (denom === 0) {
      throw new Error("Denominator cannot be zero");
    }
    return createRational(numer, denom);
  };
// END