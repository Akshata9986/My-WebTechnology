function prime(n) {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      console.log(`${n}is a prime`);
    } else {
      console.log(`${n}is  not prime`);
    }
  }
}
console.log(prime(3));
