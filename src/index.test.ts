import { expect } from 'chai';
import fromNow, { SECOND, MINUTE, HOUR, DAY, FAILOVER } from './index';

it('humanize from now', () => {
  const d = new Date();
  const t = d.getTime();

  expect(fromNow('randomstring')).to.eql(FAILOVER);
  expect(fromNow(t + 1000)).to.eql(FAILOVER);

  expect(fromNow(d)).to.eql('just now');
  expect(fromNow(d.toISOString())).to.eql('just now');
  expect(fromNow(t)).to.eql('just now');

  expect(fromNow(t - 4 * SECOND)).to.eql('just now');

  expect(fromNow(t - 6 * SECOND)).to.eql('a few seconds ago');
  expect(fromNow(t - 44 * SECOND)).to.eql('a few seconds ago');

  expect(fromNow(t - 45 * SECOND)).to.eql('a minute ago');
  expect(fromNow(t - 89 * SECOND)).to.eql('a minute ago');

  expect(fromNow(t - 90 * SECOND)).to.eql('2 minutes ago');
  expect(fromNow(t - 45 * MINUTE + SECOND)).to.eql('45 minutes ago');

  expect(fromNow(t - 45 * MINUTE)).to.eql('an hour ago');
  expect(fromNow(t - 90 * MINUTE + SECOND)).to.eql('an hour ago');

  expect(fromNow(t - 90 * MINUTE)).to.eql('2 hours ago');
  expect(fromNow(t - 22 * HOUR + SECOND)).to.eql('22 hours ago');

  expect(fromNow(t - 22 * HOUR)).to.eql('a day ago');
  expect(fromNow(t - 36 * HOUR + SECOND)).to.eql('a day ago');

  expect(fromNow(t - 36 * HOUR)).to.eql('2 days ago');
  expect(fromNow(t - 26 * DAY + SECOND)).to.eql('26 days ago');

  expect(fromNow(t - 26 * DAY)).to.eql('a month ago');
  expect(fromNow(t - 45 * DAY + SECOND)).to.eql('a month ago');

  expect(fromNow(t - 45 * DAY)).to.eql('2 months ago');
  expect(fromNow(t - 320 * DAY + SECOND)).to.eql('11 months ago');

  expect(fromNow(t - 320 * DAY)).to.eql('a year ago');
  expect(fromNow(t - 548 * DAY + SECOND)).to.eql('a year ago');

  expect(fromNow(t - 548 * DAY)).to.eql('2 years ago');
  expect(fromNow(t - 1000 * DAY)).to.eql('3 years ago');
  expect(fromNow(t - 10000 * DAY)).to.eql('27 years ago');
});
