// Introduction 引子

const fc = function (num) {
  console.log('num', num);
  this.num++;
};

fc.num = 1;

for ( let i = 0; i < 5; i++ ) {
  fc(i)
};
