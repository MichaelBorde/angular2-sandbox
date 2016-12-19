require('core-js/es7/reflect');

require('chai')
  .use(require('sinon-chai'))
  .use(require('chai-as-promised'))
  .should();

require('sinon-as-promised')(Promise);
