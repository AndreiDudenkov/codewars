function nbYear(p0, percent, aug, p) {
    for (var count = 0; p0 < p; count++) {
      p0 += p0 * percent / 100 + aug | 0
    }
    return count
  }
nbYear(1000, 0.02, 50, 5000)