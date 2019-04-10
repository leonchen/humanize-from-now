# humanize-from-now
Generates momentjs like time from now string


## About this project
This is a tiny function to genrate the momentjs like time-from-now string. Checkout the [momentjs doc](http://momentjs.com/docs/#/displaying/fromnow/) for the definitions.

## Installation
```
npm install --save humanize-from-now
```

## Usage
First import this module in your code:

```
import fromNow from 'humanize-from-now';
```
Then you can use it like:

```
const duration = fromNow(time);
```
the `time` argument could be the numeric timestamp in milliseconds, a valid js Date string or a js Date object.


you can also set a failover string when the input time is not valid:

```
const duration = fromNow(time, 'Invalid date');
```
and... That's it! Have fun!