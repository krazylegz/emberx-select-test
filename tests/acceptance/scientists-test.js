import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | scientists');

test('visiting /scientists', function(assert) {
  const scientists = ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];

  visit('/scientists');

  andThen(function() {
    assert.equal(currentURL(), '/scientists');
    scientists.forEach(function(scientist, i) {
      assert.equal(find(`ul li:eq(${i})`).text(), scientist);
    });
  });
});
