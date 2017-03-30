import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';
import { select } from 'ember-quickstart/tests/helpers/x-select';

moduleForAcceptance('Acceptance | scientists');

test('visiting /scientists', function(assert) {
  const scientists = ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];

  visit('/scientists');

  select('#choose-scientist', scientists[1]);

  andThen(function() {
    assert.equal(currentURL(), '/scientists');
    scientists.forEach(function(scientist, i) {
      assert.equal(find(`ul li:eq(${i})`).text(), scientist);
    });
  });
});
