var sum_to_n_a = function (n) {
  // sum through an iterative process
  // time complexity: O(n)
  var sumN = 0;
  for (var i = 0; i <= n; i++) {
    sumN += i;
  }
  return sumN;
};

var sum_to_n_b = function Container(n) {
  // sum through a recursive process
  // time complexity: O(n)

  // function in a container for private variable sumNo
  function sumNo(n, sumN = 0) {
    if (n > 0) {
      return sumNo(n - 1, sumN + n);
    } else {
      return sumN;
    }
  }

  return sumNo(n);
};

var sum_to_n_c = function (n) {
  // sum through formula for arithmetic progression
  // time complexity: O(1)
  if (n > 0) return n * (n + 1) * 0.5;
};
