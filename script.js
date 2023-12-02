function autocomplete(arr, A) {
    return arr.filter(item => item.includes(A));
  }
  
  console.log(autocomplete(['aaa', 'abc', 'abb', 'cca'], 'a'));
  console.log(autocomplete(['aaa', 'abc', 'abb', 'cca'], 'aa'));
  console.log(autocomplete(['aaa', 'abc', 'abb', 'cca'], 'ab'));
  console.log(autocomplete(['aaa', 'abc', 'bbb', 'cca'], 'b'));
  