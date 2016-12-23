import {SynchronousPromise} from 'synchronous-promise';

function isObject(obj) {
  return obj === Object(obj);
}

export default function toutSuite(block) {
  let realPromise = global.Promise;

  global.Promise = SynchronousPromise;
  try {
    let ret = block();
    if (isObject(ret) && 'then' in ret) {
      let val;
      ret.then((x) => val = x);

      return val;
    }
  } finally {
    global.Promise = realPromise;
  }
}